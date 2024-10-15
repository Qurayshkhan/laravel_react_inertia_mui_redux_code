import * as Yup from "Yup";
export const RegisterSchema = Yup.object({
    name: Yup.string().min(8).max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Email Address"),
    password: Yup.string().min(8).required("Please Enter Your Password"),
    password_confirmation: Yup.string()
        .required("Confirmation password is required")
        .oneOf(
            [Yup.ref("password"), null],
            "Confirmation password must be match with password"
        ),
});
