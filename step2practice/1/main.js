
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

        const isEven = function (count) {
            return count % 2 === 0
        }

        return {
            count,
            countUp,
            countDown,
            isEven,
        }
    },
}).mount("#app")