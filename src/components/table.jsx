import React from "react";
import { Table } from "react-bootstrap";

export default function TableComponent({param}) {
    return (
        <Table striped bordered hover>
            <colgroup>
                <col width="5%" />
                <col width="12%" />	
                <col width="18%" />
                <col width="20%" />
                <col width="17%" />
                <col width="8%" />
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Loan Amount</th>
                    <th>Loan Type</th>
                    <th>Loan Code</th>
                    <th>Application Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    param.map( (d,key) =>
                    <tr>
                        <td className='table-data'>{d.id }</td>
                        <td className='table-data'>{d.customerName }</td>
                        <td className='table-data'>{d.loanAmount }</td>
                        <td className='table-data'>{d.loanType }</td>
                        <td className='table-data'>{d.loanCode }</td>
                        <td className='table-data'>{d.applyDt }</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    )
}