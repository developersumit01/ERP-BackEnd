import { APIError } from "./APIError.js";
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            // res.status(err.statusCode).send(err);
            console.log("Hello from async handler");
            res.json({ error: err });
            throw new APIError(err.statusCode, err?.message);
        });
    };
};

// NOTE:

/*
The asyncHandler is accepting the async function and returning a function which is resolving the async using promise 
*/

export default asyncHandler;
