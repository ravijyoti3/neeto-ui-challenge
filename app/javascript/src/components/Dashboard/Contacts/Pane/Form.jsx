import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  FORM_VALIDATION_SCHEMA,
  INITIAL_FORM_VALUES,
  ROLE_DATA,
} from "../constants";

const Form = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact added successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="space-between flex w-full">
              <Input
                className="mr-4 w-1/2 rounded-sm"
                label="First Name"
                name="first_name"
              />
              <Input
                className="w-1/2 rounded-sm"
                label="Last Name"
                name="last_name"
              />
            </div>
            <Input
              className="w-full flex-grow-0 rounded-sm"
              label="Email Address"
              name="email"
            />
            <Select
              isClearable
              isSearchable
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLE_DATA}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3 rounded-sm bg-gray-800 hover:bg-gray-600"
              disabled={isSubmitting}
              icon={Check}
              label="Save changes"
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              className="rounded-sm"
              label="Cancel"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
