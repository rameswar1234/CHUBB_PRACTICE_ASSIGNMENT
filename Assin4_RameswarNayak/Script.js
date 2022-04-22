// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   let txt = document.getElementById("txt");
//   if (txt.value) {
//     console.log(`this is the textbox value ${txt.value}`);
//   } else {
//     console.log("text box should not be empty.");
//     txt.value = "text box should not be empty.";
//   }
// });

let txt = document.createElement("input");
txt.setAttribute("id", "txtbox");
txt.setAttribute("type", "text");

let btn = document.createElement("button");
btn.setAttribute("id", "btnReadValue");
btn.textContent = "Read Value";
btn.addEventListener("click", () => {
  let txt = document.getElementById("txtbox");
  if (txt.value) {
    console.log(`this is the textbox value ${txt.value}`);
  } else {
    console.log("text box should not be empty.");
    txt.value = "text box should not be empty.";
  }
});

document.body.appendChild(txt);
document.body.appendChild(btn);
