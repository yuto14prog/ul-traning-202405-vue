
const { createApp, ref } = Vue

createApp({
    setup() {
        const count =  ref(0)
        const countUp = function() {
            count.value += 1
        }
        const countDown = function() {
            count.value -= 1
        }

        return {
            count,
            countUp,
            countDown,
        }
    },
}).mount("#app")