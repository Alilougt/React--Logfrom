import { IFormInputList } from "../interfaces";

export const formInputList: IFormInputList[] = [
  {
    label: "Username",
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter your username",
  },
  {
    label: "Phone",
    type: "phone",
    name: "phone",
    id: "phone",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];
