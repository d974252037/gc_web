// banner 輪播及進場動畫
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0]
let swiper1 = new Swiper(".swiper1",{
    speed:2000,
    loop:true,
    autoplay:{
        delay:6000
    },
    autoplayDisableOnInteraction: false,
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
        slideChangeTransitionStart: function(){
            if(this.realIndex == 0){
                next.classList.remove("navigate")
                banner1In()
                prev.classList.add("navigate")
                
            }else if(this.realIndex == 1){
                prev.classList.remove("navigate")
                banner2In()
                next.classList.add("navigate")
            }
           
     
        },
      },
   
})

function banner1In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img1",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
function banner2In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img2",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
prev.onclick = function(){
    swiper1.slideTo(1);

}
next.onclick = function(){
    swiper1.slideTo(2);

}

// second-page line-grow animation
let li = document.querySelectorAll(".switchImg li");
let switchImg = document.querySelectorAll(".home-second-page-bottom-left-img img")
for(let i = 0 ; i <li.length ; i++){
    li[i].onclick = function(e){
        let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
        lineSwitch.classList.remove("lineSwitch")
        this.classList.add("lineSwitch")
        switchImg.forEach((i)=>{
            i.style.opacity="0"
        })
        switchImg[i].style.opacity="1"
    }
   
}

// second-page line-grow animation
// banner title in
function bannerTitleIn(){
    let gg =gsap.timeline();
    gg.fromTo(".home-first-page-title h1",{
        opacity:0
    },{
        opacity:1,
        duration:1,
        delay:4
    }).fromTo(".home-first-page-title p",{
        opacity:0
    },{
        opacity:1,
        duration:1,
      
    })
}
bannerTitleIn()

// banner title in

//page title in 
function pageTitleIn(page){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-${page}-page-top`,
            start:"top center"
        }
    })
    gg.fromTo(`.home-${page}-page-top h3`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    }).fromTo(`.home-${page}-page-top h2`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    }).fromTo(`.home-${page}-page-top .text-decoration`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    }).fromTo(`.home-${page}-page-top .text-decoration .line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    })
}
pageTitleIn("second")
pageTitleIn("third")
// page title in

// second-page-right in

function seondPageRight(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom"
        }
    })
    gg.fromTo(".home-second-page-bottom-right > svg polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 500,
        duration:4,
    }).fromTo(".home-second-page-bottom-right-para > h3",{
        opacity:0,
        y:30,
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+3").fromTo(".home-second-page-bottom-right-para > svg",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+0.8").fromTo(".home-second-page-bottom-right-para > svg line",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1900,
        duration:1.2,
    },"<+1").fromTo(".home-second-page-bottom-right-para p",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<").fromTo(".home-second-page-bottom-right-para .readmore",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })
    gg2.fromTo(".home-first-page-shadow",{
      
    },{
        duration:0.3,
        opacity:0,
        height:0
    },"<")
}
seondPageRight()



// second-page-right in

// waveline
const path = document.querySelectorAll(".home-third-page-bottom li svg path")

function waveLine(){
let string = `M0 10 Q40 15 80 10 120 5 160 10 200 15 240 10 280 5 320 10 360 15 400 10 440 5 480 10 520 15 560 10 600 5 640 10 680 15 720 10 760 5 800 10 840 15 880 10 920 5 960 10 1000 15 1040 10 1080 5 1120 10 1160 15 1200 10`
let stArr = string.split(" ")
let gg = gsap.timeline();

    setInterval(()=>{
        let stringAfter = [];
        stArr.forEach((item)=>{
            let random = parseInt(Math.random()*5)
            item = parseInt(item)
            // for(let x = 0 ; x < item+random )
            item = item+random
            
            stringAfter.push(item)
        })
        stringAfter[0] = `M0`
        stringAfter[2] = `Q40`
        stringAfter[61] = `10`
        path.forEach((i)=>{
            i.setAttribute("d",`${stringAfter}`)
         })
    
        // console.log(stArr)
        stringAfter = stArr.join()
        // console.log(stringAfter)
        
    },100)
  
}

waveLine()



// waveline