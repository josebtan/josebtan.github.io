<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relatos Permanentes</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Relatos Permanentes</h1>
    <div id="post-form" class="post-form">
      <textarea id="message" placeholder="Escribe tu publicación (máx. 1000 caracteres)" maxlength="1000"></textarea>
      <p id="char-count" class="char-count">1000 caracteres restantes</p>
      
      <div class="form-fields">
        <div class="form-group">
          <label for="age">Edad (opcional):</label>
          <input type="number" id="age" min="13" max="99" placeholder="Edad">
        </div>
        
        <div class="form-group">
          <label for="gender">Sexo:</label>
          <select id="gender">
            <option value="none">Indefinido</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
      </div>
      
      <button id="submit-button" class="submit-btn">Publicar</button>
    </div>
    
    <h2>Publicaciones</h2>
    <div id="posts" class="posts-container"></div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
  <script type="module" src="./script.js"></script>
</body>
</html>
