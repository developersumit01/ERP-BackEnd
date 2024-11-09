import { asyncHandler } from "../utils/asyncHandler.js";
const registerStudent = asyncHandler(async (req, res) => {
  /*
            rollNo -> this will generate when the all the addmission will close, then after sorting the data by name and branch the rollNo will generate,

            enrollmentNo -> this will generate before save the student data in databse automaticlly

            password -> initial this data will same for everyone but after first time login the student have to reset their password of forget there password

            addmissionSession -> this data will set according to which session the student get register the method to get the session we use Date class of the Node

            qualifications -> this data should be entered by student itself after login

            section -> section will set when the class successfuly start by HOD
*/

  const {
    name,
    fatherName,
    motherName,
    course, // ObjetcID of the course model
    aadharNo,
    addmissionSemester,
    currentSemester,
    mobileNo,
    email,
    homeMobile,
    address,
    city,
    state,
    country,
    pinCode,
  } = req.body;
});
