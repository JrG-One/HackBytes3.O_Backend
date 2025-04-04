// const jwt = require("jsonwebtoken");
const generateOtp = () => {
    const OTP=() => Math.floor(1000 + Math.random() * 9000);

    return OTP();
}