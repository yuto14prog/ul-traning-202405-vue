
const { createApp, computed, reactive } = Vue

createApp({
    setup() {
        const isDisplay = false

        const isDisplayFunction = function () {
            return true
        }

        const isDisplayComputed = computed(() => true)
        // const isDisplayComputed = computed(() => {return true})

        const list = reactive([
            {text: 'message1'},
            {text: 'message2'},
        ])

        const listObject = reactive({
            'hoge': {text: 'message1'},
            'fuga': {text: 'message2'},
        })

        return {
            isDisplay,
            isDisplayFunction,
            isDisplayComputed,
            list,
            listObject,
        }
    },
}).mount("#app")