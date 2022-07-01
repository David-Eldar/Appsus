import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
// import noteFilter from "../cmps/note-filter.cmp.js"


export default {
    template: `

            <section v-if="pinnedNotes || unPinnedNotes" class="keep-main">

            <!-- <note-filter @filter-set="setFilter"/> -->
            <!-- <div class="right-side"> -->

                <!-- <note-list :notes="notesToShow" /> -->
                <note-list
                 :unPinnedNotes="unPinnedNotesForDisplay"
                 :pinnedNotes="pinnedNotesForDisplay"
                 @note-pinned="togglePin"/>
            
        </section>
`,

    components: {
        noteList,
        // noteFilter,
    },

    data() {
        return {
            // notes: null,
            pinnedNotes: null,
            unPinnedNotes: null,
            // filterBy: null
            filterBy: {
                type: 'all',
                txt: '',
            },

        };
    },
    created() {
        noteService.query()
            .then((notes) => {
                // this.notes = notes
                this.pinnedNotes = notes.filter(note => note.isPinned)
                this.unPinnedNotes = notes.filter(note => !note.isPinned)

            })
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        togglePin(noteId) {
            noteService.togglePin(noteId)
            var pinnedIdx = this.pinnedNotes.findIndex(note => note.id === noteId);
            var unPinnedIdx = this.unPinnedNotes.findIndex(note => note.id === noteId);
            if (pinnedIdx >= 0) {
                this.pinnedNotes[pinnedIdx].isPinned = !this.pinnedNotes[pinnedIdx].isPinned
                this.unPinnedNotes.push(this.pinnedNotes[pinnedIdx])
                this.pinnedNotes.splice(pinnedIdx, 1)
            } else {
                this.unPinnedNotes[unPinnedIdx].isPinned = !this.unPinnedNotes[unPinnedIdx].isPinned
                this.pinnedNotes.push(this.unPinnedNotes[unPinnedIdx])
                this.unPinnedNotes.splice(unPinnedIdx, 1)
            }
        },

        toggleTodo(todoId, noteId) {
            noteService.toggleTodo(todoId, noteId)
                .then(note => {
                    var pinnedIdx = this.pinnedNotes.findIndex(note => note.id === noteId);
                    var unPinnedIdx = this.unPinnedNotes.findIndex(note => note.id === noteId);
                    if (pinnedIdx >= 0) {
                        const todo = this.pinnedNotes[pinnedIdx].info.todos.find(todo => todo.id === todoId)
                        if (!todo.done) todo.done = Date.now();
                        else todo.done = null
                    } else {
                        const todo = this.unPinnedNotes[unPinnedIdx].info.todos.find(todo => todo.id === todoId)
                        if (!todo.done) todo.done = Date.now();
                        else todo.done = null
                    }

                })
        },

    },
    computed: {
        // notesToShow() {
        //     if (!this.filterBy) return this.notes
        //     let regex = new RegExp(this.filterBy.txt, 'i')
        //     return this.notes.filter(note => regex.test(note.id))
        //     log
        // }
        pinnedNotesForDisplay() {
            return this.pinnedNotes.filter(note => {
                let regex = new RegExp(this.filterBy.txt, 'i')
                if (this.filterBy.type === 'all') {
                    if (note.type === 'note-img' || note.type === 'note-video') return note
                    if (note.type === 'note-txt') {
                        if (regex.test(note.info.txt)) return note
                    }
                    if (note.type === 'note-todos') {
                        if (regex.test(note.info.label)) return note
                    }
                } else {
                    if (this.filterBy.type === note.type) {
                        if (this.filterBy.type === 'note-txt' && regex.test(note.info.txt)) return note;
                        if (this.filterBy.type === 'note-todos' && regex.test(note.info.label)) return note;
                        if (note.type === 'note-img' || note.type === 'note-video') return note
                    }
                }
            })
        },
        unPinnedNotesForDisplay() {
            return this.unPinnedNotes.filter(note => {
                let regex = new RegExp(this.filterBy.txt, 'i')
                if (this.filterBy.type === 'all') {
                    if (note.type === 'note-img' || note.type === 'note-video') return note
                    if (note.type === 'note-txt') {
                        if (regex.test(note.info.txt)) return note
                    }
                    if (note.type === 'note-todos') {
                        if (regex.test(note.info.label)) return note
                    }
                } else {
                    if (this.filterBy.type === note.type) {
                        if (this.filterBy.type === 'note-txt' && regex.test(note.info.txt)) return note;
                        if (this.filterBy.type === 'note-todos' && regex.test(note.info.label)) return note;
                        if (note.type === 'note-img' || note.type === 'note-video') return note
                    }
                }
            })
        },

        // toggleScreen() {
        //     return this.isScreenOpen ? 'open-screen' : ''
        // },
    },

    unmounted() { },
};