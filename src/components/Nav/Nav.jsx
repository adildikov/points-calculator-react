import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import Header from "../Header";
import AppLink from "@components/AppLink";

import * as S from "./Nav.styled";

import { items } from "./items";
import { secondaryItems } from "./items";

const commonTransitionSettings = {
  ease: "easeIn",
  duration: 0.3,
};

const Nav = ({ onClose }) => {
  const rootAnimation = useAnimation();
  const itemAnimation = useAnimation();
  const secondaryItemAnimation = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await rootAnimation.start({ opacity: 1 });

      await itemAnimation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15 },
      }));

      await secondaryItemAnimation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15 },
      }));
    };

    animate();
  });

  return (
    <S.Root
      className="nav"
      animate={rootAnimation}
      initial={{ opacity: 0 }}
      exit={{ y: "-100%" }}
      transition={commonTransitionSettings}
    >
      <Header onMenuClick={onClose} withBorder />
      <S.Cross onClick={onClose}>
        <motion.span
          animate={{ rotate: 45 }}
          transition={{
            ...commonTransitionSettings,
            delay: 0.2,
          }}
        />
        <motion.span
          animate={{ rotate: -45 }}
          transition={{
            ...commonTransitionSettings,
            delay: 0.2,
          }}
        />
      </S.Cross>
      <S.NavItems>
        {items.map(({ title, to }, i) => (
          <AppLink to={to} key={title}>
            <S.MainNavItem
              custom={i}
              initial={{ opacity: 0, y: -25 }}
              animate={itemAnimation}
              onClick={onClose}
            >
              {title}
            </S.MainNavItem>
          </AppLink>
        ))}
        <S.SecondaryItems mt={20}>
          {secondaryItems.map(({ title, to }, i) => (
            <AppLink to={to} key={title}>
              <S.SecondaryNavItem
                custom={i}
                initial={{ opacity: 0, y: -25 }}
                animate={secondaryItemAnimation}
                onClick={onClose}
              >
                {title}
              </S.SecondaryNavItem>
            </AppLink>
          ))}
        </S.SecondaryItems>
      </S.NavItems>
    </S.Root>
  );
};

export default Nav;
