import "../../Styles/Main.css";
import Play from "./Play/Play.jsx";
import Inicio from "./Inicio/Inicio.jsx";
import { useState, useEffect } from "react";

const Main = ({ contador, setContador, start, setStart, setQuestion, gameOver, setGameOver  }) => {
  const [time, setTime] = useState(0); // Tiempo en segundos  
  const [score, setScore] = useState(0); // Store score
  const [tesTime, setTesTime] = useState(60);

  useEffect(() => {
    let timer;
    if (!start) {
      // Inicia el contador cuando `start` es `false`
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime >= 30 * { tesTime }) {
            /* 30 minutos en segundos*/
            const scorePercentage = Math.round((score / 30) * 100);
            setScore(scorePercentage); // Round to the nearest integer

            setGameOver(true); // Cambia `start` a `true` cuando el tiempo alcanza 30 minutos
            clearInterval(timer); // Detiene el temporizador
            return 0; // Reinicia el tiempo
          }
          return prevTime + 1; // Incrementa el tiempo
        });
      }, 1000); // Incrementa cada segundo
    } else {
      setTime(0); // Reinicia el tiempo si `start` vuelve a `true`
    }

    return () => clearInterval(timer); // Limpia el intervalo al desmontar o cambiar `start`
  }, [start, gameOver]);

  return (
    <main>
      <div className="container_text">
        <div className="container_text_ejer">
          {start ? (
            <Inicio
              setStart={setStart}
              tesTime={tesTime}
              setTesTime={setTesTime}
            />
          ) : (
            <Play
              score={score}
              setScore={setScore}
              time={time}
              gameOver={gameOver}
              setGameOver={setGameOver}
              contador={contador}
              setContador={setContador}
              setQuestion = {setQuestion}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
