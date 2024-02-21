function Validate(name, email, password) {
  const validatedName = /^[a-zA-Z.\s]+$/.test(name);
  const validatedEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatedPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
      password
    );

  if (!validatedName) {
    return "Invalid Name";
  }
  if (!validatedEmail) {
    return "Invalid Email";
  }
  if (!validatedPassword) {
    return "Invalid Password";
  }
  return "";
}

export default Validate;
