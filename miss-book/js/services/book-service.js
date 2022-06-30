import { utilService } from './util-service.js';
import { storageService } from "./async-storage-service.js"
import defaultBooks from '../../books.json' assert { type: 'json' }

const BOOKS_KEY = 'books'

_createBooks()


export const bookService = {
    query,
    remove,
    get,
    save,
    addReview
};


function query() {
    return  storageService.query(BOOKS_KEY)
    // return utilService.loadFromStorage(BOOKS_KEY);
}
function remove(bookId) {
    return storageService.remove(BOOKS_KEY, bookId)
  }
  
  function get(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
  }
  
  function save(book) {
    if (book.id) return storageService.put(BOOKS_KEY, book)
    else return storageService.post(BOOKS_KEY, book)
  }
  
  function addReview(book) {
    return storageService.put(BOOKS_KEY, book)
  }

function _createBooks() {
    let books = utilService.loadFromStorage(BOOKS_KEY);
    if (!books || !books.length) {
        books = defaultBooks;
        utilService.saveToStorage(BOOKS_KEY, books);
    }
    return books;
}

