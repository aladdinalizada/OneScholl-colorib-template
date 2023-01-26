import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss";
const MessageUS = () => {
  const FormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    subject: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <div>
      <div className="message-us">
        <div className="conatiner">
          <div className="content">
            <h2>Message Us</h2>
            <p>
              Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
              mollitia quibusdam temporibus culpa dolore molestias blanditiis
              consequuntur sunt nisi. First name
            </p>

            <div className="form">
              <div className="form-group">
                <Formik
                  initialValues={{
                    firstName: "First name",
                    lastName: "Last name",
                    subject: "Subject",
                    email: "Email",
                    message: "Write your message here",
                  }}
                  validationSchema={FormSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="flex">
                        <Field name="firstName" className="first" />
                        {errors.firstName && touched.firstName ? (
                          <div>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" className="last" />
                        {errors.lastName && touched.lastName ? (
                          <div>{errors.lastName}</div>
                        ) : null}
                      </div>
                      <Field name="subject" />
                      {errors.subject && touched.subject ? (
                        <div>{errors.subject}</div>
                      ) : null}
                      <Field name="email" />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                      <Field name="message" />
                      {errors.message && touched.message ? (
                        <div>{errors.message}</div>
                      ) : null}
                      <button type="submit">SEND MESSAGE</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageUS;
