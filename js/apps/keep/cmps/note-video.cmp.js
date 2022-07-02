export default {
    props: ['note'],
    template: `
        <section class="note-template note-video">
            <h2 v-if="note.info.title" class="info-txt">{{note.info.title}}</h2>

            <iframe width="100%"
            :src="videoSrcLink" 
           

            frameborder="0" allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </section>
    `,
    
    methods: {
        getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);

            return (match && match[2].length === 11)
                ? match[2]
                : null;
        }
    },
    computed: {
        videoSrcLink() {
            let url = 'https://www.youtube.com/embed/' + this.note.info.video
            return url
        }
    }
}