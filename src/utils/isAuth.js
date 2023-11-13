export const isAuth = () => {
  const userId = JSON.parse(window.localStorage.getItem("userData"));
  return !!userId;
};
