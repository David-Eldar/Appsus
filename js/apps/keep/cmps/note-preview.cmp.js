import noteTxt from "./note-txt.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTools from "./note-tools.cmp.js"
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
  </section>
  
`,

    components: {
        noteTodos,
        noteTxt,
        noteVideo,
        noteImg,
        noteTools
        
    },
    data() {
        return {};
    },

    created() { },
    methods: {

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