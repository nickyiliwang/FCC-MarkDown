const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");

window.onload = () => {
  return (preview.innerHTML = marked(editor.textContent));
};

editor.addEventListener("keyup", e => {
  return (preview.innerHTML = marked(e.target.value));
});

marked.setOptions({
  breaks: true
});
