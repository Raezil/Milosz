import { useCallback, useEffect, useMemo, useState } from 'react';

export interface RateLimiterOptions {
  limit: number;
  intervalMs: number;
}

export interface RateLimiterAttemptResult {
  allowed: boolean;
  retryAfterMs: number;
  remaining: number;
}

interface RateLimiterState {
  remaining: number;
  resetAt: number | null;
}

export const useRateLimiter = ({ limit, intervalMs }: RateLimiterOptions) => {
  const [state, setState] = useState<RateLimiterState>(() => ({
    remaining: limit,
    resetAt: null,
  }));
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (typeof window === 'undefined' || state.resetAt === null) {
      return;
    }

    const timeoutMs = Math.max(0, state.resetAt - Date.now());
    const timeoutId = window.setTimeout(() => {
      setState({ remaining: limit, resetAt: null });
    }, timeoutMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [state.resetAt, limit]);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      state.resetAt === null ||
      state.remaining > 0
    ) {
      return;
    }

    setNow(Date.now());
    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, 500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [state.resetAt, state.remaining]);

  const attempt = useCallback((): RateLimiterAttemptResult => {
    const currentTime = Date.now();
    setNow(currentTime);

    let result: RateLimiterAttemptResult = {
      allowed: false,
      retryAfterMs: 0,
      remaining: 0,
    };

    setState((current) => {
      let { remaining, resetAt } = current;

      if (resetAt !== null && currentTime >= resetAt) {
        remaining = limit;
        resetAt = null;
      }

      if (remaining === limit) {
        resetAt = currentTime + intervalMs;
      }

      if (remaining > 0) {
        remaining -= 1;
        result = { allowed: true, retryAfterMs: 0, remaining };
      } else {
        const retryAfterMs = Math.max(
          0,
          (resetAt ?? currentTime + intervalMs) - currentTime,
        );
        result = { allowed: false, retryAfterMs, remaining };
      }

      return { remaining, resetAt };
    });

    return result;
  }, [intervalMs, limit]);

  const reset = useCallback(() => {
    setState({ remaining: limit, resetAt: null });
    setNow(Date.now());
  }, [limit]);

  const timeUntilResetMs = useMemo(() => {
    if (state.resetAt === null) {
      return 0;
    }

    return Math.max(0, state.resetAt - now);
  }, [state.resetAt, now]);

  const isRateLimited = state.remaining === 0 && timeUntilResetMs > 0;

  return {
    attempt,
    reset,
    remaining: state.remaining,
    isRateLimited,
    timeUntilResetMs,
  };
};

export type UseRateLimiterReturn = ReturnType<typeof useRateLimiter>;
