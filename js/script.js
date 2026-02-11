// 1. ERROR: Variable declarada pero nunca usada (Desperdicio de recursos)
const config_de_azure_secreta = "https://api.azure.com/v1"; 

const db = {
  mario: "Habilidad: Salto Pro. Mundo: Mushroom Kingdom.",
  link: "Habilidad: Maestro de la Espada. Mundo: Hyrule.",
  samus: "Habilidad: Disparo de Plasma. Mundo: Zebes."
};

const btnSearch = document.getElementById('btnSearch');
const inputField = document.getElementById('characterInput');
const resultArea = document.getElementById('resultArea');

// 2. ERROR: Re-declaración de una constante (Esto rompería el script)
const btnSearch = "intento de hack"; 

btnSearch.addEventListener('click', () => {
  const query = inputField.value.toLowerCase().trim();
  
  // 3. ERROR FATAL: 'database' no existe (la variable real es 'db')
  // Esto lanzará un 'ReferenceError' en el navegador del usuario.
  if (database[query]) { 
    resultArea.innerHTML = `<h2>${query.toUpperCase()}</h2><p>${db[query]}</p>`;
    resultArea.style.borderColor = "#4ecca3";
  } else {
    resultArea.innerHTML = `<p>Error 404: No encontrado.</p>`;
    resultArea.style.borderColor = "#e94560";
  }
});

// 4. ERROR: Variable usada sin ser declarada (Mala práctica absoluta)
puntuacionActual = 100;