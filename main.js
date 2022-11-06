function createGame(player1, hour, player2){
 return `
   <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil">
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
    </li>
 `
}

function createCard(date, day, games) {
 return `
   <div class="card">
       <h2>${date} <span>${day}</span></h2>
       <ul>
          ${games}
       </ul>
   </div>
    `
}

document.getElementById("app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="Logo NLW">
        </header>
        <main id="cards">
            ${createCard(
             "20/11",
             "domingo",
             createGame("qatar", "13:00", "ecuador")
            )}
            ${createCard(
             "21/11",
             "segunda",
             createGame("england", "10:00", "iran") +
             createGame("senegal", "13:00", "netherlands") +
             createGame("usa", "16:00", "wales")
            )}
            
        </main>
        `
