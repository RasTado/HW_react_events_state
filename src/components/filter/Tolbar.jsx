import { Component } from "react";
import "./css/Tolbar.css";

export default class Tolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <div className="tolbar">
        {filters.map((filter) => (
          <button
            className={
              filter === selected ? "tolbarCsButton selected" : "tolbarCsButton"
            }
            key={filter}
            onClick={onSelectFilter}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
}
