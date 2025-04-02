const players = [
    { name: "Virat Kohli", role: "Batsman", image: "images/virat.png", stats: "Matches: 237 | Runs: 7263 | Best: 113" },
    { name: "Rajat Patidar", role: "Batsman (C)", image: "images/rajat.png", stats: "Matches: 50 | Runs: 1500 | Best: 102*" },
    { name: "Devdutt Padikkal", role: "Batsman", image: "images/dev.png", stats: "Matches: 75 | Runs: 2200 | Best: 101*" },
    { name: "Swastik Chikara", role: "Batsman", image: "images/swastik.png", stats: "Matches: 10 | Runs: 300 | Best: 75*" },
    { name: "Phil Salt", role: "Wicket-keeper", image: "images/salt.png", stats: "Matches: 30 | Runs: 900 | Best: 87*" },
    { name: "Jitesh Sharma", role: "Wicket-keeper", image: "images/jitesh.png", stats: "Matches: 25 | Runs: 700 | Best: 80*" },
    { name: "Liam Livingstone", role: "All-rounder", image: "images/livin.png", stats: "Matches: 40 | Runs: 1200 | Wickets: 25" },
    { name: "Krunal Pandya", role: "All-rounder", image: "images/krunal.png", stats: "Matches: 90 | Runs: 1800 | Wickets: 50" },
    { name: "Tim David", role: "All-rounder", image: "images/tim.png", stats: "Matches: 35 | Runs: 1000 | Best: 85*" },
    { name: "Jacob Bethell", role: "All-rounder", image: "images/jacob.png", stats: "Matches: 15 | Runs: 400 | Wickets: 10" },
    { name: "Romario Shepherd", role: "All-rounder", image: "images/shepherd.png", stats: "Matches: 20 | Runs: 500 | Wickets: 30" },
    { name: "Swapnil Singh", role: "All-rounder", image: "images/swapnil.png", stats: "Matches: 18 | Runs: 450 | Wickets: 20" },
    { name: "Manoj Bhandage", role: "All-rounder", image: "images/manoj.png", stats: "Matches: 12 | Runs: 300 | Wickets: 15" },
    { name: "Mohit Rathee", role: "All-rounder", image: "images/mohit.png", stats: "Matches: 8 | Runs: 200 | Wickets: 10" },
    { name: "Josh Hazlewood", role: "Bowler", image: "images/josh.png", stats: "Matches: 60 | Wickets: 85 | Best: 5/30" },
    { name: "Bhuvneshwar Kumar", role: "Bowler", image: "images/bhuvi.png", stats: "Matches: 120 | Wickets: 150 | Best: 5/19" },
    { name: "Rasikh Dar", role: "Bowler", image: "images/rasikh.png", stats: "Matches: 15 | Wickets: 20 | Best: 4/25" },
    { name: "Yash Dayal", role: "Bowler", image: "images/yash.png", stats: "Matches: 22 | Wickets: 35 | Best: 4/28" },
    { name: "Nuwan Thushara", role: "Bowler", image: "images/nuwan.png", stats: "Matches: 10 | Wickets: 15 | Best: 3/20" },
    { name: "Lungi Ngidi", role: "Bowler", image: "images/lungi.png", stats: "Matches: 45 | Wickets: 65 | Best: 4/29" },
    { name: "Abhinandan Singh", role: "Bowler", image: "images/singh.png", stats: "Matches: 5 | Wickets: 8 | Best: 3/22" },
    { name: "Suyash Sharma", role: "Bowler", image: "images/suyash.png", stats: "Matches: 12 | Wickets: 18 | Best: 4/26" }
  ];
  
  function displayPlayers() {
    const body = document.body;
    body.style.backgroundColor = "#06192e"; //  Blue Jersey Color
    body.style.color = "white";
  
    const cardContainer = document.getElementById("player-cards");
    cardContainer.innerHTML = "";
  
    players.forEach(player => {
      cardContainer.innerHTML += `
        <div class="col-lg-2 col-md-4 col-sm-6 mb-4" style="width: 20%;">
          <div class="card card-hover" style="background-color:rgba(224, 36, 42, 0.7); color: white; border: none; cursor: pointer;">
            <img src="${player.image}" class="card-img-top" alt="${player.name}" style="height: 350px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${player.name}</h5>
              <p class="card-text">Role: ${player.role}</p>
              <p class="card-text">${player.stats}</p>
            </div>
          </div>
        </div>
      `;
    });
  
    document.querySelectorAll('.card-hover').forEach(card => {
      card.addEventListener('click', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 300);
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayPlayers);
  

  





