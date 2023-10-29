export const isAuth = () => {
  const getEmail = localStorage.getItem("email");
  if (getEmail) return true;
  else return false;
};
