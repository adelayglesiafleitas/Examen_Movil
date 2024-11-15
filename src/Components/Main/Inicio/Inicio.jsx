import "../../../Styles/Inicio.css";

const Inicio = ({ setStart }) => {
  return (
    <>
      <section className="container_inicio">
        <button
          onClick={() => {
            setStart((prev) => !prev);
          }}
        >
          Vamos Ya
        </button>
      </section>
    </>
  );
};

export default Inicio;