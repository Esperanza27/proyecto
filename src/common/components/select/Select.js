import { useState } from "react";

import "./Select.scss";

const Select = ({ list, label }) => {
  const [selectValue, setSelectValue] = useState("");

  const getSelectValue = (value) => {
    setSelectValue(value);
    console.log(value);
  };
  return (
    <div className="select-container">
      <label>{label}</label>
      <select
        value={selectValue}
        className="select"
        onChange={(e) => getSelectValue(e.target.value)}
      >
        <option value="" disabled selected>
          Select a city..
        </option>
        {list.map((v, i) => {
          return <option key={i + v?.value} value={v?.value}>{v?.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
