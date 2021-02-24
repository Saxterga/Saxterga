let currentImg =0;
let previousImg =0;
let imgArray = [
    {
        photo: "./imgs/img1.jpg",
        title: "Snowy mountain and a lake",
        description: "Hendrerit gravida rutrum quisque non tellus orci."     
    },
    {
        photo: "./imgs/img2.jpg",
        title: "Waterfall in a forest",
        description: "Malesuada fames ac turpis egestas sed tempus urna. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus."
    },
    {
        photo: "./imgs/img3.jpg",
        title: "Path along a river",
        description: "Pharetra magna ac placerat vestibulum lectus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin."
    },
    {
        photo: "./imgs/img4.jpg",
        title: "Village by a river",
        description: "A lacus vestibulum sed arcu non odio euismod lacinia at."
    },
    {
        photo: "./imgs/img5.jpg",
        title: "Sunset over winter river",
        description: "Id eu nisl nunc mi ipsum faucibus vitae. Aliquam purus sit amet luctus venenatis lectus. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue."
    },
    {
        photo: "./imgs/img6.jpg",
        title: "Riverbend at fall",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        photo: "./imgs/img7.jpg",
        title: "Bridge over a river",
        description: "Convallis posuere morbi leo urna molestie at elementum eu. Orci a scelerisque purus semper eget duis at."
    },
    {
        photo: "./imgs/img8.jpg",
        title: "No river, no lake",
        description: "Massa eget egestas purus viverra accumsan in nisl nisi scelerisque."
    },
];

document.onload=changeImg(currentImg, previousImg);


function changeImg(position, formerPosition) {
    document.querySelector("#imgInFrame").src=imgArray[position].photo;
    document.querySelector("#descrTitle").innerHTML=imgArray[position].title;
    document.querySelector("#descrContent").innerHTML=imgArray[position].description;
    
    children = document.querySelector("#thumbnailsFrame");
    children.children[position].style.borderColor = "gold";
    if (formerPosition !== position) {
        children.children[formerPosition].style.borderColor = "#848484";
    }
};

let leftAP = document.querySelector(".arrowPanelLeft");
leftAP.addEventListener("click", () => {
    previousImg=currentImg;
    currentImg-=1;
    if (currentImg<0) {
        currentImg=7;
    }
    changeImg(currentImg, previousImg);
});

let rightAP = document.querySelector(".arrowPanelRight");
rightAP.addEventListener("click", () => {
    previousImg=currentImg;
    currentImg+=1;
    if (currentImg>7) {
        currentImg=0;
    };
    changeImg(currentImg, previousImg);
})

function positionSetting (pos) {
    previousImg=currentImg;
    currentImg=pos;
    changeImg(currentImg, previousImg);
};