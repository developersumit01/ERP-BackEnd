import jwt from "jsonwebtoken";
import { APIError } from "../utils/APIError";
import asyncHandler from "../utils/asyncHandler.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
    const accessToken = req.cookies?.accessToken;
    try {
        if (!accessToken) {
            throw new APIError(401, "Unaouthorized request");
        }
        const decodedAccessToken = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_KEY
        );
        res.user = decodedAccessToken;
        next();
    } catch (error) {
        throw new APIError(
            500,
            "Their is some server error while authorization process",
            [error]
        );
    }
});

export default verifyJWT;
