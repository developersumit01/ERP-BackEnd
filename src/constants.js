const DATA_BASE_NAME = "ERP_Project";
const COLLEGE_CODE = 128;
const CONST_URL = "/erp/api";
const TRANSACTION_OPTIONS = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
};
export { DATA_BASE_NAME, COLLEGE_CODE, CONST_URL, TRANSACTION_OPTIONS };
