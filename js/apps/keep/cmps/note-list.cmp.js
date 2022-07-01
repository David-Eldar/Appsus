import notePreview from "./note-preview.cmp.js"


export default {

  // props: ["notes"],
  props: ["pinnedNotes", "unPinnedNotes"],

  template: `
 <section class="notes-list">
   <section class="pined-notes" v-if="pinnedNotes">
     <note-preview
      v-for="note in pinnedNotes"
      :key="note.id"
       :note="note"
       @note-pinned="togglePin">
     </note-preview>
   </section>
   <section class="unpinned-notes" v-if="unPinnedNotes" >
     <note-preview
      v-for="note in unPinnedNotes"
      :key="note.id"
       :note="note"
       @note-pinned="togglePin">
     </note-preview>
   </section>
 </section>
`,

  components: {
    notePreview
  },
  data() {
    return {};
  },

  methods: {
    togglePin(noteId) {
      this.$emit('note-pinned', noteId)
      
    },
  },
  computed: {},
  unmounted() { },
};