import notePreview from "./note-preview.cmp.js"


export default {

    props: ["notes"],

 template: `
 <section v-if="notes" class="notes-list">
   <ul>
    <li v-for="note in notes" :key="note.id" class="note-preview-container">
      <note-preview :note="note"></note-preview>

    </li>
   </ul>

 </section>
`,

components: {
    notePreview
  },
data() {
return {};
},

methods: {},
computed: {},
unmounted() {},
};