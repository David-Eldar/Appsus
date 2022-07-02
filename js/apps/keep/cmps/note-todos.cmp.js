
import { eventAddTodo, eventUpdateNote } from '../../../main-services/eventBus-service.js'

// TODO NOTES //
export const noteTodos = {
    template: `
    <section class="note-template note-todos" v-if="note">
        <h2 class="info-txt">{{note.info.title}}</h2>
        <ul v-if="note.info.todos" class="todos-ul">
            <li v-for="(todo, idx) in note.info.todos"
            @click="toggleTodoFinished(idx)"
            :class="{'todo-finished' : todo.isFinished, 'todo-unfinished': !todo.isFinished}"
            class="todo-li">
            {{todo.txt}}
            <button @click.stop="removeTodo(idx)" class="todo-remove-btn"><i class="fa-solid fa-circle-minus"></i></button>
            </li>
        </ul>
        <input @keyup.enter="addTodo" v-model="nextTodo" class="next-todo-input" placeholder="To do.."/>
    </section>
    `,
    data() {
        return {
            nextTodo: '',
        }
    },
    methods: {
        addTodo() {
            const todo = {
                txt: this.nextTodo,
                isFinished: false,
            }
            if (!this.note.info.todos) this.note.info.todos = []
            this.note.info.todos.push(todo)
            const newNote = this.createNoteCopy()
            eventAddTodo(newNote)
            this.nextTodo = ''
        },
        removeTodo(idx) {
            const newNote = this.createNoteCopy()
            newNote.info.todos.splice(idx, 1)
            eventUpdateNote(newNote)
        },
        toggleTodoFinished(todoIdx) {
            this.note.info.todos[todoIdx].isFinished = !this.note.info.todos[todoIdx].isFinished
            const newNote = this.createNoteCopy()
            eventUpdateNote(newNote)
        },
        createNoteCopy() {
            return JSON.parse(JSON.stringify(this.note))
        }
    },
    props: ['note']
}