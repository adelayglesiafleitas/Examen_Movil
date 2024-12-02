import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [start, setStart] = useState(true);
  const [question, setQuestion] = useState("");

  return (
    <div className="container">
      <div className="container_apl">
        <Header
          contador={contador}
          setContador={setContador}
          start={start}
          setStart={setStart}
          question={question}
        />
        <Main
          contador={contador}
          setContador={setContador}
          start={start}
          setStart={setStart}
          setQuestion={setQuestion}
        />
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
