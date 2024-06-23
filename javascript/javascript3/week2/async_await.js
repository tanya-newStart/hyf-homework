function blendFruits() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fruits blended");
    }, 5000);
  });
}

function addYogurt() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yogurt added");
    }, 1000);
  });
}

function pourIntoGlass() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Smoothie poured into glass");
    }, 7000);
  });
}

async function makeSmoothie() {
  const [fruits, yogurt, drink] = await Promise.all([
    blendFruits(),
    addYogurt(),
    pourIntoGlass(),
  ]);

  console.log([fruits, yogurt, drink]);
}

makeSmoothie();
