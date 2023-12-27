import "./App.css";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041a30";
      showAlert("Dark Mode has been activated!", "success");
      document.title = "Text Transformation - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light Mode has been activated!", "success");
      document.title = "Text Transformation - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text Transformations"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <TextForm
              heading="Enter your text below:"
              mode={mode}
              showAlert={showAlert}
            />
        {/* <Routes>
          <Route exact path="/" element={<TextForm
              heading="Enter your text below:"
              mode={mode}
              showAlert={showAlert}
            />} />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
