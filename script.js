const input = document.getElementById("type-here");
const output = document.getElementById("output");

input.addEventListener("change", (e) => {
  let name = e.target.value;
  if (
    name.charAt(name.length - 1) === "s" ||
    name.charAt(name.length - 1) === "x"
  ) {
    return (output.innerHTML = name.charAt(0).toUpperCase() + name.slice(1) + "es");
  } else {
    return (output.innerHTML = name.charAt(0).toUpperCase() + name.slice(1) + "s");
  }
});
