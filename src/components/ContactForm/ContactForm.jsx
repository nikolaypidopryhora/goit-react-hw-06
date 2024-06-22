import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const FormSchema = Yup.object({
  name: Yup.string().min(3, "Too short!").required("Name required!"),
  number: Yup.string()
    .matches(
      "^[0-9]{3}[-][0-9]{2}[-][0-9]{2}$",
      "Wrong number. Example: 999-25-25"
    )
    .required("Number required!"),
});

export default function ContactForm({ onAdd }) {
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, action) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.field}>
          <label htmlFor={nameField}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameField} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberField}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberField}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
