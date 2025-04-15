<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic DOM Manipulation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Dynamic Web Page</h1>
    </header>

    <main>
        <p id="text">This is a sample paragraph. Click the button to change the text and style.</p>
        
        <button id="changeTextBtn">Change Text & Style</button>
        <button id="addElementBtn">Add New Element</button>
    </main>

    <footer>
        <p>Made with Loise</p>
    </footer>

    <!-- Link to external JavaScript -->
    <script src="script.js"></script>
</body>
</html>

/* style.css */


body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
}

main {
    margin-top: 20px;
    padding: 20px;
    text-align: center;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 0.5rem;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #ddd;
}


// script.js


const changeTextBtn = document.getElementById('changeTextBtn');
const textElement = document.getElementById('text');

changeTextBtn.addEventListener('click', () => {
    // Change text content dynamically
    textElement.textContent = "The text has been changed!";
    
    // Modify CSS styles via JavaScript
    textElement.style.color = "blue";
    textElement.style.fontWeight = "bold";
    textElement.style.fontSize = "20px";
});


const addElementBtn = document.getElementById('addElementBtn');

addElementBtn.addEventListener('click', () => {
    // Create a new paragraph element
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph added dynamically!";
    
    // Append the new element to the main section
    document.querySelector('main').appendChild(newElement);
});
