import "./Play.css";
import Text_Active from "./Text_Active/Text_Active.jsx";
import { questions } from "../../../data/data.json";
import { useState, useEffect } from "react";
import { getRandom30Numbers } from "../../../Function/Fuction.js";

const Play = () => {
  const [textActive, setTextActive] = useState(true);
  const [list, setList] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1); // Create a list of numbers from 1 to 60
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
        />
      ) : (
        <h1>termino</h1>
      )}
    </>
  );
};

export default Play;
