const input = document.querySelector("#type-here");
const output = document.querySelector("#output");

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
