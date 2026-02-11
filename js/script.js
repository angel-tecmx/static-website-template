// Variable declarada pero nunca usada (Provoca advertencia/error de ESLint)
const apiSecretKey = "12345-DEBUG-ONLY"; 

const btnSearch = document.getElementById('btnSearch');
const inputField = document.getElementById('characterInput');
const resultArea = document.getElementById('resultArea');

btnSearch.addEventListener('click', () => {
  // ERROR DE DEDO: 'queryValue' no está definida, la variable real es 'query'
  const query = inputField.value.toLowerCase().trim();
  
  // Aquí provocamos el fallo fatal: usamos una variable inexistente
  if (db[queryValue]) { 
    resultArea.innerHTML = `<h2>Encontrado</h2>`;
  } else {
    resultArea.innerHTML = `<p>No encontrado</p>`;
  }
});