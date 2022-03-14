# Development

## Dev Dependencies

1. [npm / npx](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [overmind](https://github.com/DarthSim/overmind)

If you are on a mac, both of these are available on [homebrew](https://brew.sh/).

## Running locally

```
git clone git@github.com:dctalbot/sun.git
cd sun
open build/index.html
npm install
overmind start 
```

Workflow:
1. Make a change
2. Observe new build artifact(s) (`git diff build`)
3. Reload browser (It's manual at the moment, hot reloading is a TODO)


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
