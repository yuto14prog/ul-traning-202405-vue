const { createApp, ref, reactive } = Vue

createApp({
    setup() {
        const message = ref("これは初期値です")
        const maxLength = 5


        const list = reactive({
            'hoge': { text: 'message1' },
            'fuga': { text: 'message2' }
        })

        const isActive = true

        const headLine = "<h1>これは見出しです</h1>"

        return {
            message,
            maxLength,
            list,
            isActive,
            headLine,
        }
    }
}).mount("#app")