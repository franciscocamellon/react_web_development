import logo from './logo.svg';
import './App.css';
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
      <NativeBaseProvider>
        <button>Olá!</button>
    </NativeBaseProvider>
  );
}

export default App;
