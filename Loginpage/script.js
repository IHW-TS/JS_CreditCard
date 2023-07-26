document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    card.style.transform = "rotateX(10deg)";
    setTimeout(() => {
      card.style.transform = "rotateX(0)";
    }, 500);
  });
  
  const form = document.querySelector("form");
  const ring = document.querySelector(".ring");
  const leds = document.querySelectorAll(".led");
  const inputs = document.querySelectorAll("input");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ring.style.display = "block";
    leds.forEach(led => led.classList.remove("active"));
    simulateLeds();
    setTimeout(() => {
      ring.style.display = "none";
      // Vous pouvez ajouter ici la logique de traitement pour l'authentification côté backend
    }, 2000);
  });
  
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const led = input.nextElementSibling;
      if (input.value) {
        led.style.display = "block";
        led.classList.add("active");
      } else {
        led.style.display = "none";
        led.classList.remove("active");
      }
    });
  });
  
  function simulateLeds() {
    for (let i = 0; i < 5; i++) {
      const led = document.createElement("div");
      led.classList.add("led");
      const delay = Math.random() * 1000;
      setTimeout(() => {
        leds[i].appendChild(led);
        setTimeout
        setTimeout(() => {
            leds[i].removeChild(led);
          }, 800);
        }, delay);
      }
    }  