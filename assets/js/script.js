const bulb = document.getElementById('bulb')

bulb.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {

    function setYear(id1, id2, id3, id4, id5) {

        const item1 = document.getElementById(id1)
        const item2 = document.getElementById(id2)
        const item3 = document.getElementById(id3)
        const item4 = document.getElementById(id4)
        const item5 = document.getElementById(id5)


        item1.textContent = '3'
        
            item2.textContent = '1'
            item3.textContent = '1'
            item4.textContent = '1'
            item5.textContent = '1'
        
    }

    setYear("yearsql", "yearnode", "yearhtml", "yearcss", "yearjavascript")
  
})
