import Router, { useRouter } from "next/router";
import { useState } from "react";

const PostContactForm = async (
	values: any,
	successHandler: () => void,
) => {
	fetch("/api/contact",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		}).then(res => alert("Poruka poslana")).catch(err => console.log(err));

	successHandler();
};

const initialFormValues = {
	fullName: "",
	email: "",
	message: "",
	formSubmitted: false,
	success: false,
};

export const useFormControls = () => {
	const router = useRouter();
	const [values, setValues] = useState(initialFormValues);
	const [errors, setErrors] = useState({} as any);

	const validate: any = (fieldValues = values) => {
		let temp: any = { ...errors };

		if ("fullName" in fieldValues)
			temp.fullName = fieldValues.fullName ? "" : "This field is required.";

		if ("email" in fieldValues) {
			temp.email = fieldValues.email ? "" : "This field is required.";
			if (fieldValues.email)
				temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
					? ""
					: "Email is not valid.";
		}

		if ("message" in fieldValues)
			temp.message =
				fieldValues.message.length !== 0 ? "" : "This field is required.";

		setErrors({
			...temp,
		});
	};

	const handleInputValue = (e: any) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		validate({ [name]: value });
	};

	const formIsValid = (fieldValues = values) => {
		const isValid =
			fieldValues.fullName &&
			fieldValues.email &&
			fieldValues.message &&
			Object.values(errors).every((x) => x === "");

		return isValid;
	};

	const successHandler = () => {
		router.push("?message=success");
	};
	const handleFormSubmit = async (e: any) => {
		e.preventDefault();
		const isValid =
			Object.values(errors).every((x) => x === "") && formIsValid();
		if (isValid) {
			await PostContactForm(values, successHandler);
		}
	};

	return {
		values,
		errors,
		handleInputValue,
		handleFormSubmit,
		formIsValid,
	};
};
