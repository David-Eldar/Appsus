import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
// import noteFilter from "../cmps/note-filter.cmp.js"


export default {
    template: `

            <section class="notesToShow">

            <!-- <note-filter @filter-set="setFilter"/> -->
            <!-- <div class="right-side"> -->

                <note-list :notes="notesToShow" />
            </div>
        </section>
`,

    components: {
        noteList,
        // noteFilter,
    },

    data() {
        return {
            notes: null,
            filterBy:null

        };
    },
    created() {
        noteService.query().then((notes) => {
            this.notes = notes

        })
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            let regex = new RegExp(this.filterBy.txt, 'i')
            return this.notes.filter(note => regex.test(note.id))
            log
        }
    },
    unmounted() { },
};