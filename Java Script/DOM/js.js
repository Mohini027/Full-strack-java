let k=document.getElementById("p");
let a=document.getElementById("btn");
 a.onclick=function  (){
 a.style.backgroundColor="red"
a.style.fontSize="60px"
 a.style.borderRadius="50%"
console.log(a)
 }
/*2. click the button and display three images on clicking the button ft img should be of 
border radius 30px , second img should be border radius 100px , 
third img should be of borderradius 50%*/
function b()
{
    let images=document.getElementById("div");
    let button=document.getElementById("button2");
    button.style.backgroundColor="red"
    button.innerHTML=
    `<img id="i1" src="https://socialstatusdp.com/wp-content/uploads/2022/12/Radha-Krishna-Wallpaper-for-Mobile.jpg" width="200" height="200" style="border-radius:30px"/>
    <img id="i2" src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?cs=srgb&dl=bloom-blossom-flora-46216.jpg&fm=jpg" width="200" style="border-radius:100px"/>
    <img id="i3" src="https://w0.peakpx.com/wallpaper/336/471/HD-wallpaper-all-god-lord-rama-and-sita-maa-lord-rama-sita-maa-god.jpg" style="border-radius:50%" width="200" height="200"/>`

}