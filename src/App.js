import "./App.css";
import Register from "./tasks/Task1/Register";
import StepFormControl from "./tasks/Task2/StepFormControl";
import Captcha from "./tasks/Task3/Captcha";

const App = () => {
  return (
    <div className="App">
      <Register />
      <StepFormControl />
      <Captcha />
    </div>
  );
};

export default App;
