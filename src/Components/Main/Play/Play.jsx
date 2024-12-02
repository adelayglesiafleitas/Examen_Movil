import "../../../Styles/Play.css";
import Text_Active from "./Text_Active/Text_Active.jsx";
import { questions } from "../../../data/data.json";
import { useState, useEffect } from "react";
import { getRandom30Numbers } from "../../../Function/Fuction.js";
import Final from "./Final/Final.jsx";

const Play = ({ time, gameOver, setGameOver, score, setScore, calcScore, contador, setContador ,setQuestion }) => {
  const [lisdata, setLisdata] = useState([]); // List of data based on numbers

  useEffect(() => {
    // Create a list of numbers from 1 to 59
    const numeros = Array.from({ length: 59 }, (_, i) => i + 1);

    // Get 30 unique random numbers
    const listNew = getRandom30Numbers(numeros);

    // Generate data based on the random numbers
    const newListData = listNew.map((element) => questions[element]);
    setLisdata(newListData);
    const question = newListData[0].question;
    setQuestion(question);
  }, []);

  return (
    <>
      {!gameOver ? (
        lisdata.length === 0 ? (
          "Loading..."
        ) : (
          <Text_Active
            setGameOver={setGameOver}
            score={score}
            setScore={setScore}
            time={time}
            lisdata={lisdata}
            setLisdata={setLisdata}
            contador={contador}
            setContador={setContador}
            setQuestion = {setQuestion}
          />
        )
      ) : (
        <Final score={score} />
      )}
    </>
  );
};

export default Play;
