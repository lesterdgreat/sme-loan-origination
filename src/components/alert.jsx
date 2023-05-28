import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertComponent ({variant, message}) {
    return (
        <Alert variant={variant}>
            <p>
                {message}
            </p>
        </Alert>
    );
}