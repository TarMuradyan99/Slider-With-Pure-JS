const images = [
    "./Images/gp1.jpg",
    "./Images/gp2.jpg",
    "./Images/gp3.jpg",
    "./Images/gp4.jpg"
];

const lefSide = document.getElementById(`leftside`);
const rigthSide = document.getElementById(`rigthside`)
const myImage = document.getElementById(`myimage`);
let count = 0
    lefSide.addEventListener(`click`,()=>{
    count === 0 ?count = images.length-1:count = count-1;
    myImage.src = images[count]
    })

    rigthSide.addEventListener(`click`,()=>{
        count === images.length-1? count = 0:count = count + 1;
        myImage.src = images[count]
    })

