import React from "react";
import PageTitleComponent from "../../components/page-title";
import SpinnerComponent from "../../components/spinner";
import AlertComponent from "../../components/alert";
import TablePaginationComponent from "../../components/pagination-table";
import { LOAD_ALL_VERIFICATION_APP } from "../../common/url-constants";
import { TBL_VERIFICATION } from "../../common/column-constant";
import get from "../../services/commonservice";
export default function VerificationScreen() {

    const {data, loading, error} = get(LOAD_ALL_VERIFICATION_APP);

    if (loading) return <SpinnerComponent />;

    if (error) return <AlertComponent variant={"danger"} message={error} />;

    return (
        <>
            <PageTitleComponent title="Verification Screen" />
            <TablePaginationComponent columns={TBL_VERIFICATION} data={data} routePath="/sme-loan-origination/verification" />
        </>
    );
}