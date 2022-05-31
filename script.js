console.clear();
showNotes();
console.log("Hello");

let addBtn = document.getElementById('Addbtn');

// Function to add The Given Text in Local Storage to Form a Note
addBtn.addEventListener('click', function() {
    let addTxt = document.getElementById('Addtxt');
    let Notes = localStorage.getItem('Notes');
    if (Notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(Notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("Notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

// Function to Display Existing Notes in Local Storage on Screen
function showNotes() {
    let Notes = localStorage.getItem('Notes');
    if (Notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(Notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="border-[1px] border-rose-400 p-2 my-2 sm:mx-2 sm:inline-block sm:w-56">
            <h3>Note ${index+1}</h3>
            <div class="text-sm my-1">${element}</div>
            <button id="${index}" onclick="DeleteNote(this.id)" class="bg-rose-700 px-[4px] py-[2px] rounded-md hover:bg-rose-600 text-xs">Delete Note</button>
        </div>`;
    });
    let notesElm = document.getElementById('notehere');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = 'No Note Present To be Displayed';
    }
}

// Function to Delete Note at a given index
function DeleteNote(index) {
    let Notes = localStorage.getItem('Notes');
    if (Notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(Notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(notesObj));
    showNotes();
}