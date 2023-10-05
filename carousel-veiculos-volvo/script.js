const btnPrevious = document.getElementById("btnPrevious")
const btnNext = document.getElementById("btnNext")

const listCards = document.getElementById("listCards")

btnNext.onclick = () => {
    listCards.scrollLeft += 60
}

btnPrevious.onclick = () => {
    listCards.scrollLeft -= 60
}