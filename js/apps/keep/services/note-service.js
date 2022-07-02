import { asyncStorage } from "../../../main-services/async-storage-service.js"
import { storageService } from "../../../main-services/storage.service.js"
import { utilService } from "../../../main-services/util.service.js";
// import defaultNotes from './notes.json' assert { type: 'json'}
// import notesPool from "./notes-pool.js"

const NOTE_KEY = 'notes_db';
const notesDb = storageService.loadFromStorage(NOTE_KEY) || _createNotes()

_createNotes()

export const noteService = {
    // query,
    // togglePin,
    getNotes,
    createNote,
    saveNote,
    addNote,
    get,
    remove,
}


function query() {
    return asyncStorage.query(NOTE_KEY)

}

function createNote(noteInfo) {
    const note = {
        type: noteInfo.type,
        noteType: noteInfo.noteType,
        isPinned: noteInfo.isPinned,
        info: {
            title: noteInfo.info.title,
            txt: noteInfo.info.txt,
            img: noteInfo.info.img,
            video: noteInfo.info.video,
            todos: noteInfo.info.todos,
        },
        style: {
            backgroundColor: '#eee'
        }
    }
    notesDb.unshift(note)
    storageService.saveToStorage(NOTE_KEY, notesDb)
    return Promise.resolve()
}

function addNote(note) {
    const newNote = {
        type: note.type,
        noteType: note.noteType,
        info: {
            img: note.info.img || '',
            title: note.info.title || '',
            video: note.info.video || '',
            txt: note.info.txt || '',
            todos: note.info.todos || null,
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
    return save(newNote)
}

function getNotes(noteId) {
    // return asyncStorage.get(NOTES_KEY, noteId)
    return Promise.resolve(notesDb)
    
}
function get(noteId) {
    return asyncStorage.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return asyncStorage.remove(NOTE_KEY, noteId)
}



function saveNote(note) {
    if (note.id) return asyncStorage.put(NOTE_KEY, note)
    else return asyncStorage.post(NOTE_KEY, note)
}



function toggleTodo(todoId, noteId) {
    return asyncStorage.get(NOTE_KEY, noteId)
        .then(note => {
            const todo = note.info.todos.find(todo => todo.id === todoId)
            if (!todo.done) todo.done = Date.now();
            else todo.done = null
            return asyncStorage.put(NOTE_KEY, note)
        })
}




function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY);
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
                        { id: utilService.makeId(), txt: "try to understand why it dos'n work", doneAt: null },
                        { id: utilService.makeId(), txt: "realise you wrote 'notes' insted of 'note' in the text interpolation", doneAt: null },
                        { id: utilService.makeId(), txt: "realise you'v spend 6 hours for the previous understanding", doneAt: null },
                        { id: utilService.makeId(), txt: "acknowledge that you are a moron", doneAt: null },
                        { id: utilService.makeId(), txt: "bang your head against the table (man do not cry...)", doneAt: null },
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
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: false,
                info: {
                    url: "https://25.media.tumblr.com/7ebe1f7cd648320a8b027cc182386132/tumblr_mhq8386AFz1rhcghpo1_400.gif",
                    title: "My mom when she needs help but I have a sprint to complete"
                },
                style: {
                    backgroundColor: utilService.getRandomColor()
                }
            },




        ];
        storageService.saveToStorage(NOTE_KEY, notes);
    }
    return notes
}


// function _createNotes() {
//     let notes = storageService.loadFromStorage(NOTES_KEY)
//     if (!notes || !notes.length) {
//         notes = notesPool
//         storageService.saveToStorage(NOTES_KEY, notes)
//     }
//     return notes
// }








