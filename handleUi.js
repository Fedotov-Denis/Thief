const onAddLine = () => {
    const table = document.getElementById('store')

    const tr = document.createElement('tr')
    const colorTh = document.createElement('th')
    const amountTh = document.createElement('th')
    const removeTh = document.createElement('th')
    const colorInput = document.createElement('input')
    const amountInput = document.createElement('input')
    const removeIcon = document.createElement('i')
    colorInput.type = 'text'
    amountInput.type = 'number'
    removeIcon.classList = 'fa fa-remove'
    removeIcon.style = 'font-size:48px; color:red; cursor:pointer;'
    removeIcon.onclick = () => {
        tr.remove()
    }
    colorTh.appendChild(colorInput)
    amountTh.appendChild(amountInput)
    removeTh.appendChild(removeIcon)
    tr.appendChild(colorTh)
    tr.appendChild(amountTh)
    tr.appendChild(removeTh)
    table.appendChild(tr)
}

const onSteal = () => {
    const capacity = document.getElementById('capacity')
    if (!capacity.value) {
        alert('Введите вместимость мешка')
        return
    }
    const tableLines = document.getElementById('store').children
    const balls = []
    const colors = []
    for (let x = 1; x < tableLines.length; x++) {
        const count = parseInt(tableLines[x].children[1].children[0].value)
        const color = tableLines[x].children[0].children[0].value
        if (count && color) {
            balls.push(count)
            colors.push(color)
        }
    }
    const stolenBalls = steal(capacity.value, balls)
    drawResult(stolenBalls, colors)
}

const drawResult = (stolenBalls, colors) => {
    const table = document.getElementById('bag')

    while (table.children.length > 1) {
        table.children[1].remove()
    }

    stolenBalls.forEach((balls, index) => {
        const tr = document.createElement('tr')
        const colorTh = document.createElement('th')
        const amountTh = document.createElement('th')
        const colorText = document.createElement('p')
        const amountText = document.createElement('p')
        colorText.innerText = colors[index]
        amountText.innerText = balls
        colorTh.appendChild(colorText)
        amountTh.appendChild(amountText)
        tr.appendChild(colorTh)
        tr.appendChild(amountTh)
        table.appendChild(tr)
    });
}