window.addEventListener("DOMContentLoaded", (event) => {
  const moleHeads = document.querySelectorAll(".wgs__mole-head");

  function randomNum() {
    return Math.floor(
      Math.random() *
        document.querySelectorAll(
          ".wgs__mole-head:not(.wgs__mole-head--whacked)"
        ).length
    );
  }

  function popUpRandomMole() {
    const unWhackedMoleHeads = document.querySelectorAll(
      ".wgs__mole-head:not(.wgs__mole-head--whacked)"
    );
    if (unWhackedMoleHeads.length === 0) {
      document.querySelector("h1").innerHTML = "You've Won!";
      return;
    }

    const i = randomNum();
    console.log(i);
    console.log(unWhackedMoleHeads);
    const mole = unWhackedMoleHeads[i];
    mole.classList.remove("wgs__mole-head--hidden");

    setTimeout(() => hideMole(mole), 2000);
  }

  function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
  }

  setTimeout(popUpRandomMole, 0);

  moleHeads.forEach((mole) => {
    document.addEventListener("click", (e) => {
      e.target.classList.add("wgs__mole-head--hidden");
      e.target.classList.add("wgs__mole-head--whacked");
    });
  });
});
