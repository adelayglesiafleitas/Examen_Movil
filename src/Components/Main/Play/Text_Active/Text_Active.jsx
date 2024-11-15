/* eslint-disable react/prop-types */
import "../../../../Styles/Text_Active.css";
import { useRef, useState, useEffect } from "react";

const Text_Active = ({
  questions,
  list,
  gameOver,
  setGameOver,
  setScoreRef,
}) => {
  const contadorRef = useRef(0);
  const scoreRef = useRef(0); //guardar puntuacion
  const [number, setNumber] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState(null); // Estado para almacenar el índice del botón seleccionado

  /*// ARREGLAS RPOBLEMA DE ASINCROMATICO PARA INICIAR EL NUMERO  
  useEffect(() => {  
    console.log(list);  
    list ? setNumber(list[0]) : setNumber(0);  
  }, []);*/

  const siguiente = () => {
    if (selectedIndex === null) {
      return alert("Seleccione una opción");
    } else {
      if (contadorRef.current < 30) {
        console.log(`el contador es ${contadorRef.current}`);
        contadorRef.current += 1;
        const newNumber = list[contadorRef.current];
        setNumber(newNumber);
        console.log(`el numero es ${number}`);

        if (questions[number].answers[selectedIndex].answer === "si") {
          console.log("entre en si");
          scoreRef.current += 1;
          console.log(`la puntuacion es de ${scoreRef.current}`);
        }

        setSelectedIndex(null); //reseteo la seleccion
      }
      if (contadorRef.current === 30) {
        //reach 30 turns
        console.log("Reached 30 actions");
        setScoreRef((scoreRef.current * 100) / 30);
        setGameOver(true);
      }
    }
  };

  const atras = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const finalizar = () => {
    // Handle game finalization logic
    console.log("Game Finished");
    setGameOver(true);
  };

  return (
    <section className="container_Play">
      <p>Selecciona opción</p>
      <div>
        {questions[number].answers.map((question, index) => (
          <div key={question.id}>
            <div className="container_question">
              <div className="container_question_BT">
                <button
                  onClick={() => {
                    setSelectedIndex(index); // Actualiza el índice seleccionado
                  }}
                  className={selectedIndex === index ? "selected" : ""} // Aplica clase si está seleccionado
                >
                  {question.simbol}
                </button>
                <p>{question.question}</p>
              </div>
              <hr />
            </div>
          </div>
        ))}
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
