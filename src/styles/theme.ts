import { Viewport, ViewportShorthands } from './media';

const breakpoints = Object.values(Viewport)
  .filter(item => typeof item === 'number')
  .map(item => `${Number(item)}px`);

const theme = {
  space: [],
  breakpoints: breakpoints as Array<string> & ViewportShorthands,
};

const [tablet, mediumDesktop, desktop, bigDesktop] = breakpoints;

theme.breakpoints.t = tablet;
theme.breakpoints.md = mediumDesktop;
theme.breakpoints.d = desktop;
theme.breakpoints.bd = bigDesktop;

export default theme;
