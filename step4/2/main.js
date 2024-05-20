const { createApp, ref } = Vue

const Counter = {
    setup() {
        let count = ref(0)
        const countUp = function () {
            count.value += 1
        }
        return {
            count,
            countUp
        }
    },
    template: `<div><p>{{ count }}</p><button v-on:click="countUp">カウントアップ</button></div>`
}

const app = createApp({
    components: {
        'counter': Counter
    }
}).mount("#app")