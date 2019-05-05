const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");

const init = () => {
  return (preview.textContent = editor.textContent);
};
init;
