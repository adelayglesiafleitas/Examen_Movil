import "../../../Styles/Play.css";
import Text_Active from "./Text_Active/Text_Active.jsx";
import { questions } from "../../../data/data.json";
import { useState, useEffect } from "react";
import { getRandom30Numbers } from "../../../Function/Fuction.js";

const Play = ({ time, gameOver, setGameOver, score, setScore, calcScore }) => {
  const [lisdata, setLisdata] = useState([]); // List of data based on numbers

  useEffect(() => {
    // Create a list of numbers from 1 to 59
    const numeros = Array.from({ length: 59 }, (_, i) => i + 1);

    // Get 30 unique random numbers
    const listNew = getRandom30Numbers(numeros);

    // Generate data based on the random numbers
    const newListData = listNew.map((element) => questions[element]);
    setLisdata(newListData);
    console.table("Generated data:", newListData); // Log the new data instead
  }, []);

  return (
    <>
      {!gameOver ? (
        lisdata.length === 0 ? ( // Change to === 0
          "Loading..."
        ) : (
          <Text_Active
            setGameOver={setGameOver}
            score={score}
            setScore={setScore}
            time={time}
            lisdata={lisdata}
            setLisdata={setLisdata}
          />
        )
      ) : (
        <h1>Your Score is {score}</h1>
      )}
    </>
  );
};

export default Play;
