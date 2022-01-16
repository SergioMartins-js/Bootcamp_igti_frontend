var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}
function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";

  fs.appendChild(addButton);

  var firtinput = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firtinput.name;
    newInput.type = firtinput.type;

    var deletebutton = document.createElement("button");
    deletebutton.textContent = "Excluir";
    deletebutton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deletebutton);

    deletebutton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addButton);
  });
}
