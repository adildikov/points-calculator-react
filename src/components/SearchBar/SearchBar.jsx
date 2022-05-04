import React, { memo, useCallback, useEffect, useState } from "react";
import searchIcon from "@images/searchIcon.svg";

import * as S from "./SearchBar.styled";

const ComponentSearchBar = ({
  onSet,
  value,
  defaultValue,
  placeholder = "Search…",
  isInModal = false,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState(value);
  useEffect(() => {
    setSearchValue(value);
  }, [setSearchValue, value]);

  const handleClearInput = useCallback((e) => {
    if (e.target.value === "Interior") {
      e.target.value = "";
    }
  }, []);

  const handleChangeSearch = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const handleKayboardPressSearch = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (e.target.value.trim() === "") {
          setSearchValue("");
          onSet(defaultValue);
        } else if (e.target.value !== value) {
          setSearchValue(e.target.value);
          onSet(e.target.value);
        }
      }
    },
    [setSearchValue, onSet, value, defaultValue]
  );

  const handleBlurSearch = useCallback(
    (e) => {
      if (e.target.value.trim() === "") {
        onSet(defaultValue);
        setSearchValue("");
      } else if (e.target.value !== value) {
        setSearchValue(e.target.value);
        onSet(e.target.value);
      }
    },
    [setSearchValue, onSet, value, defaultValue]
  );
  return (
    <S.SearchBar {...rest}>
      <S.MySearchIcon src={searchIcon} />
      <S.SearchInput
        value={searchValue}
        placeholder={placeholder}
        onChange={handleChangeSearch}
        onKeyPress={handleKayboardPressSearch}
        onBlur={handleBlurSearch}
        onClick={handleClearInput}
      />
    </S.SearchBar>
  );
};

export default memo(ComponentSearchBar);
