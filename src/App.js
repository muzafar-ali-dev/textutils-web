import "./App.css";
import About from "./components/About";
import Naavbar from "./components/Naavbar";
import TextForm from "./components/TextForm";

const App = () => {
  return (
    <>
      <Naavbar title="TextUtils" aboutText="About US" />
      {/* <TextForm heading="Enter the text to Analyze Blow" /> */}
      <About />
    </>
  );
};

export default App;
