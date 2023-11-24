const input = document.querySelector("#type-here");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  let name = e.target.value;
  if (
    name.charAt(name.length - 1) === "s" ||
    name.charAt(name.length - 1) === "x"
  ) {
    return (output.innerHTML = name + "es");
  } else {
    return (output.innerHTML = name + "s");
  }
});
