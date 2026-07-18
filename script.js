/* ==========================================
   ICT500 SELF REFLECTION PORTFOLIO
   Rifaie Lutfi Bin Mohamad Nazir
==========================================*/

/* ==========================================
   SCROLL PROGRESS BAR
==========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});

const intro = document.querySelector("#about");

window.addEventListener("scroll", () => {
    const rect = intro.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, rect.bottom / window.innerHeight));

    document.documentElement.style.setProperty(
        "--gradient-opacity",
        progress
    );
});

/* ==========================================
   SCROLL REVEAL
==========================================*/

const revealElements =
document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const top =
        element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   DARK MODE
==========================================*/

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeToggle.innerHTML="☀";

    }

    else{

        themeToggle.innerHTML="☾";

    }

});

/* ==========================================
   ACCORDION
==========================================*/

const accordionItems =
document.querySelectorAll(".accordion-item");

accordionItems.forEach((item)=>{

    const button =
    item.querySelector(".accordion-header");

    button.addEventListener("click",()=>{

        accordionItems.forEach((other)=>{

            if(other!==item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ==========================================
   PHONE IMAGE SWITCHER
==========================================*/

const phoneImage =
document.getElementById("phoneImage");

const buttons =
document.querySelectorAll(".project-btn");

buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        phoneImage.style.opacity="0";

        setTimeout(()=>{

            phoneImage.src =
            button.dataset.image;

            phoneImage.style.opacity="1";

        },250);

    });

});

/* ==========================================
   BACK TO TOP BUTTON
==========================================*/

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   ACTIVE NAVIGATION
==========================================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   HERO PARALLAX
==========================================*/

const hero =
document.querySelector(".hero");

const orbs =
document.querySelectorAll(".orb");

hero.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2-e.clientX)/45;

    const y =
    (window.innerHeight/2-e.clientY)/45;

    orbs.forEach((orb,index)=>{

        const speed=index+1;

        orb.style.transform=
        `translate(${x*speed}px,${y*speed}px)`;

    });

});

hero.addEventListener("mouseleave",()=>{

    orbs.forEach((orb)=>{

        orb.style.transform="translate(0,0)";

    });

});

/* ==========================================
   HERO INTRO ANIMATION
==========================================*/

window.addEventListener("load",()=>{

    const heroItems=

    document.querySelectorAll(

    ".subtitle, .hero h1, .hero h2, .hero-description, .primary-btn"

    );

    heroItems.forEach((item,index)=>{

        item.animate(

        [

            {

                opacity:0,

                transform:"translateY(50px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:900,

            delay:index*180,

            easing:"ease-out",

            fill:"forwards"

        });

    });

});

/* ==========================================
   NAVBAR SHADOW ON SCROLL
==========================================*/

const navbar =
document.querySelector(".glass-nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.style.padding="14px 30px";

        navbar.style.backdropFilter="blur(22px)";

    }

    else{

        navbar.style.padding="18px 32px";

        navbar.style.backdropFilter="blur(18px)";

    }

});

/* ==========================================
   SMOOTH SECTION SCROLL
==========================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=

        document.querySelector(

        link.getAttribute("href")

        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ==========================================
   RIPPLE EFFECT
==========================================*/

document.querySelectorAll(

".primary-btn, .project-btn, #theme-toggle"

).forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const ripple=

        document.createElement("span");

        const size=Math.max(

        button.clientWidth,

        button.clientHeight

        );

        ripple.style.width=size+"px";

        ripple.style.height=size+"px";

        ripple.style.left=

        e.offsetX-size/2+"px";

        ripple.style.top=

        e.offsetY-size/2+"px";

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* ==========================================
   PHONE TILT
==========================================*/

const phone=

document.querySelector(".phone-mockup");

if(phone){

phone.addEventListener("mousemove",(e)=>{

    const rect=

    phone.getBoundingClientRect();

    const x=

    e.clientX-rect.left;

    const y=

    e.clientY-rect.top;

    const rotateY=

    (x-rect.width/2)/18;

    const rotateX=

    -(y-rect.height/2)/18;

    phone.style.transform=

    `perspective(1000px)
     rotateX(${rotateX}deg)
     rotateY(${rotateY}deg)
     scale(1.03)`;

});

phone.addEventListener("mouseleave",()=>{

    phone.style.transform=

    "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

}

/* ==========================================
   FLOATING CARDS
==========================================*/

const cards=

document.querySelectorAll(

".challenge-card, .growth-card"

);

cards.forEach((card,index)=>{

    card.animate(

    [

        {

            transform:"translateY(0px)"

        },

        {

            transform:"translateY(-10px)"

        },

        {

            transform:"translateY(0px)"

        }

    ],

    {

        duration:3500+index*300,

        iterations:Infinity,

        easing:"ease-in-out"

    });

});

/* ==========================================
   TYPEWRITER EFFECT
==========================================*/

const heroTitle=

document.querySelector(".hero h2");

if(heroTitle){

const originalText=

heroTitle.innerHTML;

heroTitle.innerHTML="";

let index=0;

const speed=18;

const type=()=>{

    if(index<originalText.length){

        heroTitle.innerHTML+=

        originalText.charAt(index);

        index++;

        setTimeout(type,speed);

    }

};

setTimeout(type,700);

}

/* ==========================================
   RANDOM MOTIVATIONAL QUOTES
==========================================*/

const quotes=[

"Talent without hard work is nothing. — Cristiano Ronaldo",

"Pressure is a privilege. — Max Verstappen",

"Success is no accident. It is hard work and perseverance. — Pelé",

"Discipline is choosing between what you want now and what you want most. — Abraham Lincoln"

];

const quoteBlock=

document.querySelector(".closing-quote blockquote");

if(quoteBlock){

const random=

Math.floor(

Math.random()*quotes.length

);

quoteBlock.textContent=

quotes[random];

}

/* ==========================================
   KEYBOARD SHORTCUT
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="t"){

        document.body.classList.toggle("dark");

    }

});

/* ==========================================
   CONSOLE MESSAGE
==========================================*/

console.log(

"%cICT500 Self Reflection Portfolio",

"font-size:22px;font-weight:bold;color:#0B57D0;"

);

console.log(

"Designed & Developed by Rifaie Lutfi Bin Mohamad Nazir"

);