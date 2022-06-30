import noteTodos from "./note-todos.cmp.js"

export default {
    props: ['note'],

    template: `
  <section class="note-container" v-if="note">
  <label>{{note}}</label>
  <component :is="note.type" :note="note" />

<div class="options">
  <img  @click="togglePin(note.id)" class="note-icon pin" :class="isPinned" src="assets/icons/keep icons/pin.png" />
  <img class="note-icon duplicate" src="img/keep-icons/duplicate.png" />
  <img  class="note-icon edit" src="img/keep-icons/edit.png" />
  <img class="note-icon delete" src="img/keep-icons/delete.png"/>
</div>

  </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        togglePin(noteId) {
            this.$emit('note-pinned', noteId)
        },
    },
    computed: {},
    unmounted() { },
};