import React, { useContext, useEffect, useMemo, useState } from "react";
import plus from "../../../assets/images/plus.svg";
import Modal from "../../ui/modal";
import GridHeader from "../../ui/grid-header";
import Grid from "../../ui/grid";
import checkboxChecked from "../../../assets/images/checkbox_checked.svg";
import checkbox from "../../../assets/images/checkbox.svg";
import Button from "../../ui/button";
import { sort_types, sortByProperty } from "../../../utils/sorting";
import CreateNewForm from "../../ui/create-new-form";
import "./styles.css";
import { ApplicationContext } from "../../../applicationContext";

const defaultSortedBy = {
    sortProperty: "created",
    inverse: true,
    sortType: sort_types._text,
};

export default function ApplicationsPage() {
    const { applications, setApplications } = useContext(ApplicationContext);
    const [showModal, setShowModal] = useState(false);
    const [checkBoxAllSelected, setCheckBoxAllSelected] = useState(false);
    const [selectedRows, setSelectedRows] = useState({});
    const [sortedBy, setSortedBy] = useState(defaultSortedBy);

    /**
     * Sorts data whenever sortedBy property changes
     */
    useEffect(() => {
        const { inverse, sortType, sortProperty } = sortedBy;
        setApplications((prevData) =>
            sortByProperty(prevData, inverse, sortType, sortProperty)
        );
    }, [sortedBy, setApplications]);

    /**
     * Memoize grid to only re-render when necessary
     */
    const grid = useMemo(() => {
        /**
         * Renders the grid header
         */
        function renderHeader() {
            return (
                <tr>
                    <GridHeader
                        checkBoxAllSelected={checkBoxAllSelected}
                        toggleSelectAllRows={() => {
                            // Toggle item selection on all rows
                            const allRowsSelected = applications.reduce(
                                (a, c) => ({
                                    ...a,
                                    [c.url]: !checkBoxAllSelected,
                                }),
                                {}
                            );
                            setSelectedRows(allRowsSelected);

                            // Toggle checkbox as selected
                            setCheckBoxAllSelected((prevState) => !prevState);
                        }}
                        sortedBy={sortedBy}
                    />
                    <GridHeader
                        text="Name"
                        onSort={(sortProperty) =>
                            setSortedBy((prevState) => ({
                                sortProperty,
                                inverse: !prevState.inverse,
                                sortType: sort_types._text,
                            }))
                        }
                        property="name"
                        sortedBy={sortedBy}
                    />
                    <GridHeader
                        text="Date created"
                        onSort={(sortProperty) =>
                            setSortedBy((prevState) => ({
                                sortProperty,
                                inverse: !prevState.inverse,
                                sortType: sort_types._text,
                            }))
                        }
                        property="created"
                        sortedBy={sortedBy}
                    />
                    <GridHeader
                        text="Created by"
                        onSort={(sortProperty) =>
                            setSortedBy((prevState) => ({
                                sortProperty,
                                inverse: !prevState.inverse,
                                sortType: sort_types._text,
                            }))
                        }
                        property="createdBy"
                        sortedBy={sortedBy}
                    />
                    <GridHeader text="URL address" />
                </tr>
            );
        }

        /**
         * Renders a grid row
         */
        function renderRow(row, index) {
            const { name, created, createdBy, url } = row;
            const isRowSelected = selectedRows[url] === true;

            return (
                <tr
                    className={`${index % 2 === 0 ? "bg-light-gray" : ""} ${
                        isRowSelected ? "selected" : ""
                    }`}
                >
                    <td>
                        <img
                            src={isRowSelected ? checkboxChecked : checkbox}
                            alt=""
                            onClick={() => {
                                // Toggle item selected
                                setSelectedRows((prevState) => ({
                                    ...prevState,
                                    [url]: !isRowSelected,
                                }));

                                // Set "all selected" to false
                                setCheckBoxAllSelected(false);
                            }}
                        />
                    </td>
                    <td>{name}</td>
                    <td>{created}</td>
                    <td>{createdBy}</td>
                    <td>
                        <a href={url}>{url}</a>
                    </td>
                </tr>
            );
        }

        return (
            <Grid
                data={applications}
                renderHeader={renderHeader}
                renderRow={renderRow}
            />
        );
    }, [applications, checkBoxAllSelected, sortedBy, selectedRows]);

    return (
        <div className="applications-page">
            <div className="create-new-container">
                <Button
                    onClick={() => setShowModal(true)}
                    text="Create new application"
                    icon={plus}
                />
            </div>
            <div className="grid-container">{grid}</div>
            <Modal
                headerText="New application"
                open={showModal}
                onClose={() => setShowModal(false)}
            >
                <CreateNewForm
                    setShowModal={setShowModal}
                    setSortedBy={setSortedBy}
                    sortedBy={sortedBy}
                />
            </Modal>
        </div>
    );
}
