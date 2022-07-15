import { check } from "express-validator";

const registerCustomerValidator = () => {
  return [
    check("username")
      .escape()
      .trim()
      .isLength({ min: 3, max: 10 })
      .withMessage("Username must be between 3 and 10 characters long!"),
    check("password")
      .escape()
      .trim()
      .isStrongpassword()
      .withMessage(
        "Password is not valid! Must be minimum 10 characters long and include two lowercase, one uppercase, one symbol (e.g. @, !, # etc) and one number."
      ),
    check("emailAdress")
      .normalizeEmail()
      .isEmail()
      .withMessage("Email address is not valid!"),
  ];
};

export default registerCustomerValidator;