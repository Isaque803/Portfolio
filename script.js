//Exibi os elementos ao Scroll
function animationScroll(){
    const elements = document.querySelectorAll("[data-anime]")
    const windowTop = window.pageYOffset + window.innerHeight * 0.75
    elements.forEach((element) => {
        if (windowTop > element.offsetTop){
            element.classList.add("anime-scroll")
        } 
    })
}

window.addEventListener("scroll", () => {
    animationScroll()
})

animationScroll()


//Exibi a descrição das ferramentas
function displayDescription(n){
    let description = document.querySelectorAll(".description")
    description[n].classList.toggle("active")
    removeAllActive(n, description)
}

function removeAllActive(index, element){
    for (let i = 0; i < element.length; i++){
        if (i != index){
            element[i].classList.remove("active")
        }
    }
}

//Exibi o menu mobile
function displayMenuMobile(){
    let header = document.querySelector("header")
    header.classList.toggle("active")
}

