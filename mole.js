window.addEventListener("DOMContentLoaded", () => {
  //   setInterval(() => {
  //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
  //     for (let moleHead of moleHeads) {
  //       moleHead.classList.toggle('wgs__mole-head--hidden');
  //     }
  //   }, 1000);

  function popUpRandomMole() {
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    // let chances = 20;

    // while (chances > 0) {
    const i = randomNum();
    const mole = moleHeads[i];
    console.log(moleHeads, mole);
    mole.classList.remove("wgs__mole-head--hidden");
    //   chances--;
    // }
    // if (i < randomNumber) {
    //   const moleHeadI = i % moleHeads.length;
    //   const mole = moleHeads[moleHeadI];
    //   console.log(moleHeadI);
    //   console.log(moleHeadI);
    // }
  }

  function randomNum() {
    return Math.floor(Math.random() * 8);
  }

  setInterval(popUpRandomMole(), 1000);
});
