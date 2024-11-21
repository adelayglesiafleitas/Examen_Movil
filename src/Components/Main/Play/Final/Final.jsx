const Final = ({ score }) => {
  return (
    <section>
      <header>
        <h1>Your Score is {score}</h1>
        <button onClick={() => location.reload()}>Refrescar Página</button>
      </header>
    </section>
  );
};

export default Final;
