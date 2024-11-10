const generateOTP = () => {
  let digits =
    "0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 8; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }
  return OTP;
};

export { generateOTP };
