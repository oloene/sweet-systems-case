import React from "react";
import "./styles.css";

export default function Grid({ renderHeader, renderRow, data }) {
    return (
        <table className="grid" cellSpacing={0} cellPadding={0}>
            <thead>{renderHeader()}</thead>
            <tbody>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        {renderRow(row, index)}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}
