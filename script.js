* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #0f0f0f;
    color: white;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 40px;
    background: rgba(15, 15, 15, 0.85);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;
}

nav a:hover {
    color: #00bfff;
}

.section {
    min-height: 100vh;
    padding: 140px 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.section h1 {
    font-size: 60px;
    margin-bottom: 20px;
}

.section h2 {
    font-size: 42px;
    margin-bottom: 20px;
}

.section p {
    font-size: 20px;
    line-height: 1.7;
    max-width: 700px;
}