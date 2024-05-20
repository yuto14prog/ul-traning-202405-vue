const { createApp, ref } = Vue

const ChildCounter = {
    props: ['count'],
    setup(_props, context) {
        const childCountUp = function() {
            context.emit('count-up')
        }

        return {
            childCountUp
        }
    },
    template: `<div><p>{{ count }}</p><button v-on:click="childCountUp">カウントアップ</button></div>`
}

const ChildDecrementCounter = {
    setup(_props, context) {
        const childCountDown = function() {
            context.emit('count-down')
        }

        return {
            childCountDown
        }
    },
    template: `<div><button v-on:click="childCountDown">カウントダウン</button></div>`
}

const app = createApp({
    components: {
        ChildCounter,
        ChildDecrementCounter,
    },
    setup() {
        const count = ref(0)
        const countUp = function () {
            count.value += 1
        }
        const countDown = function () {
            count.value -= 1
        }

        return {
            count,
            countUp,
            countDown,
        }
    }
}).mount("#app")