export function getRandom30Numbers(numbers) {
  if (numbers.length < 60) {
    throw new Error("La lista debe contener al menos 60 números.");
  }

  // Mezclamos la lista original usando el algoritmo Fisher-Yates
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Intercambiamos
  }

  // Retornamos los primeros 30 números después de la mezcla
  return numbers.slice(0, 30);
}
