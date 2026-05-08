# Assignment 1: Live Digital Clock with useEffect


## Approach

1. **Maintained a state:** With `useState<Date>` also the state maintained a date object which could be easily formatted to string using .toLocaleTime() and .toLocaleDate with some configuration options.
2. **Use Effect:** Used `useEffect` with setInterval that updates the date state every 1000ms ie 1 second, the date state updation every sec re-renders the UI.
3. **Cleanup Logic:** The useEffect returns the cb `() => clearInterval(interval)`, used to clear interval during unmounting of the component/UI.
