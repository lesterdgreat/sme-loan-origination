import React from "react";

export default function PageTitleComponent({title}) {
    return (
        <>
            <br />
            <div className="text-center">
                <h3 className="text-muted">{title}</h3>
            </div>
            <br />
        </> 
    );
}