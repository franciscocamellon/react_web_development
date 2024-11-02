import React, { createContext, ReactNode, useContext, useState } from "react";
import { Alert, Grid, Snackbar } from "./components";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextInterface {
  changeLanguage: void;
  showSnackMessage: (message: string) => void;
  showAlertMessage: (message: string, severity: string) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const timeoutDuration = 6000;

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [alertMessage, setAlertMessage] = useState("");

  const changeLanguage = () => {
    console.log("Estou escolhendo uma linguagem");
  };

  const showSnackMessage = (message: string) => {
    setSnackMessage(message);
    setSnackOpen(true);
  };

  const showAlertMessage = (message: string, severity: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage("");
    }, timeoutDuration);
  };

  const handleClose = () => {
    setSnackMessage("");
    setSnackOpen(false);
  };

  const sharedState = {
    changeLanguage,
    showSnackMessage,
    showAlertMessage,
  };
  return (
    <AppContext.Provider value={sharedState}>
      {children}

      <Snackbar autoHideDuration={timeoutDuration} onClose={handleClose} open={snackOpen} message={snackMessage} />

      {alertMessage ? (
        <Grid
          container={true}
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            padding: 2,
          }}
        >
          <Grid item={true} size={{ xs: 12 }}>
            <Alert severity={alertSeverity}>{alertMessage}</Alert>
          </Grid>
        </Grid>
      ) : null}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
