export const checkValidData = ( email, password, name, IsSignInForm) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  if (!isEmailValid) {
    return "Invalid email format. Please enter a valid email address.";
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{6,}$/;
  const isPasswordValid = passwordRegex.test(password);
  if (!isPasswordValid) {
    return "Enter Proper Valid Password";
  }

  // if (!IsSignInForm) {
  //   const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //   const isNameValid = nameRegex.test(name);
  //   if (!isNameValid) {
  //     return "Enter the Full name.";
  //   }
  // }

  return null;
};
