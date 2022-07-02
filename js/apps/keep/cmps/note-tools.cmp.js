import { eventUpdateNote, eventDeleteNote } from '../../../main-services/eventBus-service.js'
import noteColorSelect from '../cmps/note-color-select.cmp.js'

export default {
    props: ['note'],
    template: `

<!-- <div v-if="note.isPinned" class="pinned">
            <i class="fa-solid fa-thumbtack"></i> -->
    <section class="note-tools">
        <button class="note-tools-btn note-tools-pin-btn" 
                :class="pinned"  @click="togglePin"> 
                <i class="fa-solid fa-thumbtack"></i>
        </button>
        <div class="note-menu-color-btn-container">
            <button class="note-menu-btn note-menu-color-btn"><i class="fa-solid fa-palette"></i></button>
            <note-color-select class="note-color-select" @colorChanged="changeNoteColor"/>
        </div>
        <button class="note-tools-btn note-tools-edit-btn" @click="editNote">
            <i class="fa-solid fa-pen-to-square"></i>
        </button> 
        <button class="note-tools-btn note-tools-trash-btn" @click="deleteNote">
            <i class="fa-solid fa-trash"></i>
        </button>
     </section>


    `,

    components: {
        noteColorSelect
    },
    data() {
        return {};
    },
    created() { },
    methods: {
        togglePin() {
            const pNote = JSON.parse(JSON.stringify(this.note))
            pNote.isPinned = !pNote.isPinned
            eventUpdateNote(pNote)
            // console.log(pNote);
        },
        editNote() {
            this.$emit('openNoteEdit')
        },
        changeNoteColor(color) {
            const newNote = JSON.parse(JSON.stringify(this.note))
            newNote.style.backgroundColor = '#' + color
            eventUpdateNote(newNote)
        },

        deleteNote() {
            eventDeleteNote(this.note.id)
        },
    },
    computed: {
        pinned() {
            return { pinned: this.note.isPinned }
        }
    },
    unmounted() { },
};