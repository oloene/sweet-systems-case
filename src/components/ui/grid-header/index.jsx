import React from "react";
import sortIcon from "../../../assets/images/sort.svg";
import checkbox from "../../../assets/images/checkbox.svg";
import checkboxChecked from "../../../assets/images/checkbox_checked.svg";
import "./styles.css";

export default function GridHeader({
    checkBoxAllSelected,
    onSort,
    property,
    sortedBy,
    text,
    toggleSelectAllRows,
}) {
    /**
     * Icon for "select all rows"
     */
    function renderSelectAllIcon() {
        return (
            <img
                onClick={() => toggleSelectAllRows()}
                className="check-all-icon"
                src={checkBoxAllSelected ? checkboxChecked : checkbox}
                alt=""
            />
        );
    }

    /**
     * Icon for sorting up / down
     */
    function renderSortingIcon() {
        const sortBy =
            sortedBy.sortProperty === property
                ? sortedBy.inverse
                    ? "sorted-descending"
                    : "sorted-ascending"
                : "";

        return (
            <img
                className={`sort-icon ${sortBy}`}
                onClick={() => onSort(property)}
                src={sortIcon}
                alt=""
            />
        );
    }

    return (
        <th className="grid-header">
            <span>
                {toggleSelectAllRows && renderSelectAllIcon()}
                {text}
                {onSort && sortedBy && renderSortingIcon()}
            </span>
        </th>
    );
}
