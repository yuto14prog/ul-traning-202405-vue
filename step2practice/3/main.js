
const { createApp, reactive, computed } = Vue

createApp({
    setup() {
        const data =  reactive([1, 4, 7, 11, 15])

        const isEvenNumbers = function () {
            const evenNumbers = []
            for (let index = 0; index < data.length; index++) {
                if (data[index] % 2 === 0) {
                    evenNumbers.push(data[index])
                }
            }
            return evenNumbers
        }

        const isOddNumbers = computed(() => {
            const oddNumbers = []
            for (let index = 0; index < data.length; index++) {
                if (data[index] % 2 === 1) {
                    oddNumbers.push(data[index])
                }
            }
            return oddNumbers
        })

        const addNumber = function (){
            return data.push(Math.floor(Math.random()*10) + 1)
        }

        return {
            data,
            isEvenNumbers,
            isOddNumbers,
            addNumber,
        }
    },
}).mount("#app")