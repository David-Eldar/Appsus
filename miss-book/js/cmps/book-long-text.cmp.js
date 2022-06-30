export default {
    props: ["txt"],
    template: `
    <p>{{description}}</p>
    <button class="btn" @click="isReadMore= !isReadMore" v-if="txt > 100">{{readMoreOrLess}}</button>
  `,
    data() {
        return {
            isReadMore: false,
        };
    },
    methods: {},
    computed: {
        description() {
            if (this.isReadMore || this.txt.length < 100) return this.txt
            return this.txt.substring(0, 100) + '...'
        },
        readMoreOrLess() {
            return this.isReadMore ? 'Less' : 'More'
        }
    },
}