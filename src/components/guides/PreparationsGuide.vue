<template>
    <div class="preparations-guide container mt-5">
        <hr />
      <div class="text-center mb-4">
        <h2 class="font-primary text-primary">Preparations Guide</h2>
        <p class="text-muted">Segui questi semplici passaggi per prepararti al tuo appuntamento.</p>
      </div>
      <div class="row align-items-center">
        <!-- Testo guida -->
        <div class="col-md-6 mb-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex align-items-start">
              <i class="fas fa-shower text-primary me-3"></i>
              <span>
                <strong>Lava i capelli</strong> il giorno prima utilizzando <strong>solo shampoo</strong>, evitando balsamo o trattamenti extra.
              </span>
            </li>
            <li class="list-group-item d-flex align-items-start">
              <i class="fas fa-hair-dryer text-primary me-3"></i>
              <span>
                Vieni con i capelli <strong>al naturale</strong>. Evita piastra o altri strumenti per lo styling.
              </span>
            </li>
            <li class="list-group-item d-flex align-items-start">
              <i class="fas fa-calendar-check text-primary me-3"></i>
              <span>Assicurati di arrivare in orario per il tuo appuntamento per evitare ritardi.</span>
            </li>
          </ul>
        </div>
        <!-- Animazione e immagine interattiva -->
        <div class="col-md-6 mb-4 text-center">
          <div class="image-container position-relative">
            <img
              src="https://media0.giphy.com/media/1wXcVnkfnEYciO7KXP/giphy.gif?cid=6c09b952rh4kj4vlswwo9uatg5ne5edyrh3gd3m4h14d34jv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="Hair Preparation"
              class="img-fluid rounded shadow animate-image gif"
            />
            <!-- <div class="floating-icons">
              <i class="fas fa-scissors text-primary"></i>
              <i class="fas fa-comb text-warning"></i>
              <i class="fas fa-shampoo text-success"></i>
            </div> -->
          </div>
        </div>
      </div>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    name: "PreparationsGuide",
  };
  </script>
  
  <style scoped>
  /* Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .preparations-guide {
    font-family: "Poppins", sans-serif;
  }
  
  .font-primary {
    font-weight: 600;
  }
  
  /* Lista stile */
  .list-group-item {
    font-size: 1rem;
    background-color: #f9f9f9;
    border: none;
    border-left: 5px solid #6c63ff;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .list-group-item i {
    font-size: 1.5rem;
  }
  
  /* Immagine interattiva */
  .image-container {
    position: relative;
  }
  
  .image-container img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 15px;
  }
  
  .image-container:hover img {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Icone fluttuanti */
  /* .floating-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 1rem;
    animation: float 3s infinite ease-in-out;
    opacity: 0.7;
  }
  
  .floating-icons i {
    font-size: 2rem;
    animation: spin 4s infinite linear;
  } */
   .gif{
    height: 50%;
    width: 30%;
   }
  
  /* Animazioni */
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%) translateY(-10px);
    }
    50% {
      transform: translate(-50%, -50%) translateY(10px);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .floating-icons {
      display: none; /* Nasconde le icone fluttuanti su schermi piccoli */
    }
  }
  </style>
  