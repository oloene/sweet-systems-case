import React from "react";
import "./styles.css";

export default function Grid({ renderHeader, renderRow, data }) {
    return (
        <table className="grid" cellSpacing={0} cellPadding={0}>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={row.url}
                        className={`${index % 2 === 0 ? "bg-light-gray" : ""} ${
                            row.selected ? "selected" : ""
                        }`}
                    >
                        {renderRow(row)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
