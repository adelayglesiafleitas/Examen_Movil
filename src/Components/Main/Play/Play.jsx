import "../../../Styles/Play.css";
import Text_Active from "./Text_Active/Text_Active.jsx";
import { questions } from "../../../data/data.json";
import { useState, useEffect } from "react";
import { getRandom30Numbers } from "../../../Function/Fuction.js";

const Play = ({ time, gameOver, setGameOver }) => {
  const [list, setList] = useState([]);
  const [score, setScoreRef] = useState(0); //guardar puntuacion

  useEffect(() => {
    const numeros = Array.from({ length: 59 }, (_, i) => i + 1); // Create a list of numbers from 1 to 60
    const listNew = getRandom30Numbers(numeros); // Get random 30 numbers from the list
    setList(listNew);
  }, []);

  // Logging the updated list after setting it
  useEffect(() => {
    console.log(list);
  }, [list]); // Log whenever 'list' updates

  return (
    <>
      {!gameOver ? (
        <Text_Active
          questions={questions}
          list={list}
          gameOver={gameOver}
          setGameOver={setGameOver}
          setScoreRef={setScoreRef}
          time={time}
        />
      ) : (
        <h1>Su Puntuaccion es de {Math.round(score)}%</h1>
      )}
    </>
  );
};

export default Play;
