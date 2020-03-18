var btnContainer = document.getElementById('button-container');
var dropdown = document.getElementById('colors-dropdown');
var addBtn = document.getElementById('add-color');
var removeBtn = document.getElementById('remove-color');

for (var i = 0; i < initColors.length; i++) {
  createColorBtn(initColors[i]);
}

btnContainer.addEventListener('click', function(event) {
  var target = event.target;
  var tag = target.tagName;
  var bg = document.body.style.backgroundColor;
  var id = event.target.id;
  if (tag === 'BUTTON') {
    if (bg === id) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = id;
    }
  }
});

function createColorBtn(color) {
  var newButton = document.createElement('button');
  newButton.style.backgroundColor = color;
  newButton.id = color;
  newButton.innerText = color;
  btnContainer.appendChild(newButton);
}

for (var i = 0; i < colors.length; i++) {
  createColorOption(colors[i]);
}

function createColorOption(color) {
  var newOption = document.createElement('option');
  newOption.innerText = color;
  newOption.value = color;
  dropdown.appendChild(newOption);
}

// dropdown.addEventListener('change', function(){
//   document.body.style.backgroundColor = dropdown.value;
// });

function removeColorOpt(color) {
  var option = document.querySelector('#colors-dropdown > [value="' + color + '"]');
  option.remove();
}

function removeColorBtn(color) {
  var button = document.getElementById(color);
  button.remove();  
}

addBtn.addEventListener('click', function(){
  var selectedColor = dropdown.value;
  createColorBtn(selectedColor);
  removeColorOpt(selectedColor);
});

removeBtn.addEventListener('click', function (){
  var currColor = document.body.style.backgroundColor;
  removeColorBtn(currColor);
  createColorOption(currColor);
  document.body.style.backgroundColor = 'white';
});
