export const checkClickSelect = (index) => {
  // Reset the selected state of all answers for the current question
  questions[contadorRef.current].answers.forEach((data) => {
    data.seleccionado = false;
  });

  // Set the selected index to the provided index
  setSelectedIndex(index);
};
