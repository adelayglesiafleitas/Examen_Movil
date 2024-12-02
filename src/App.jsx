import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [start, setStart] = useState(true);
  const [question, setQuestion] = useState("");
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="container">
      <div className="container_apl">
        <Header
          contador={contador}
          setContador={setContador}
          start={start}
          setStart={setStart}
          question={question}
          gameOver={gameOver}
        />
        <Main
          contador={contador}
          setContador={setContador}
          start={start}
          setStart={setStart}
          setQuestion={setQuestion}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
