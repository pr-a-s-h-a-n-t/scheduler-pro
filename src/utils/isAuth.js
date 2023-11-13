export const isAuth = () => {
  const getEmail = localStorage.getItem("email");
  return !!getEmail;
};
