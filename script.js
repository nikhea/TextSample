window.addEventListener("load", () => {
  const output = document.getElementById("OutPut");
  const InputBox = document.getElementsByClassName("inputBox")[0];
  let strickTHrough = document.getElementById("strick-through");
  let Bold = document.getElementById("bold");
  let italic = document.getElementById("italic");
  let Background = document.getElementById("Background");
  let TextColor = document.getElementById("TextColor");
  let FontFamily = document.getElementById("FontFamily");
  let RemoveBackground = document.getElementById("RemoveBackground");

  FontFamily.addEventListener("click", () => {
    output.style.fontFamily = generateRandomFamily();
  });
  strickTHrough.addEventListener("click", (e) => {
    output.classList.toggle("line-through");
  });
  Bold.addEventListener("click", (e) => {
    output.classList.toggle("bold");
  });
  italic.addEventListener("click", (e) => {
    output.classList.toggle("italic");
  });
  Background.addEventListener("click", (e) => {
    init();
  });
  RemoveBackground.addEventListener("click", () => {
    output.style.background = "#fff";
  });
  TextColor.addEventListener("click", (e) => {
    output.style.color = generateRandomColor();
  });
  InputBox.addEventListener("keypress", (e) => {
    output.innerHTML += e.target.value;
  });
  function init() {
    output.style.background = generateRandomColor();
  }
  init();
  function generateRandomColor() {
    let Red = Math.floor(Math.random() * 256);
    let Green = Math.floor(Math.random() * 256);
    let Blue = Math.floor(Math.random() * 256);
    return `rgb(${Red},${Green}, ${Blue})`;
  }
  function generateRandomFamily() {
    let Familys = [
      "Arial, Helvetica, sans-serif",
      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    ];
    let value = Familys[(Math.random() * Familys.length)  | 0];
    console.log(value);
    return value;
  }
});
