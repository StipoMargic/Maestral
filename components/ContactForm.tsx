import { Button, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { useFormControls } from "./ContactFormControls.tsx";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

export const ContactForm = () => {
  const router = useRouter();
  const { message } = router.query;

  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();

  return (
    <form style={{ padding: "0 1rem" }} autoComplete="off" onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name]
            })}
          />
        );
      })}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid() || message === "success"}
      >
        Send Message
      </Button>
    </form>
  );
};
