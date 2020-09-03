const themeChanger = document.querySelector("input[name=theme-changer]")

themeChanger.addEventListener("change", function () {
    if (this.checked) {
        changeToLight()
    } else {
        changeToDark()
    }
})

const changeToDark = () => {
    //     const container = document.querySelector(".container")
    const container = document.getElementById("container")
    container.classList.add("dark")
    const cardArray = document.getElementsByClassName("card")
    for (var i = 0; i < cardArray.length; i++) {
        cardArray[i].classList.add("dark")
    }
}
const changeToLight = () => {
    container.classList.remove("dark")
}

//        errorBall.classList.add("error")
//        errorBall.classList.remove("error")
