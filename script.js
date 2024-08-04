const btn = document.getElementById("btn");
const main = document.getElementById('main');

btn.addEventListener('click', addNote);

function addNote() {
  const note = document.createElement('div');
  note.classList.add("note");

  note.innerHTML = `
    <div class="tool">
      <i class="save fas fa-save"></i>
      <i class="trash fas fa-trash"></i>
    </div>
    <textarea></textarea>
  `;

  const trashIcon = note.querySelector('.trash');
  const saveIcon = note.querySelector('.save');
  const textarea = note.querySelector("textarea");
  
  trashIcon.addEventListener('click', () => {
    
    note.remove();
    saveNote(); 
  });

  saveIcon.addEventListener('click', saveNote);
  textarea.addEventListener('input', saveNote);

 
  main.appendChild(note);
}

function saveNote() {

    const notes = document.querySelectorAll(".note textarea")
    const data = [];

    for(let i =0; i<notes.length; i++){
        data.push(notes[i].value);
    }

    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

function loadNote() {
  const data = JSON.parse(localStorage.getItem("notes"));
  if(data !== null){

    data.forEach(element => {
        addNote()

        const notes = document.querySelectorAll('note , textarea')
        const lastNode = notes[notes.length-1];
        lastNode.value = element;

    });
  }
  else{
    addNote();
  }
}
loadNote();
