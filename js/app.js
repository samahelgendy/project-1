

// when top >=600 show button 
let btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// when click the button top=0
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
}

const lists = document.getElementById("navbar__list");
const sessions = document.querySelectorAll("section");

// when you add a new section the list increases autoatically
for (sess of sessions) {
    const text = sess.id;
    var list = document.createElement("li");
    
    list.innerHTML = `<a href="#${text}" data-nav="${text}" class="menu__link ${text}">${text}</a>`;
    lists.appendChild(list);
    
}

// when you want the session to apper in active status



window.addEventListener("scroll",  () => {
    sessions.forEach(function (showCircle) {
        if (showCircle.getBoundingClientRect().top >= -450 && showCircle.getBoundingClientRect().top >= -170) {
            // add active class
            showCircle.classList.add("your-active-class");
        } else {
            //remove active class
            showCircle.classList.remove("your-active-class");
    } 
})
});

// // when you click on the list items you will be vanigated to the appropiated section dynamically

var menuList = document.querySelectorAll("#navbar__list li");
function moveAnyWhere(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.dataset.nav) {
                document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({
                  behavior: "smooth"
                    });
            }
        })
    })
}

moveAnyWhere(menuList);

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const footer = document.getElementsByClassName("page__footer");
window.addEventListener("scroll", function () {
    // add active class in Nav section1
      if ( window.scrollY >= section1.offsetTop - 200 && window.scrollY <= section2.offsetTop - 100) {
        
          document.getElementsByTagName("li")[0].classList.add("active");
    } else {
        
        document.getElementsByTagName("li")[0].classList.remove("active");
    }
  // add active class in section2 
    if (window.scrollY >= section2.offsetTop -20 && window.scrollY <= section3.offsetTop -100) {
        document.getElementsByTagName("li")[1].classList.add("active");
        
    } else {
        document.getElementsByTagName("li")[1].classList.remove("active");
    }
    

    // // add active class in section3

      if (window.scrollY >= section3.offsetTop && window.scrollY <= section4.offsetTop-100 ) {
          document.getElementsByTagName("li")[2].classList.add("active");
    } else {
          document.getElementsByTagName("li")[2].classList.remove("active");
    }

    // // add active class in section4
      if ( window.scrollY >= section4.offsetTop - 100 ) {
          document.getElementsByTagName("li")[3].classList.add("active");
     } else  {
          document.getElementsByTagName("li")[3].classList.remove("active");
    }

     

    
});



