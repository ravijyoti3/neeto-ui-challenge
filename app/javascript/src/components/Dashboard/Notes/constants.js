import * as yup from "yup";

import { buildSelectOption } from "utils/index";

export const ROLE_DATA = [
  "UX Designer",
  "Tester",
  "Analyst",
  "Back-end developer",
  "Front-end developer",
];

export const TAGS_DATA = [
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  role: null,
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .oneOf(buildSelectOption(ROLE_DATA).map(role => role.label)),
      value: yup
        .string()
        .oneOf(buildSelectOption(ROLE_DATA).map(role => role.value)),
    })
    .required("Role is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup
            .string()
            .oneOf(buildSelectOption(TAGS_DATA).map(tag => tag.label)),
          value: yup
            .string()
            .oneOf(buildSelectOption(TAGS_DATA).map(tag => tag.value)),
        })
    )
    .min(1, "At least one tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
