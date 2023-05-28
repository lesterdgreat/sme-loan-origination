import React from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerComponent () {
    return (
        <>
            <div className="d-flex justify-content-center">
                <Spinner className="spinner" animation="grow" size="lg" variant="info" />
                <Spinner className="spinner" animation="grow" size="lg" variant="info" />
                <Spinner className="spinner" animation="grow" size="lg" variant="info" />
            </div>
        </>
    );
}