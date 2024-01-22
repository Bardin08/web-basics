document.addEventListener('DOMContentLoaded', () => {
  createTable()
})

const createTable = () => {
  const table = document.getElementById('colorTable')
  let counter = 1

  for (let i = 0; i < 6; i++) {
    let row = table.insertRow(i)

    for (let j = 0; j < 6; j++) {
      let cell = row.insertCell(j)
      cell.textContent = counter
      cell.addEventListener('mouseover', (event) => {
        if (event.target.textContent === '2') {
          changeRandomColor(event)
        }
      })
      cell.addEventListener('mouseleave', (event) => {
        if (event.target.textContent === '2') {
          event.target.style.backgroundColor = '#fff'
        }
      })

      let clickCount = 0
      let timeout

      cell.addEventListener('click', (event) => {
        clickCount++

        if (event.target.textContent === '2') {
          if (clickCount === 1) {
            timeout = setTimeout(() => {
              clickCount = 0
              changePaletteColor(event)
            }, 300)
          } else if (clickCount === 2) {
            clearTimeout(timeout)
            clickCount = 0
            changeColumnColor(event)
          }
        }
      })

      counter++
    }
  }
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const changeRandomColor = (event) => {
  event.target.style.backgroundColor = getRandomColor()
}

const changePaletteColor = () => {
  document.getElementById('colorPickerContainer').style.display = 'block'
}

const setCellColorAfterClick = () => {
  const colorPicker = document.getElementById('colorPicker')
  const selectedColor = colorPicker.value
  const table = document.getElementById('colorTable')
  table.rows[0].cells[1].style.backgroundColor = selectedColor
}

const closeColorPicker = () => {
  document.getElementById('colorPickerContainer').style.display = 'none'
}

const changeColumnColor = (event) => {
  const columnIndex = event.target.cellIndex
  const table = document.getElementById('colorTable')
  const columnColor = getRandomColor()
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[columnIndex].style.backgroundColor = columnColor
  }
}
