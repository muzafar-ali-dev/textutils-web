import "./App.css";
import Naavbar from "./components/Naavbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <>
      <Naavbar title="TextUtils" aboutText="About US" />
      <TextForm heading="Enter the text to Analyze Blow" />
    </>
  );
};

export default App;
