const labels = []

const containBox = document.querySelector('.flex2')
const inputEle = document.querySelector('.input')
const btnEle = document.querySelector('.button')

btnEle.onclick = function() {
    if (inputEle.value.trim() !== '') {
        labels.push(inputEle.value.trim())
        renderContainer()
    }
}

const renderContainer = () => {
    containBox.innerHTML = `
        ${labels.map(label => {
            return `
                <div class="flex">
                    <div class="x-icon">
                        <div class="top-bot"></div>
                        <div class="bot-top"></div>
                    </div>
                    <div class="label">${label}</div>
                </div>
            `
        }).join('')}
    `
}

renderContainer()