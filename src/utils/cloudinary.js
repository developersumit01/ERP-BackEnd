import { v2 as cloudinary } from "cloudinary";
import { APIError } from "./APIError.js";
import fs from "fs";
// Configuration
const setCloudinaryConfiguration = () => {
    cloudinary.config({
        cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
        api_key: `${process.env.CLOUDINARY_API_KEY}`,
        api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
    });
};
const uploadFileOnCloudinary = async (localFilePath) => {
    if (!localFilePath) return null;

    // Cloudinary config should be provided inside the function
    setCloudinaryConfiguration();

    let uploadResult = undefined;
    try {
        uploadResult = await cloudinary.uploader.upload(
            localFilePath, // path of the local file
            {
                resource_type: "auto",
            }
        );
        fs.unlinkSync(localFilePath);
    } catch (error) {
        fs.unlinkSync(localFilePath);
        throw new APIError(
            500,
            "There is some error while storing the file on cloud"
        );
    }

    return uploadResult;
};

const deleteFileFromCloudinary = async (publicID) => {
    let deleteResult = undefined;
    try {
        setCloudinaryConfiguration();
        deleteResult = await cloudinary.uploader.destroy(publicID);
    } catch (error) {
        throw new APIError(500, "Error while deleting your file from cloud", [
            error,
        ]);
    }
    return deleteResult;
};

export { uploadFileOnCloudinary, deleteFileFromCloudinary };

// Optimize delivery by resizing and applying auto-format and auto-quality

//     This function is use to get the optimize url of the image using public_id of the image which is provided by the response of the cloudinary uploader.upload function

//     const optimizeUrl = cloudinary.url('public_id', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
