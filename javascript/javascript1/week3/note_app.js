const notes = [];
const compliments = [
  "Awesome job!",
  "Well done!",
  "Great work!",
  "Fantastic!",
  "Impressive!",
  "Superb!",
  "Bravo!",
  "Excellent!",
  "Outstanding!",
  "Amazing!",
];

function saveNote(content, id, done = false) {
  // The saveNote function pushes an object to the notes array with the keys content and id

  if (typeof id === "string") {
    return "Try again.Id must be a number";
  }
  const note = { content, id, done };
  notes.push(note);
}

function getNote(id) {
  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }
  return `There is no item with id ${id}`;
}

function logOutNotesFormatted() {
  let notesContent = "";
  for (let note of notes) {
    notesContent += `The note with id:${note.id}, has the following note text: ${note.content}\n`;
  }
  return notesContent;
}
function markAsDone(id) {
  for (let note of notes) {
    if (note.id === id) {
      note.done = true;
      const randomNumber = Math.floor(Math.random() * compliments.length);
      const praise = compliments[randomNumber];
      return `${praise} The task "${note.content}" is done.`;
    }
  }
}
//Test the app
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(saveNote("Practice array methods", "three"));
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

const notesContent = logOutNotesFormatted();
console.log(notesContent);
const noteDone = markAsDone(2);
markAsDone(3);
console.log(noteDone);
console.log(notes);
