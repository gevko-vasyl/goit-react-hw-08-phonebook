import React from "react";
import { changeFilter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import "./Filter.scss";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = (event) => dispatch(changeFilter(event.target.value));
  return (
    <div className="Filter ">
      <h2 className="Filter__contacts-title">Contacts</h2>
      <h3 className="Filter__title">Find contacts by name</h3>
      <input
        className="Filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
