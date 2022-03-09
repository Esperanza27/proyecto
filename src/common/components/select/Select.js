import { useState } from "react";

import "./Select.scss";

const Select = ({ list }) => {
  const [selectValue, setSelectValue] = useState("");

  const getSelectValue = (value) => {
    setSelectValue(value);
    console.log(value);
  };
  return (
    <div>
      <select
        value={selectValue}
        className="select-container"
        onChange={(e) => getSelectValue(e.target.value)}
      >
        <option value="" disabled selected>
          Select a city..
        </option>
        {list.map((v) => {
          return <option value={v?.value}>{v?.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
