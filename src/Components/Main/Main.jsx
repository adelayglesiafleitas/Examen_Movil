import "../../Styles/Main.css";
import Play from "./Play/Play.jsx";
import Inicio from "./Inicio/Inicio.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  const [start, setStart] = useState(true);
  const [time, setTime] = useState(0); // Tiempo en segundos
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer;
    if (!start) {
      // Inicia el contador cuando `start` es `false`
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime >= 30 * 1) {
            /* 30 minutos en segundos*/ setGameOver(true); // Cambia `start` a `true` cuando el tiempo alcanza 30 minutos
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
  }, [start]);

  // Convierte el tiempo en formato MM:SS

  return (
    <main>
      <div className="container_text">
        <div className="container_text_ejer">
          {start ? (
            <Inicio setStart={setStart} />
          ) : (
            <Play time={time} gameOver={gameOver} v={setGameOver} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
