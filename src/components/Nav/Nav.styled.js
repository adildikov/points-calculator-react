import styled, { css } from "styled-components";
import { Link as AppLink } from "react-router-dom";
import { motion } from "framer-motion";
import { headerHeight } from "@styles/sizes";
import { media } from "@styles/media";
import { size } from "polished";
import Colors from "@styles/colors";

const position = css`
  position: fixed;
  top: 0;
  left: 0;
  ${size(`calc(230px + ${headerHeight}px)`, "100%")};
`;

export const Root = styled(motion.div)`
  z-index: 99999;
  background: ${Colors.white};
  box-shadow: 0px 10px 30px rgba(19, 23, 31, 0.1);
  ${position};
`;

export const Cross = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 99999;
  cursor: pointer;
  background: ${Colors.white};

  ${size(30)}

  & > span {
    content: "";
    position: absolute;
    left: 50%;
    background-color: ${Colors.blue};
    display: inline-block;
    border-radius: 2px;

    ${size("100%", 3)}
  }

  ${media.desktop`
    right: 115px;
  `}

  ${media.bigDesktop`
    right: 300px;
  `}
`;

const NavItem = styled(motion.li)`
  position: relative;
  width: fit-content;
`;

export const SecondaryNavItem = styled(NavItem)`
  font-family: MontserratSemiBold;
  font-size: 22px;
  line-height: 26px;
  color: ${Colors.dark};

  margin-bottom: 14px;

  &:hover {
    color: ${Colors.blue};
  }
`;

export const Link = styled(AppLink)`
  position: absolute;
  top: 0;
  left: 0;

  ${size("100%")}
`;

export const NavItems = styled.ul`
  position: absolute;
  bottom: 5%;
  right: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  z-index: 12;
  top: calc(44px + ${headerHeight}px);
  left: 64px;
  list-style: none;

  & a {
    text-decoration: none;
  }

  ${media.desktop`
    right: 120px;
  `}

  ${media.bigDesktop`
    right: 302px;
  `}
`;
