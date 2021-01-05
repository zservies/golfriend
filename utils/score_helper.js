const scoreToPar = (score, par) => {
  let scoreToPar = Math.round(score - par);
  if (scoreToPar > 0) {
    scoreToPar = "+" + scoreToPar;
  } else if (scoreToPar === 0) {
    scoreToPar = "E";
  }

  return scoreToPar;
};

const totalAverage = (scores) => {
  let count = scores.length;
  let score = {
    score: scores.map((score) => score.score),
    par: scores.map((score) => score.coursePar),
  };
  let averageScore =
    score.score.reduce((total, currentValue) => total + currentValue) / count;
  let averagePar =
    score.par.reduce((total, currentValue) => total + currentValue) / count;
  let averages = {
    averageScore: Math.round(averageScore),
    averagePar: Math.round(averagePar),
    scoreToPar: scoreToPar(averageScore, averagePar),
    totalRounds: count,
  };
  return averages;
};

module.exports = { scoreToPar, totalAverage };
