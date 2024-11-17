import React from "react";
import { useAppContext } from "../Context";
import { Button, DatePicker, DateTimePicker } from "../components";

const SignIn: React.FC = () => {
  const { showSnackMessage, showAlertMessage, translate, changeLanguage } = useAppContext();
  console.log(translate);

  return (
    <>
      <Button onClick={() => showSnackMessage("Aqui temos uma mensagem")}>{translate("welcome")}</Button>
      <Button onClick={() => changeLanguage("es")}>ES</Button>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
      <Button onClick={() => changeLanguage("pt")}>PT</Button>

      <Button onClick={() => showAlertMessage("Aqui temos uma mensagem", "success")}>Clique alert</Button>

      <DateTimePicker
        ampm={false}
        format="DD/MM/YYYY HH:mm"
        onChange={(value) => {
          console.log(value.toString());
        }}
      />
      <DatePicker
        format="DD/MM/YYYY"
        onChange={(value) => {
          console.log(value.toString());
        }}
      />
    </>
  );
};

export default SignIn;
