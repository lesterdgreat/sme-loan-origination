import React from "react";
import get from "../../services/commonservice";
import { LOAD_ALL_DATAENTRY_APP } from "../../common/url-constants";
import SpinnerComponent from "../../components/spinner";
import AlertComponent from "../../components/alert";
import TablePaginationComponent from "../../components/pagination-table";
import { TBL_DATAENTRY } from "../../common/column-constant";
import PageTitleComponent from "../../components/page-title";

export default function DataEntryScreen() {
    const {data, loading, error} = get(LOAD_ALL_DATAENTRY_APP);

    if (loading) return <SpinnerComponent />;

    if (error) return <AlertComponent variant={"danger"} message={error} />;

    return (
        <>
            <PageTitleComponent title="Data Entry Screen" />
            <TablePaginationComponent columns={TBL_DATAENTRY} data={data} routePath="/sme-loan-origination/dataentry" />
        </>
    );
}