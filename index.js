console.log("Drum kit!--try it")
sound_select=(ch)=>{
    switch (ch) {
        case 'w':
            let tom1=new Audio("sounds/tom-1.mp3")
            tom1.play()
            
            break;
        case 'a':
            let tom2=new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case 's':
            let tom3=new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case 'd':
            let tom4=new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case 'j':
            let crash=new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case 'k':
            let kick=new Audio("sounds/kick-bass.mp3") 
            kick.play()
            break; 
        case 'l':
            let snare=new Audio("sounds/snare.mp3")
            snare.play()
            break;   
        default:
            alert("Unexpected character!")
            break;
    }
}
for(let i=0;i<7;i++){
let btn=document.querySelectorAll(".drum")[i]
btn.addEventListener("click",()=>{
let ch=btn.innerHTML;
animation_btn(ch);
sound_select(ch)
   
});

}
document.addEventListener("keydown",(e)=>{
    let choice=e.key;
    sound_select(choice);
    animation_btn(choice);
})
animation_btn=(key)=>{
let active_btn=document.querySelector("."+key);
active_btn.classList.add("pressed");
setTimeout(()=>{
    active_btn.classList.remove("pressed");
},100)

}