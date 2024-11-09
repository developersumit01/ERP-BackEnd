import { APIError } from "./APIError";
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      throw new APIError(400, err?.message);
    });
  };
};

// NOTE:

/*
The asyncHandler is accepting the async function and returning a function which is resolving the async using promise 
*/

export default asyncHandler;
