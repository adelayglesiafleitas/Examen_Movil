/* eslint-disable react/prop-types */
import "../../../../Styles/Text_Active.css";

import { useRef, useState, useEffect } from "react";

const Text_Active = ({ setGameOver, time, lisdata, score, setScore }) => {
  const [contador, setContador] = useState(0);
  //guardar puntuacion
  const [number, setNumber] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null); // Estado para almacenar el índice del botón seleccionado
  const siguiente = () => {
    if (contador == 29) {
      setContador(0);
    } else {
      setContador((prev) => prev + 1);
    }
  };
  const atras = () => {
    if (contador < 1) {
      console.log("entro");
      setContador(29);
    } else {
      setContador((prev) => prev - 1);
    }
  };

  const finalizar = () => {
    let correctAnswersCount = 0;

    lisdata.forEach((data) => {
      data.answers.forEach((answer) => {
        if (answer.seleccionado === true && answer.question) {
          correctAnswersCount += 1;
        }
      });
    });

    const totalQuestions = 30; // Adjust this if necessary
    const scorePercentage = Math.round(
      (correctAnswersCount / totalQuestions) * 100
    ); // Round to the nearest integer

    setScore(scorePercentage); // Set the calculated score as an integer

    console.log("Game Finished");
    console.log("Final Score:", scorePercentage); // Log the final score
    setGameOver(true);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const checkClickSelect = (index) => {
    // Reset the selected state of all answers for the current question
    lisdata[contador].answers.forEach((data) => {
      data.seleccionado = false;

      //validar score
    });

    lisdata[contador].answers[index].seleccionado = true; //active index check
    console.log(lisdata[contador].answers);
    setSelectedIndex(index);
  };

  return (
    <section className="container_Play">
      <div className="container_title">
        <p>Selecciona una Opción</p>
        <p>Time: {formatTime(time)}</p>
      </div>
      <div className="container_title">
        <p>Pregunta: {contador + 1}</p>
      </div>

      <div>
        {lisdata.length > 0 ? (
          lisdata[contador].answers.map((question, index) => (
            <div key={question.id}>
              <div className="container_question">
                <div className="container_question_BT">
                  <button
                    onClick={() => checkClickSelect(index)}
                    className={question.seleccionado ? "selected" : ""}
                  >
                    {question.simbol}
                  </button>
                  <p>{question.question}</p>
                </div>
                <hr />
              </div>
            </div>
          ))
        ) : (
          <p>Loading questions...</p>
        )}
      </div>
      <div className="container_buttons">
        <button onClick={atras}>Atrás</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={finalizar}>Finalizar</button>
      </div>
    </section>
  );
};

export default Text_Active;
