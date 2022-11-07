function createGame(player1, hour, player2){
 return `
   <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil">
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
    </li>
 `
}
let appear = 2

function createCard(date, day, games) {
appear = appear + 2 
 return `
   <div class="card" style = "animation: appear ${appear}s">
       <h2>${date} <span>${day}</span></h2>
       <ul>
          ${games}
       </ul>
   </div>
    `
}

document.getElementById("cards").innerHTML =
 createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
 createCard(
  "21/11",
  "segunda",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "22/11",
  "terça",
  createGame("argentina", "07:00", "saudiarabia") +
   createGame("denmark", "10:00", "tunisia") +
   createGame("mexico", "13:00", "poland") +
   createGame("france", "16:00", "australian")
 ) +
 createCard(
  "23/11",
  "quarta",
  createGame("morroco", "07:00", "croatia") +
   createGame("germany", "10:00", "japan") +
   createGame("spain", "13:00", "costarica") +
   createGame("belgium", "16:00", "canada")
 ) +
 createCard(
  "24/11",
  "quinta",
  createGame("switzerland", "07:00", "cameroon") +
   createGame("uruguay", "10:00", "southcorea") +
   createGame("portugal", "13:00", "ghana") +
   createGame("brazil", "16:00", "serbia")
 ) +
 createCard(
  "25/11",
  "sexta",
  createGame("wales", "07:00", "iran") +
   createGame("qatar", "10:00", "senegal") +
   createGame("netherlands", "13:00", "ecuador") +
   createGame("england", "16:00", "usa")
 ) +
 createCard(
  "26/11",
  "sábado",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "27/11",
  "domingo",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "28/11",
  "segunda",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "29/11",
  "terça",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "30/11",
  "quarta",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "01/12",
  "quinta",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 ) +
 createCard(
  "02/11",
  "sexta",
  createGame("england", "10:00", "iran") +
   createGame("senegal", "13:00", "netherlands") +
   createGame("usa", "16:00", "wales") +
   createGame("usa", "16:00", "wales")
 )
 
