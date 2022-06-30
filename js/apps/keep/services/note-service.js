import { storageService } from "../../../main-services/async-storage-service.js";
import { utilService } from "../../../main-services/util.service.js";

export const noteService = {
    _createNotes,
    query,
    getEmptyNote,
    // saveNote,
    // deleteNote,
    // togglePin,
    // updateBgc,
    // toggleTodo,
    // duplicateNote,
    // editNote,
}

const NOTES_KEY = 'notes';

function query() {
    return storageService.query(NOTES_KEY)
}

function getEmptyNote() {
    return {
        id: '',
        type: null,
        isPinned: false,
        info: {
            txt: 'What\'s on your minde?'
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
}


function _createNotes() {
    return query()
        .then(notes => {
            if (!notes || !notes.length) {
                notes = [
                    {
                        id: utilService.makeId(),
                        type: "note-txt",
                        isPinned: true,
                        info: {
                            txt: "Whad up yo?"
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
                ]
            }
            return notes;
        })

}