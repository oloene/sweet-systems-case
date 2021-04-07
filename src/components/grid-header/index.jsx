import React from "react";
import sortIcon from "../../assets/images/sort.svg";
import checkbox from "../../assets/images/checkbox.svg";
import checkboxChecked from "../../assets/images/checkbox_checked.svg";
import "./styles.css";

export default function GridHeader({
    checkBoxAllSelected,
    text,
    sortProperty,
    toggleSelectAllRows,
    setSortedBy,
    sortedBy,
    sortType,
    setCheckBoxAllSelected,
}) {
    return (
        <th className="grid-header">
            <span>
                {toggleSelectAllRows && (
                    <img
                        onClick={() => {
                            toggleSelectAllRows(!checkBoxAllSelected);
                            setCheckBoxAllSelected((prev) => !prev);
                        }}
                        className="check-all-icon"
                        src={checkBoxAllSelected ? checkboxChecked : checkbox}
                        alt=""
                    />
                )}
                {text}
                {sortProperty && setSortedBy && sortType && (
                    <img
                        className={`sort-icon ${
                            sortedBy.sortProperty === sortProperty
                                ? "sorted"
                                : ""
                        }`}
                        onClick={() => {
                            setSortedBy((prev) => ({
                                sortProperty,
                                sortType,
                                inverse: !prev.inverse,
                            }));
                        }}
                        src={sortIcon}
                        alt=""
                    />
                )}
            </span>
        </th>
    );
}
