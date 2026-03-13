// hover preview

document.querySelectorAll(".card video").forEach(v => {

v.addEventListener("mouseenter",()=>v.play())

v.addEventListener("mouseleave",()=>{

v.pause()
v.currentTime=0

})

})

// lightbox

const lightbox=document.querySelector(".lightbox")
const lbVideo=document.querySelector("#lightbox-video")

document.querySelectorAll(".card video").forEach(v=>{

v.addEventListener("click",()=>{

lightbox.style.display="flex"

lbVideo.src=v.querySelector("source").src

})

})

document.querySelector(".close").onclick=()=>{

lightbox.style.display="none"
lbVideo.pause()

}

// GSAP animation

gsap.from(".title",{
y:80,
opacity:0,
duration:1.2
})
