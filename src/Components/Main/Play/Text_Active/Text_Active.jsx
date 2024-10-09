import "./Text_Active.css";
import { useRef, useState, useEffect } from "react";

const Text_Active = ({ questions, list, gameOver, setGameOver }) => {
  const contadorRef = useRef(0);
  const [number, setNumber] = useState(0);
  // Estado para almacenar el índice del botón seleccionado
  const [selectedIndex, setSelectedIndex] = useState(null);

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
        contadorRef.current += 1;
        const newNumber = list[contadorRef.current];
        console.log(number);
        setNumber(newNumber);
        setSelectedIndex(null);//reseteo la seleccion
      }
      if (contadorRef.current === 30) {
        console.log("Reached 30 actions");
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
