(() => {
  const leaderBoard = document.querySelector(".leader-board-wrapper");
  const evictedMate = document.querySelector(".evicted-name");
  const div = [];

  const totalVote = JSON.parse(localStorage.getItem("totalVote"));
  const voteFromStorage = Object.entries(totalVote);
  voteFromStorage.sort((a, b) => b[1] - a[1]);

  //   console.log(voteFromStorage);

  for (let i = 0; i < voteFromStorage.length; i++) {
    let a = i + 1;
    div[i] = document.createElement("div");

    div[i].classList.add("card", "leader--card2");
    div[i].innerHTML = `<div class="card-image">
          <img src="/img/${voteFromStorage[i][0]}.jpg" alt="" />
          <h4>${voteFromStorage[i][0]}</h4>
        </div>
    
        <button class="btn btn-primary leader--btn">
          ${a}
        </button>
      `;
  }

  evictedMate.innerHTML = `${voteFromStorage[voteFromStorage.length - 1][0]} was evicted`;

  div.forEach((a) => {
    leaderBoard.appendChild(a);
  });
})();
