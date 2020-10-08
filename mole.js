window.addEventListener("DOMContentLoaded", (event) => {
  const moleHeads = document.querySelectorAll(".wgs__mole-head");

  function randomNum () {
    return Math.floor(Math.random() * 8);
  };

  function popUpRandomMole() {
    const i = randomNum();
    const mole = moleHeads[i];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => hideMole(mole), 1000)
  }

  function hideMole (mole) {
    mole.classList.add("wgs__mole-head--hidden")
    setTimeout(popUpRandomMole, 1000)
  };

  setTimeout(popUpRandomMole, 0)

  moleHeads.forEach(mole => {

  });
  document.addEventListener('click', (e) => {
    
  })
});
