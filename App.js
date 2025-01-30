import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <header>
        <h1>Hello, React!</h1>
        <p>This is a React app using JSX.</p>
      </header>
      
      <section>
        <h2>Features</h2>
        <ul>
          <li>Easy to learn</li>
          <li>Component-based</li>
          <li>Fast and efficient</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 My React App</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
