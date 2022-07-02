import notePreview from "./note-preview.cmp.js"


export default {

  props: ["notes"],
 
  template: `

<section class="note-list">
         
       <div v-for="note in notes"
            :key="note.id"
            class="note-preview-container">
            <note-preview v-if="note.isPinned" :note="note"></note-preview>
        </div>
       <div v-for="note in notes"
            :key="note.id"
            class="note-preview-container">
            <note-preview v-if="!note.isPinned" :note="note"></note-preview>
        </div>
    </section>

`,

  components: {
    notePreview
  },
  data() {
    return {};
  },

  methods: {

  },
  computed: {},
  unmounted() { },
};