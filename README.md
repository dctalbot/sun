# Demo

https://dctalbot.github.io/sun/build

# User stories

- I want to find out when local sunset is
- I want to find sunrise times too
- I want to view at most 5 sunset/rise times at the same time to compare
- I want to do this in the browser on desktop, tablet, and/or mobile

# Plan of attack

- No routes except root /
- 1 reactive form using simple react state
- Shape of form state:

```js
[
  { lat, lon, sunrise, sunset },
  { lat, lon, sunrise, sunset },
  { lat, lon, sunrise, sunset },
  { lat, lon, sunrise, sunset },
  { lat, lon, sunrise, sunset },
];
```

I am not using an array of 2-valued arrays since [there is not a good standard](https://macwright.com/lonlat/) for whether lat or lon should come first.

# Tools used

| Name     | What            |
| -------- | --------------- |
| npm      | package manager |
| esbuild  | build tool      |
| tailwind | css toolkit     |
| react    | js              |
| overmind | process manager |
