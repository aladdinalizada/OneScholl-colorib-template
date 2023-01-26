import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
const Hero = () => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    retypepassword: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <div className="hero">
        <div className="row">
          <div className="left">
            <h1>Learn From The Expert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <button>
              <Link>ADMISSION now</Link>
            </button>
          </div>
          <div className="right">
            <div className="signupForm">
              <h2>Sign Up</h2>
              <Formik
                initialValue={{
                  email: "Email Adress",
                  password: "Password",
                  retypepassword: "Re-type Password",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field name="email" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <Field name="password" />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <Field name="retypepassword" />
                    {errors.retypepassword && touched.retypepassword ? (
                      <div>{errors.retypepassword}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
