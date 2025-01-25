export const DEMO_API_FUNC = async (apiCallingFunctionQuery: any) => {

    // console.log("APi--- ",apiCallingFunctionQuery);

    return {
        fullUrl: "furtherUrl",
        method: 'POST',
        token: "Bearer any token",
        customHeaders: { 'Content-Type': 'application/json' },
        successCodeWithAction: [{
            code: 200,
            action: () => {
                console.log("Api hit successfully.")
            }
        }],
        errorCodeWithAction: [{
            code: 400,
            action: () => {
                console.log("Status code is 400.")
            },
        }]
    };
};