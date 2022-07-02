import { noteService } from "../services/note-service.js"
import { eventBus } from '../../../main-services/eventBus-service.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteList from "../cmps/note-list.cmp.js"
// import noteFilter from "../cmps/note-filter.cmp.js"


export default {
    template: `

            <section v-if="notes"class="app-main">

            <note-filter @filter-set="setFilter"/>

            <note-list :notes="notesToShow" />

        </section>
`,

    components: {
        noteList,
        noteFilter,
    },

    data() {
        return {
            notes: null,
            filterBy: null
            // filterBy: {
            //     type: 'all',
            //     txt: '',
            // },

        };
    },
    created() {
        noteService.getNotes()
            .then((notes) => {
                this.notes = notes
            })
        eventBus.on('eventUpdateNote', this.updateNote)
        eventBus.on('eventAddNote', this.addNote)
        eventBus.on('eventDeleteNote', this.deleteNote)

    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        addNote(note) {
            noteService.addNote(note)
                .then((note) => this.notes.unshift(note))
        },
        deleteNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },

        updateNote(updatedNote) {
            noteService.saveNote(updatedNote)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === updatedNote.id)
                    this.notes.splice(idx, 1, updatedNote)
                    console.log(updatedNote);
                })
            // console.log(toggledPin)
        },

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.notes.filter(note => regex.test(note.info.title))
        },

    },

    unmounted() { },
};