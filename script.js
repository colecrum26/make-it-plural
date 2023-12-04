const input = document.getElementById("type-here");
const output = document.getElementById("output");
const goBtn = document.getElementById("go-btn");

goBtn.addEventListener("click", () => {
  let name = input.value;
  if (name) {
    if (name.slice(-4) === "eaux") {
      return (output.innerHTML =
        name.charAt(0).toUpperCase() + name.slice(1) + "s");
    } else if (
      name.charAt(name.length - 1) === "s" ||
      name.charAt(name.length - 1) === "x" ||
      name.charAt(name.length - 1) === "z" ||
      name.slice(-2) === "ch" ||
      name.slice(-2) === "zh"
    ) {
      return (output.innerHTML =
        name.charAt(0).toUpperCase() + name.slice(1) + "es");
    } else {
      return (output.innerHTML =
        name.charAt(0).toUpperCase() + name.slice(1) + "s");
    }
  } else {
     window.alert("Whoops! Please enter a name or word.")
  }
});
