import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ButtonComponent from "../components/button";

export default function TablePaginationComponent ({columns, data, routePath}) {

    const [selRow, setDataEntrySelRow] = useState(null);
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true
    });

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: '#E6E1F9',
        onSelect: (row, isSelect, rowIndex, e) => {
            setDataEntrySelRow(row);
        },
    };

    return (
        <>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
            <BootstrapTable keyField="id" noDataIndication="No Record" data={data} columns={columns} pagination={pagination} 
                selectRow={selectRow} hover />
            </div>
            <div className="card-foot">
                <ButtonComponent className="paginationBtn" variant="dark" selectedRow={selRow} page={routePath} />
            </div>
        </div>
        </>
    );
}