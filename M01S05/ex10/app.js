function calculateSurface(L, l) {
  if (arguments.lenght === 2) {
    return L * L;
  } else {
    return L ** 2;
  }
}

const calculateSquareSurface = (L) => {
  return calculateSurface(L);
};

console.log(calculateSquareSurface(4));
