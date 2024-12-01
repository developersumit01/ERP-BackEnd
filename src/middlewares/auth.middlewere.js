import jwt from "jsonwebtoken";
import { APIError } from "../utils/APIError.js";
import asyncHandler from "../utils/asyncHandler.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
    const accessToken = req.cookies?.accessToken;
    try {
        if (!accessToken) {
            throw new APIError(401, "Unaouthorized request");
        }
        const decodedAccessToken = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_KEY
        );
        req.user = decodedAccessToken;
        next();
    } catch (error) {
        throw new APIError(401, "you are unauthorized", [error]);
    }
});

export default verifyJWT;
