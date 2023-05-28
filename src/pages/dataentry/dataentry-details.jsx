import React from "react";
import PageTitleComponent from "../../components/page-title";
import { Form, FloatingLabel, Col, Row } from "react-bootstrap";

export default function DataEntryDetailsScreen({info}) {
    return (
        <>
            <PageTitleComponent title="Data Entry Details Screen" />
            <div className="card">
                <div className="card-body">
                    <Form action="post" name="frmDataEntry">
                        <Row>
                            <Col className="col-sm-12 col-md-6 col-md-6">
                            </Col>
                            <Col className="col-sm-12 col-md-6 col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Customer Name" className="mb-3">
                                    <Form.Control size="sm" type="text" name="custName" placeholder=" " />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control size="sm" type="email" name="emailAddr" placeholder=" " />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Loan Code" className="mb-3">
                                    <Form.Control size="sm" type="text" name="loanCode" placeholder=" " />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Loan Type" className="mb-3">
                                    <Form.Control size="sm" type="text" name="loanType" placeholder=" " />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}