import notePreview from "./note-preview.cmp.js"


export default {

    props: ["notes"],

 template: `
 <section v-if="notes" class="notes-list">
   
      <note-preview
       v-for="note in notes"
       :key="note.id"
        :note="note">
      </note-preview>

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