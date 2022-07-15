import React from "react";
import SelectDropdown from "react-select";

var classNames = require("classnames");

const Select = ({
  value,
  options,
  // label,
  placeholder,
  name,
  setValue,
  isSearchable = false,
  hasError = false,
  isDisabled = false,
  isMulti = false,
}) => {
  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };
  //options.find((item) => item.id === value).label
  //{ value: value.id, label:value.lavel  }
  return (
    <SelectDropdown
      value={value !== null && options ? value : null}
      getOptionValue={(e) => e.id}
      onChange={handleChange}
      id={`id-${name}`}
      instanceId={`id-${name}`}
      inputId={`id-${name}`}
      options={options}
      placeholder={placeholder}
      //label ? label :
      isSearchable={isSearchable === true ? true : false}
      className={classNames({
        select__container: true,
        select__container_error: hasError,
      })}
      classNamePrefix="select"
      isDisabled={isDisabled}
      isMulti={isMulti}
    />
  );
};

export default Select;
