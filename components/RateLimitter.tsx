
import React, { useRef, useCallback } from 'react';

/**
 * A wrapper component that rate-limits clicks on interactive elements (links and buttons) within its children.
 * It uses the capture phase of event handling to intercept clicks globally.
 * @param {React.ReactNode} children - The content to be rendered inside the rate limiter.
 * @param {number} delay - The cool-down period in milliseconds between allowed clicks.
 */
const RateLimiter: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
  const lastClickTime = useRef(0);

  const handleGlobalClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    // Check if the click was on an anchor or button element, or a descendant of one.
    const isInteractive = target.closest('a') || target.closest('button');
    
    if (!isInteractive) {
      return;
    }
    
    const now = Date.now();
    if (now - lastClickTime.current < delay) {
      // If the click is within the delay period, prevent the default action (e.g., navigation)
      // and stop the event from propagating further.
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Otherwise, update the last click time to the current time.
      lastClickTime.current = now;
    }
  }, [delay]);

  // Use `onClickCapture` to handle the event during the capture phase.
  // `display: 'contents'` makes the wrapper element not generate any specific boxes, 
  // so it doesn't interfere with the layout.
  return (
    <div onClickCapture={handleGlobalClick} style={{ display: 'contents' }}>
      {children}
    </div>
  );
};

export default RateLimiter;
