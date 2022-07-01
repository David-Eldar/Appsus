import noteTxt from "./note-txt.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js"
import noteImg from "./note-img.cmp.js"

export default {
    props: ['note'],

    template: `
  <section class="note-container" v-if="note">
  <!-- <label>{{note.type}}</label> -->
  <section :style="bgc" class="note">
  <component :is="note.type" :note="note"/>

<div class="options">
  <img  @click="togglePin(note.id)" class="note-icon pin" :class="isPinned" src="assets/icons/keep-icons/pin.png" />
  <img class="note-icon duplicate" src="assets/icons/keep-icons/duplicate.png" />
  <img  class="note-icon edit" src="assets/icons/keep-icons/edit.png" />
  <img class="note-icon delete" src="assets/icons/keep-icons/delete.png"/>
</div>
  </section>
  </section>
`,

    components: {
        noteTodos,
        noteTxt,
        noteVideo,
        noteImg,
        
    },
    data() {
        return {};
    },

    created() { },
    methods: {
        togglePin(noteId) {
            this.$emit('note-pinned', noteId)
        },
    },
    computed: {
        bgc() {
            return this.note.style.backgroundColor ?
                `background-color: ${this.note.style.backgroundColor};
                 border: 1px solid ${this.note.style.backgroundColor}` : ''
        },
    },
    unmounted() { },
};