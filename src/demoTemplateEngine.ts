import { templateEngine } from "./templateEngine";
import "./style.css";

const run = () => {
  const template =
    "Hello, my name is {{name}}. Im {{age}} years old. I am based in {{based}}.";
  const result = templateEngine(template, {
    name: "Luiz",
    age: 40,
    based: "Berlin",
  });

  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `
      <h1>Hello Vite!</h1>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
      <p>${result}</p>
    `;
};

export default run;
