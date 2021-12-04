import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import "./Filter.scss";

function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(actions.filter(e.target.value));
  };
  return (
    <label>
      <p className="Filter__title">Filter</p>
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
      ></input>
    </label>
  );
}

export default Filter;
