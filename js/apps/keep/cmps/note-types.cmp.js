

// TEXT NOTE //
export const noteTxt = {
    props: ["note"],
    template: `
        <section class="note-txt">
            <h3>{{note.info.title}}</h3>
                 {{note.info.txt}}
        </section>
    `,
    data() {
        return {}
    },
}

// IMG NOTE //
export const noteImg = {
    props: ["note"],
    template: `
        <section class="note-img">
            <h4>{{note.info.title}}</h4>
            <img :src="note.info.url"/>
        </section>
    `,
    data() {
        return {}
    },
}

// VIDEO NOTE //
export const noteVideo = {
    props: ['note'],
    template: `
        <section class="note-video">
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

