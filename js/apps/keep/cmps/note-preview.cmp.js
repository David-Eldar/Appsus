// import noteTxt from "./note-txt.cmp.js"
// import noteTodos from "./note-todos.cmp.js"
// import noteVideo from "./note-video.cmp.js"
// import noteImg from "./note-img.cmp.js"
import noteTools from "./note-tools.cmp.js"
import noteEdit from "./note-edit.cmp.js"
import { noteTxt, noteImg, noteVideo } from '../cmps/note-types.cmp.js'
import { noteTodos } from "./note-todos.cmp.js"
// import  noteTodos  from './note-todo.cmp.js'
// import { noteTxt } from '../cmps/note-types.cmp.js'
// import { eventPinnedNote } from '../../../main-services/eventBus-service.js'

export default {
    props: ['note'],

    template: `
       <section :class="onTogglePin" :style="noteBgc" class="note-container">
        <div class="note-type-container" >
       <component :is="note.type" 
       :class="note.type" 
       :note="note" >
       </componant>
       </div>
    <note-tools :note="note"/>
    <note-edit :note="note" v-if="isNoteEdit" @closeNoteEdit="closeNoteEdit"/>
  </section>
  
`,

    components: {
        noteTodos,
        noteTxt,
        noteVideo,
        noteImg,
        noteTools,
        noteEdit

    },
    data() {
        return {
            isNoteEdit: false,
        };
    },

    created() { },
    methods: {
        openNoteEdit() {
            this.isNoteEdit = true
        },
        closeNoteEdit() {
            this.isNoteEdit = false
        },
        toggleNoteEdit() {
            this.isNoteEdit = !this.isNoteEdit
        }
    },
    computed: {

        // isPinned() {
        //     return this.note.isPinned ? 'pinned ' : ''
        // },
        noteBgc() {
            return this.note.style.backgroundColor ?
                `background-color: ${this.note.style.backgroundColor};
                 border: 1px solid ${this.note.style.backgroundColor}` : ''
        },
    },
    unmounted() { },
};