import { asyncStorage } from "../../../main-services/async-storage-service.js";
import { storageService } from "../../../main-services/storage.service.js";
// import { utilService } from "../../../main-services/util.service.js";
import defaultNotes from './notes.json' assert { type: 'json'}

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
        notes = defaultNotes;
        storageService.saveToStorage(NOTES_KEY, notes);
    }
    
    return notes
}








