import React from "react";
import { useAppContext } from "../Context";
import { Button, DatePicker, DateTimePicker } from "../components";

const SignIn: React.FC = () => {
  const { showSnackMessage, showAlertMessage } = useAppContext();

  return (
    <>
      <Button onClick={() => showSnackMessage("Aqui temos uma mensagem")}>Clique snack</Button>

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
