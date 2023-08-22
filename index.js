var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var but=this.innerHTML;
        sound(but);
        anim(but);
    });
}

document.addEventListener("keydown" , function (event){
    sound(event.key);
    anim(event.key);
});
function sound(ev){
    switch(ev){
        case "w":
            var w=new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s=new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d=new Audio("sounds/tom-4.mp3");
            d.play();
            break;
        case "j":
            var j=new Audio("sounds/snare.mp3");w
            j.play();
            break;
        case "k":
            var k=new Audio("sounds/crash.mp3");
            k.play();
            break;
        case "l":
            var l=new Audio("sounds/kick-bass.mp3");
            l.play();
            break;
    }
}
function anim(ev){
   var an=document.querySelector("."+ev);
   an.classList.add("pressed");
   setTimeout(function (){an.classList.remove("pressed");}, 100);
}