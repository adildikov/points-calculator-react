import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";

import isExternalLink from "@utils/isExternalLink";

import * as Styled from "./AppLink.styled";

const AppLink = ({ children, to }) => {
  const { pathname } = useLocation();
  const handleClick = useCallback(
    (e) => {
      if (pathname === to || pathname === `${to}/`) {
        e.preventDefault();
      }
    },
    [pathname, to]
  );

  if (typeof to === "string" && isExternalLink(to)) {
    return (
      <Styled.ExternalLink target="_blank" href={to}>
        {children}
      </Styled.ExternalLink>
    );
  }

  return (
    <Styled.AppLink to={to} onClick={handleClick}>
      {children}
    </Styled.AppLink>
  );
};

export default AppLink;
