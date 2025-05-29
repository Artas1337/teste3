document.querySelector(".bars-menu").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-items").classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".bars-menu").addEventListener("click", () => {
        document.querySelector(".nav-items").classList.toggle("active");
      });
      
      document.querySelectorAll(".nav-link").forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector(".nav-items").classList.toggle("active");
        });
      });
      function updateClock() {
        const now = new Date();
        const horaBrasilia = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
        const hours = horaBrasilia.getHours().toString().padStart(2, '0');
        const minutes = horaBrasilia.getMinutes().toString().padStart(2, '0');
        const seconds = horaBrasilia.getSeconds().toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
      }
      setInterval(updateClock, 1000);
      updateClock();
    });
    
    document.addEventListener('DOMContentLoaded', function() {
      const barsMenu = document.querySelector('.bars-menu');
      const navItems = document.querySelector('.nav-items');
  
      if (barsMenu && navItems) {
        barsMenu.addEventListener('click', function() {
          navItems.classList.toggle('active');
        });
      }
    });
