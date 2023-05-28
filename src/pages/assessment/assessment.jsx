import React from "react";
import PageTitleComponent from "../../components/page-title";
import SpinnerComponent from "../../components/spinner";
import AlertComponent from "../../components/alert";
import TablePaginationComponent from "../../components/pagination-table";
import { LOAD_ALL_ASSESSMENT_APP } from "../../common/url-constants";
import { TBL_ASSESSMENT } from "../../common/column-constant";
import get from "../../services/commonservice";

export default function AssessmentScreen() {
    const {data, loading, error} = get(LOAD_ALL_ASSESSMENT_APP);

    if (loading) return <SpinnerComponent />;

    if (error) return <AlertComponent variant={"danger"} message={error} />;

    return (
        <>
            <PageTitleComponent title="Assessment Screen" />
            <TablePaginationComponent columns={TBL_ASSESSMENT} data={data} routePath="/sme-loan-origination/assessment" />
        </>
    );
}