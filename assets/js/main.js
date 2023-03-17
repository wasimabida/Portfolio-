/*SHOW SIDE BAR */ 
const navMenu =document.getElementById('sidebar'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/* SIDE BAR SHOW */ 
/* validate if constant Exists */ 

if(navToggle){
    navToggle.addEventListener("click",()=> {
        navMenu.classList.add('show-sidebar')
    })
}

/* SIDEBAR HIDDEN */ 
/* validate if constant Exists */ 

if(navClose){
    navClose.addEventListener("click",()=> {
        navMenu.classList.remove('show-sidebar')
    })
}

/* skills tabs */
const tabs = document.querySelectorAll('[data-target'),
    tabcontent = document.querySelectorAll('[data-content')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabcontents => {
            tabcontents.classList.remove("skills__active")
        })

        target.classList.add('skills__active')


        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')



    })
})
/* MIXITU FILTER PORTFOLIO */
let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*LINK ACTIVE WOKR*/

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/* WORK POPUP */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img ").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/*services modal */
const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*swiper testimonial */

let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
  },
});

/*    SCROLL SECTIONS ACTIVE LINK */ 
const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent= this.parentNode;
    parent.classList.add("focus");

}
function blurFunc(){
    let parent= this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc)
    input.addEventListener("blur",blurFunc)
})

/*SCROLL SECTIONS ACTIVE LINK */
//get all sections that have an id defined 
const sections=document.querySelectorAll("section[id]");

//add an event sections listener listening for scroll
window.addEventListener("scroll",navHighlighter);
function navHighlighter()
{
    //get currebt scroll position
    let scrollY=window.pageYOffset;
    //now we loop through sections to get height, top and ID values for each 
    sections.forEach(current => {
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop - 50,
        sectionId=current.getAttribute("id");
        /*if our current scroll position enters the space where section on screen is,add .active class to 
        corresponding navigation link,else remove it 
        
        to know which link needs on active class, we use section variable we are getting 
        while looping through sections as an selector*/


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove("active-link")
        }
    })
}