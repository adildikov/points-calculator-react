import React, { memo, useCallback, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import * as S from "./Popper.styled";

const status = {
  null: "Степень",
  gold: "Золото",
  bronze: "Бронза",
  silver: "Серебро",
};

const Popper = ({ children, value, ...rest }) => {
  const [visible, setVisibility] = useState(false);

  const reference = null;
  const popper = null;

  const { styles, attributes } = usePopper(reference, popper, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const handleDocumentClick = useCallback(() => {
    setVisibility(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    setVisibility(!visible);
  }, [visible]);

  useEffect(() => {
    if (visible) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
  }, [visible, handleDocumentClick]);

  return (
    <S.Root onClick={toggleVisibility} {...rest}>
      <S.Text>ГТО</S.Text>
      <S.Status hasValue={!!value}>{status[value]}</S.Status>
      <S.PopUpContainer
        style={styles.offset}
        visible={visible}
        {...attributes.popper}
      >
        {children}
      </S.PopUpContainer>
    </S.Root>
  );
};

export default memo(Popper);
