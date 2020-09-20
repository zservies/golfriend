const scoreToPar = (score, par) => {
  let scoreToPar = score - par;
  if (scoreToPar > 0) {
    scoreToPar = "+" + scoreToPar;
  } else if (scoreToPar === 0) {
    scoreToPar = "E";
  }

  return scoreToPar;
};

module.exports = { scoreToPar };
