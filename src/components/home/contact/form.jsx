import React, { useEffect, useRef, useState } from "react";
import InputText from "./input-form";
import TextArea from "./textarea-form";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import Spinner from "../../utils/spin/loading-spinner";

const sendEmailSchema = Yup.object().shape({
  name: Yup.string().required("Fullname required!"),
  email: Yup.string().email().required("Email required!"),
  subject: Yup.string().required("Subject required!"),
  message: Yup.string().required("Message required!"),
});

const FormContact = () => {
  const form = useRef();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [errMssgEmail, setErrMssgEmail] = useState(null);
  const [successMssgEmail, setSuccessMssgEmail] = useState(null);

  useEffect(() => {
    if (successMssgEmail !== null) {
      setTimeout(() => {
        setSuccessMssgEmail(null);
      }, 5000);
    }
  }, [successMssgEmail]);
  return (
    <Formik
      initialValues={{
        name: "",
        subject: "",
        email: "",
        message: "",
      }}
      validationSchema={sendEmailSchema}
      onSubmit={(values, { resetForm }) => {
        if (values) {
          setIsLoadingSubmit(true);
          setErrMssgEmail(null);
          emailjs
            .sendForm("service_cvqw7zb", "template_y02dzea", form.current, {
              publicKey: "ka1Mr-PS_UCaXi4Ni",
            })
            .then(
              () => {
                setIsLoadingSubmit(false);
                setErrMssgEmail(null);
                setSuccessMssgEmail("The message has been sent.");
                resetForm();
              },
              (error) => {
                setIsLoadingSubmit(false);
                setErrMssgEmail(`Failed... ${error.text}`);
                resetForm();
              }
            );
        }
      }}
    >
      {({ handleSubmit, values }) => (
        <form ref={form} onSubmit={handleSubmit} autoComplete="off">
          <Field name="name" placeholder="Fullname" component={InputText} />
          <Field name="email" placeholder="Email" component={InputText} />
          <Field name="subject" placeholder="Subject" component={InputText} />
          <Field
            name="message"
            placeholder="Message"
            as="textarea"
            component={TextArea}
          />
          {errMssgEmail && <span className="text-red-500">{errMssgEmail}</span>}
          {successMssgEmail && (
            <span className="text-green-500">{successMssgEmail}</span>
          )}
          <button
            type="submit"
            disabled={isLoadingSubmit}
            className="text-white flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2"
          >
            {isLoadingSubmit && <Spinner />}
            <span>Send message</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormContact;

// emailjs
//   .sendForm("service_cvqw7zb", "template_y02dzea", form.current, {
//     publicKey: "ka1Mr-PS_UCaXi4Ni",
//   })
//   .then(
//     () => {
//       console.log("SUCCESS!");
//     },
//     (error) => {
//       console.log("FAILED...", error.text);
//     }
//   );
