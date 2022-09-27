import { buildSelectOption } from "utils";
import * as yup from "yup";

export const ROW_DATA = [
  {
    id: 0,
    name: "Oliver Smith",
    role: "Owner",
    email: "oliver@welcome.com",
    created_at: "Sep 23, 2022",
  },
  {
    id: 1,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@welcome.com",
    created_at: "Sep 23, 2022",
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "roland@borer.com",
    created_at: "Sep 23, 2022",
  },
  {
    id: 3,
    name: "Oliver Smith",
    role: "Owner",
    email: "oliver@welcome.com",
    created_at: "Sep 23, 2022",
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@welcome.com",
    created_at: "Sep 23, 2022",
  },
  {
    id: 5,
    name: "Ronald Richards",
    role: "Owner",
    email: "roland@borer.com",
    created_at: "Sep 23, 2022",
  },
];

export const ROLE_DATA = buildSelectOption([
  "UX Designer",
  "Tester",
  "Analyst",
  "Back-end developer",
  "Front-end developer",
]);

export const INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};

export const FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLE_DATA.map(role => role.label)),
      value: yup.string().oneOf(ROLE_DATA.map(role => role.value)),
    })
    .required("Role is required"),
});
