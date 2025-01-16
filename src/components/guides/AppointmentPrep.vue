<template>
    <div class="appointment-prep container">
      <ul class="info-list">
        <li><strong>Conferma dell'appuntamento:</strong> Il giorno prima dell'appuntamento, per favore ricordati di scrivermi per confermare la tua presenza.</li>
        <li><strong>Preparazione dei capelli:</strong> Il giorno prima, lava i capelli solo con shampoo, senza utilizzare balsamo, e vieni con i capelli al naturale, evitando la piastra.</li>
        <li><strong>Pagamento:</strong> Il pagamento dovrà essere effettuato in contanti.</li>
        <li><strong>Puntualità:</strong> Ti prego di arrivare all'orario concordato, senza presentarti troppo in anticipo. Presta attenzione alla politica sui ritardi, che potrebbero compromettere la tua prenotazione.</li>
        <li><strong>Durata dell'appuntamento:</strong> L'appuntamento può durare dalle 2 alle 4 ore e mezza, a seconda dello stile richiesto e della tua tipologia di capelli.</li>
        <li><strong>Accompagnatori:</strong> Se desideri venire accompagnato, ti prego di avvisarmi in anticipo. Accetto al massimo una persona, dato che non ho molto spazio a disposizione in casa.</li>
      </ul>
      <p class="text-center mt-4">Grazie mille per la collaborazione, ci vediamo presto!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppointmentPrep",
  };
  </script>
  
  <style scoped>
  .appointment-prep {
    background-color: #f4f4f4;
    color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .info-list {
    list-style: none;
    padding: 0;
    line-height: 1.8;
  }
  
  .info-list li {
    margin-bottom: 10px;
  }
  
  .info-list li strong {
    color: #3f352c;
  }
  
  p {
    font-weight: bold;
  }
  </style>
  