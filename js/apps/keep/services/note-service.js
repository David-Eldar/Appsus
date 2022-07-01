import { asyncStorage } from "../../../main-services/async-storage-service.js"
import { storageService } from "../../../main-services/storage.service.js"
import { utilService } from "../../../main-services/util.service.js";
// import defaultNotes from './notes.json' assert { type: 'json'}
// import notesPool from "./notes-pool.js"

const NOTES_KEY = 'notes';

_createNotes()

export const noteService = {
    query,
    get,
    // saveNote,
    // deleteNote,
    // togglePin,
    // updateBgc,
    // toggleTodo,
    // duplicateNote,
    // editNote,
}


function query() {
    return asyncStorage.query(NOTES_KEY)

}
function get(noteId) {
    return asyncStorage.get(NOTES_KEY, noteId)
  }


function _createNotes() {
    let notes = storageService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: true,
                info: {
                    label: "Finish this sprint",
                    todos: [
                        { id: utilService.makeId(), txt: "write code", doneAt: 187111111 },
                        { id: utilService.makeId(), txt: "try to make it work in small steps", doneAt: null },
                        { id: utilService.makeId(), txt: "try to understand why some stupid object dose not rendering", doneAt: null },
                        { id: utilService.makeId(), txt: "realise you wrote 'notes' insted of 'note' in the text interpolation", doneAt: null },
                        { id: utilService.makeId(), txt: "realise you'v spend 6 hours for the previous understanding", doneAt: null },
                        { id: utilService.makeId(), txt: "Important: you are a f***in moron", doneAt: null },
                        { id: utilService.makeId(), txt: "bang your head against the table (man do not cry)", doneAt: 187111111 },
                        { id: utilService.makeId(), txt: "repeat the previous action 37 times", doneAt: 187111111 }
                    ],
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "סדר הוא מה שנותן משמעות לבריאה"
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                }
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: false,
                info: {
                    url: "https://i.pinimg.com/originals/4f/b5/88/4fb5886838c0492fc4b0cee3de87b648.jpg",
                    title: "Programmer Life"
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                }
            },
            {
                id: utilService.makeId(),
                type: "note-video",
                isPinned: false,
                info: {
                    url: "https://www.youtube.com/watch?v=ZrE7cCv9a-c&ab",
                    title: "Everything Black"
    
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                }
            },
        ];
        storageService.saveToStorage(NOTES_KEY, notes);
    }
    return notes
}








