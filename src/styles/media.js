import { css } from "styled-components";

export const Viewport = {
  mobile: 767,
  tablet: 1024,
  desktop: 1440,
  bigDesktop: 1920,
};

export const media = {
  tablet: (...args) => css`
    @media (min-width: ${Viewport.mobile}px) {
      ${css(...args)}
    }
  `,
  mediumDesktop: (...args) => css`
    @media (min-width: 1280px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${Viewport.tablet}px) {
      ${css(...args)}
    }
  `,
  bigDesktop: (...args) => css`
    @media (min-width: ${Viewport.desktop}px) {
      ${css(...args)}
    }
  `,
  largeDesktop: (...args) => css`
    @media (min-width: ${Viewport.bigDesktop}px) {
      ${css(...args)}
    }
  `,
  height:
    (maxHeight) =>
    (...args) =>
      css`
        @media (max-height: ${maxHeight}px) {
          ${css(...args)}
        }
      `,
  bigDesktopMax: (...args) => css`
    @media (max-width: ${Viewport.desktop}px) {
      ${css(...args)}
    }
  `,
};

export const isMobile = () => window.innerWidth < Viewport.mobile;

export const isTablet = () =>
  window.innerWidth >= Viewport.mobile && window.innerWidth < Viewport.tablet;

export const isDesktop = () =>
  window.innerWidth >= Viewport.tablet && window.innerWidth < Viewport.desktop;

export const isBigDesktop = () =>
  window.innerWidth >= Viewport.desktop &&
  window.innerWidth < Viewport.bigDesktop;

export const isLargeDesktop = () => window.innerWidth >= Viewport.bigDesktop;
