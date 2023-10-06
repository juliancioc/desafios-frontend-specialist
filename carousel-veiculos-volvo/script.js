const tabAllModels = document.getElementById("tabAllModels")
const tabSuv = document.getElementById("tabSuv")
const tabCrossover = document.getElementById("tabCrossover")

const btnPrevious = document.getElementById("btnPrevious")
const btnNext = document.getElementById("btnNext")

const listCards = document.getElementById("listCards")

btnNext.onclick = () => {
    listCards.scrollLeft += 110

    if (listCards.scrollLeft === (listCards.scrollWidth - listCards.clientWidth)) {
        btnNext.classList.add("btn-disabled")
    }
}

btnPrevious.onclick = () => {
    listCards.scrollLeft -= 110

    if (listCards.scrollLeft === (listCards.clientWidth - listCards.scrollWidth)) {
        btnPrevious.classList.add("btn-disabled")
    }
}

tabAllModels.onclick = () => {
    tabAllModels.classList.add("active")

    tabSuv.classList.remove("active")
    tabCrossover.classList.remove("active")
}

tabSuv.onclick = () => {
    tabSuv.classList.add("active")

    tabAllModels.classList.remove("active")
    tabCrossover.classList.remove("active")
}

tabCrossover.onclick = () => {
    tabCrossover.classList.add("active")

    tabSuv.classList.remove("active")
    tabAllModels.classList.remove("active")
}