let labels = []

const containBox = document.querySelector('.flex2')

const renderContainer = () => {
    containBox.innerHTML = `
        ${labels.map(label => {
            return `
                <div class="flex" id="${label.id}">
                    <div class="x-icon">
                        <div class="top-bot"></div>
                        <div class="bot-top"></div>
                    </div>
                    <div class="label">${label.value}</div>
                </div>
            `
        }).join('')}
    `
    containBox.innerHTML += `<input type="text" class="input">`
    document.querySelector('.input').focus()

    const xIconEles = document.querySelectorAll('.x-icon')
    xIconEles.forEach(xIcon => {
        xIcon.onclick = function() {
            const id = this.parentElement.id
            labels = labels.filter(label => label.id !== id)
            renderContainer()
        }
    })
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputEle = document.querySelector('.input')
        const valueInput = inputEle.value.trim()
        const isInputFocus = document.activeElement === inputEle
        if (valueInput && isInputFocus) {
            labels.push({
                value: valueInput,
                id: Math.random().toString()
            })
            renderContainer()
        }
    }
})

renderContainer()