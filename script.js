window.addEventListener('DOMContentLoaded', function () {


    let hamburger = document.querySelector(".hamburger");
    let header = document.querySelector(".header_wrapper");
    let menu_item = document.querySelectorAll(".menu_item");
    let menu_block = document.querySelector(".menu_block");
    let logo = document.querySelector(".header_logo_link");


/* Hamburger Menu*/
    toggleMenu();
    function toggleMenu(){
        hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("hamburger_active");
        header.classList.toggle("header_wrapper_active");
        if (header.classList.contains("header_wrapper_active")) {
            menu_block.style.display = "block";
            logo.style.position = "fixed";
            logo.style.top = "-6px";
            logo.style.left = "55px";
            for (let i = 0; i < menu_item.length; i++) {
                menu_item[i].style.paddingTop = "20px";
            }
        } else {
            menu_block.style.display = "none";
            logo.style.position = "";
            logo.style.top = "";
            logo.style.right = "";
        }
    });
    }



/* Active menu items*/
activeMenu();
function activeMenu(){
    for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', function () {
            hamburger.classList.toggle("hamburger_active");
            header.classList.toggle("header_wrapper_active");
            if (header.classList.contains("header_wrapper_active")) {
                menu_block.style.display = "block";
            } else {
                menu_block.style.display = "none";
                logo.style.position = "";
                logo.style.top = "";
                logo.style.right = "";
            }
        });
    }
}



/* Active home menu item*/
logoHome();
function logoHome(){
    let link = document.querySelectorAll(".menu_link");
    for (let i = 0; i < link.length; i++) {
        logo.addEventListener("click", function () {
            link[0].classList.add("active_link");
            link[i].classList.remove("active_link");
        });
        link[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active_link");
            current[0].className = current[0].className.replace("active_link", "");
            this.className += " active_link";
        });
    }
}


let portfolio_tabs = document.querySelector(".portfolio_tabs");
let portfolio_item = portfolio_tabs.getElementsByTagName("button");
let portfolio_row = document.querySelectorAll(".portfolio_row");

/* Active portfolio tabs*/
portfolioTabs();
function portfolioTabs(){
    for (let i = 0; i < portfolio_item.length; i++) {
        portfolio_item[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active_item_tab");
            current[0].className = current[0].className.replace("active_item_tab", "");
            this.className += " active_item_tab";
        });
    }
}


/* active portfolio image*/
portfolioImage()
function portfolioImage(){
    let portfolio_img = document.querySelectorAll(".portfolio_image");
    for (let i = 0; i < portfolio_img.length; i++) {
        portfolio_img[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("portfolio_image_style");
            if (current.length > 0) {
                current[0].className = current[0].className.replace("portfolio_image_style", "");
            }
            this.className += " portfolio_image_style";
        });
    }
}


    /* Portfolio image animation*/
portfolioAnimate();
function portfolioAnimate(){
    function leftContent(a) {
        for (let i = 0; i < portfolio_row.length; i++) {
            portfolio_row[i].classList.add('left');
        }
    }

    function rightContent(b) {
        if (portfolio_row[b].classList.contains('left')) {
            portfolio_row[b].classList.remove('left');
            portfolio_row[b].classList.add('right');
        }
    }

    portfolio_tabs.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('portfolio_item_tab')) {
            for (let i = 0; i < portfolio_item.length; i++) {
                if (target == portfolio_item[i]) {
                    leftContent(i);
                    rightContent(i);
                    break;
                }
            }
        }
    });
}

    let overlay = document.querySelector(".contact_message");
    let contact_btn = document.getElementById("submit_btn");
    let close_btn = document.querySelector(".button_message");
    let subject = document.getElementById("subject");
    let describe = document.getElementById("describe");
    let text_subject = document.querySelector(".text_subject");
    let text_describe = document.querySelector(".text_describe");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let form = document.querySelector(".contact_form");
    let fade = document.querySelector(".fade");



/* Contact form pop up*/
    contactFormOpen();
    function contactFormOpen(){
    contact_btn.addEventListener("click", function (e) {
        if (name.value == "" || email.value == "") {
            return false;
        }
        if (true) {
            e.preventDefault();
            overlay.style.display = "block";
            fade.style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (subject.value.toLowerCase() == 'singolo' || subject.value !== "") {
                text_subject.textContent = subject.value;
            } else {
                text_subject.textContent = "Без темы";
            }
            if ((describe.value).toLowerCase() == 'portfolio project' || describe.value !== "") {
                text_describe.textContent = describe.value;
            } else {
                text_describe.textContent = "Без описания";
            }
        }
    });
}
    
contactFormClose()
function contactFormClose(){
    close_btn.addEventListener("click", function () {
        overlay.style.display = "none";
        fade.style.display = 'none';
        document.body.style.overflow = '';
        form.reset();
    });
}



/* Slides switching*/
sliderFunctionality();
function sliderFunctionality(){
    let slider_item = document.querySelectorAll(".slides");
    let sliderIndex = 1;
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    function showSlides(n) {
        if (n > slider_item.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slider_item.length;
        }

        for (let i = 0; i < slider_item.length; i++) {
            slider_item[i].style.display = "none";
            slider_item[sliderIndex - 1].style.display = "block";
        }
    }
    showSlides(sliderIndex);

    function plusSlider(n) {
        showSlides(sliderIndex += n);
    }

    function currentSlider(n) {
        showSlides(sliderIndex = n);
    }

    prev.addEventListener("click", function () {
        plusSlider(-1);
    });

    next.addEventListener("click", function () {
        plusSlider(1);
    });
}



/* Mobile screen on-off*/
mobileScreen();
function mobileScreen(){
    let vertical_mobile = document.querySelector(".vertical_mobile_img");

    vertical_mobile.addEventListener("click", function () {
        if (vertical_mobile.src.endsWith("phone-vertical.png")) {
            vertical_mobile.src = "assets/img/bg_img/vertical_mobile_screen.png";
        } else {
            vertical_mobile.src = "assets/img/bg_img/phone-vertical.png";
        }
    });

    let horizontal_mobile = document.querySelector(".horizontal_mobile_img");

    horizontal_mobile.addEventListener("click", function () {
        if (horizontal_mobile.src.endsWith("phone-horizontal.png")) {
            horizontal_mobile.src = "assets/img/bg_img/horizontal_mobile_screen.png";
        } else {
            horizontal_mobile.src = "assets/img/bg_img/phone-horizontal.png";
        }
    });
}

});
