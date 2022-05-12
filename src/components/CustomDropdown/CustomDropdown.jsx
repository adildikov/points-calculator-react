import React from "react";
import Select, { components } from "react-select";
import Colors from "@styles/colors";
import styled from "styled-components";

const customStyles = {
  input: () => ({}),
  placeholder: (_, state) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "20px",
    color: state.selectProps.menuIsOpen ? Colors.bombay : Colors.mineShaft,
    fontFamily: "montserratRegular",
    fontSize: 16,
  }),
  singleValue: (_, state) => ({
    position: "absolute",
    zIndex: 0,
    top: "50%",
    transform: "translateY(-50%)",
    left: state.selectProps.selectProps.withLabel ? "20px" : "32px",
    width: "75%",
    marginTop: state.selectProps.selectProps.withLabel ? "6px" : "0px",
    color: Colors.mineShaft,
    fontFamily: "montserratRegular",
  }),
  container: (_, state) => ({
    position: "relative",
    width: "100%",
    margin: state.selectProps.selectProps.margin,
    // eslint-disable-next-line no-nested-ternary
    marginBottom: state.selectProps.selectProps.withLabel
      ? "0px"
      : state.selectProps.selectProps.marginBottom
      ? state.selectProps.selectProps.marginBottom
      : "20px",
    boxShadow: state.selectProps.selectProps.boxShadow,
    borderRadius: state.selectProps.selectProps.borderRadius,
  }),
  valueContainer: (_, state) => ({
    position: "relative",
    display: "block",
    width: "100%",
    height: "64px",
    borderRadius: "16px",
    padding: "22px 45px 17px 15px",
    background:
      // eslint-disable-next-line no-nested-ternary
      state.selectProps.selectProps.background === "white"
        ? Colors.white
        : state.selectProps.menuIsOpen
        ? Colors.white
        : Colors.alabaster,
    color: Colors.bombay,
    fontFamily: "montserratRegular",
    fontSize: 16,
    lineHeight: "20px",
  }),
  option: (provided) => ({
    ...provided,
    background: Colors.white,
    cursor: "pointer",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    color: Colors.mineShaft,
    padding: 20,
    "&:hover": {
      background: Colors.lightgrey,
    },
  }),
  selectedOption: () => ({
    background: Colors.alabaster,
  }),
  control: (_, state) => ({
    borderRadius: "50px",
    // eslint-disable-next-line no-nested-ternary
    border: state.selectProps.selectProps.noBorder
      ? "none"
      : state.selectProps.menuIsOpen
      ? `1px solid ${Colors.alabaster}`
      : "1px solid transparent",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (_, state) => ({
    position: "absolute",
    top: "50%",
    right: "20px",
    cursor: "pointer",
    fill: Colors.cornFlowerBlue,
    transform: state.selectProps.menuIsOpen
      ? "translateY(-50%) rotate(180deg)"
      : "translateY(-50%)",
  }),
  dropdownIndicator: () => ({
    color: Colors.red,
  }),
  menu: () => ({
    background: Colors.white,
    borderRadius: "15px",
    listStyle: "none",
    // marginTop: -1,
    fontFamily: "gTAmericaStandardRegular",
    fontSize: 16,
    padding: 0,
    position: "absolute",
    top: "78px",
    width: "100%",
    zIndex: 10,
    boxShadow: "0px 10px 30px rgba(19, 23, 31, 0.1)",
  }),
  menuList: (_, state) => ({
    maxHeight: state.selectProps.selectProps.maxHeight,
    overflow: "scroll",
    borderRadius: "15px",
  }),
};

const Label = styled.label`
  left: 20px;
  pointer-events: none;
  display: flex;
  height: 100%;
  position: absolute;
  z-index: 1;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  font-family: montserratRegular;

  ${(props) =>
    props.isFloating
      ? `top: 11px;
     align-items: flex-start;
     color: ${Colors.bombay};
     font-size: 12px;`
      : `top: 0px;
    align-items: center;
    color: ${Colors.melrose};
    font-size: 16px;`};
`;

export const Control = ({ isFocused, hasValue, ...rest }) => {
  return (
    <>
      <Label isFloating={hasValue}>
        {rest.selectProps.selectProps.placeholder}
      </Label>
      <components.Control {...rest} />
    </>
  );
};

const SelectField = ({
  options,
  field,
  form,
  background = "alabaster",
  noBorder = false,
  boxShadow = "none",
  borderRadius = "0",
  withLabel = false,
  margin = "0px",
  marginBottom = "0px",
  placeholder,
  handleChange,
  disabled = false,
  inServiceProviders = false,
  maxHeight = "300px",
}) => {
  const handleSelectChange = (option) => {
    if (inServiceProviders) {
      form.setFieldValue(field.name, option.value);
      form.setFieldValue("tag", option.value);
    } else {
      form.setFieldValue(field.name, option.value);
    }
    if (handleChange) {
      handleChange(option.value);
    }
  };
  return (
    <Select
      styles={customStyles}
      options={options}
      isSearchable={false}
      captureMenuScroll={false}
      selectProps={{
        background,
        noBorder,
        boxShadow,
        borderRadius,
        placeholder,
        withLabel,
        margin,
        marginBottom,
        maxHeight,
      }}
      name={field.name}
      placeholder={withLabel ? "" : placeholder}
      value={
        options ? options.find((option) => option.value === field.value) : ""
      }
      onChange={(option) => handleSelectChange(option)}
      onBlur={field.onBlur}
      components={withLabel ? { Control } : {}}
      isDisabled={disabled}
    />
  );
};

export default SelectField;
