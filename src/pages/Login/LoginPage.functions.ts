export const authenticate = (
  login: string | undefined,
  password: string | undefined,
  setLogin: React.Dispatch<React.SetStateAction<string | undefined>>,
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>,
  setErrorState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (login === "junior" && password === "Admin@2022") {
    setErrorState(false);
    return true;
  } else {
    setErrorState(true);

    //clear inputs
    setLogin("");
    setPassword("");
  }
};
