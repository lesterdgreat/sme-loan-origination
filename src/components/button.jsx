import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonComponent ({className, variant, selectedRow, page}){
    const routeChange = () =>{ 
        window.location.replace(page + '/id=' + selectedRow.id);
    }
    return (
        <Button className={className} variant={variant} onClick={ routeChange } >Process</Button>
    );
}