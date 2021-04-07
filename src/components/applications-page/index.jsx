import React, { useEffect, useState } from "react";
import Button from "../button";
import plus from "../../assets/images/plus.svg";
import checkbox from "../../assets/images/checkbox.svg";
import checkboxChecked from "../../assets/images/checkbox_checked.svg";
import Grid from "../grid";
import GridHeader from "../grid-header";
import "./styles.css";
import { sort_types, sorter } from "../../utils/sorting";

const testData = [
    {
        name: "Dashboard",
        created: "2019-05-28",
        createdBy: "Olof Enekvist",
        url: "dimitri.my.sweetcloud.se",
    },
    {
        name: "Homepage",
        created: "2019-09-28",
        createdBy: "Emelie Lundstrom",
        url: "test.my.sweetcloud.se",
    },
    {
        name: "Ether",
        created: "2012-01-28",
        createdBy: "Peter Hellstöm",
        url: "stephanos.my.sweetcloud.se",
    },
    {
        name: "Test case",
        created: "2015-01-28",
        createdBy: "Charlize Theron",
        url: "unique.my.sweetcloud.se",
    },
    {
        name: "Case54",
        created: "2020-05-12",
        createdBy: "Pelle Jöns",
        url: "foreign.my.sweetcloud.se",
    },
];

const defaultSort = {
    sortProperty: "created",
    inverse: true,
    sortType: sort_types._text,
};

export default function ApplicationsPage() {
    const [data, setData] = useState(testData);
    const [sortedBy, setSortedBy] = useState(defaultSort);
    const [checkBoxAllSelected, setCheckBoxAllSelected] = useState(false);

    useEffect(() => {
        if (sortedBy == null) return;

        const { inverse, sortType, sortProperty } = sortedBy;

        setData((prevData) =>
            sorter(prevData, inverse, sortType, sortProperty)
        );
    }, [sortedBy]);

    function toggleSelectAllRows(selected) {
        setData((prev) => [...prev].map((row) => ({ ...row, selected })));
    }

    function toggleSelect(url, selected) {
        setData((prev) =>
            [...prev].map((row) =>
                row.url === url ? { ...row, selected } : row
            )
        );
        setCheckBoxAllSelected(false);
    }

    return (
        <div className="applications-page">
            <div className="create-new-container">
                <Button text="Create new application" icon={plus} />
            </div>
            <div className="grid-container">
                <Grid
                    data={data}
                    renderHeader={() => (
                        <>
                            <GridHeader
                                checkBoxAllSelected={checkBoxAllSelected}
                                toggleSelectAllRows={toggleSelectAllRows}
                                setCheckBoxAllSelected={setCheckBoxAllSelected}
                            />
                            <GridHeader
                                text="Name"
                                sortProperty="name"
                                setSortedBy={setSortedBy}
                                sortedBy={sortedBy}
                                sortType={sort_types._text}
                            />
                            <GridHeader
                                text="Date created"
                                sortProperty="created"
                                setSortedBy={setSortedBy}
                                sortedBy={sortedBy}
                                sortType={sort_types._text}
                            />
                            <GridHeader
                                text="Created by"
                                sortProperty="createdBy"
                                setSortedBy={setSortedBy}
                                sortedBy={sortedBy}
                                sortType={sort_types._text}
                            />
                            <GridHeader text="URL address" />
                        </>
                    )}
                    renderRow={({
                        name,
                        created,
                        createdBy,
                        url,
                        selected,
                    }) => (
                        <>
                            <td>
                                <img
                                    src={selected ? checkboxChecked : checkbox}
                                    alt=""
                                    onClick={() => toggleSelect(url, !selected)}
                                />
                            </td>
                            <td>{name}</td>
                            <td>{created}</td>
                            <td>{createdBy}</td>
                            <td>
                                <a>{url}</a>
                            </td>
                        </>
                    )}
                />
            </div>
        </div>
    );
}
