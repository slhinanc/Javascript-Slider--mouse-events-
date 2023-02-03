let pics = [   
    {
        name: 'Swedish design',
        image: 'img/design.webp',
        link: 'https://sweden.se/culture/arts-design/swedish-design'
    },
    {
        name: 'Energy use in Sweden',
        image: 'img/energy.webp',
        link: 'https://sweden.se/climate/sustainability/energy-use-in-sweden'
    },
    {
        name: 'Making fashion sustainable',
        image: 'img/fashion.webp',
        link: 'https://sweden.se/culture/arts-design/making-fashion-sustainable'
    },
    {
        name: 'Greener future',
        image: 'img/green.webp',
        link: 'https://sweden.se/climate/sustainability/10-ways-to-a-greener-future'
    },
    {
        name: 'Sustainable business',
        image: 'img/sustainable.webp',
        link: 'https://sweden.se/work-business/business-in-sweden/sustainable-business'
    }
];

let index = 0;
let slaytCount = pics.length;
let interval;

let settings = {             
    duration: "1000",
    random: false
}

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function(){
    index--;
    showSlide(index);
    console.log(index);
})


document.querySelector(".fa-arrow-circle-right").addEventListener("click", function(){
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init(settings);
    })
})


function init(settings){

    let prev;

   interval=setInterval(() => {
        
        if(settings.random){

            do {   
            index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {

            if(slaytCount == index+1){
                index = -1;
            }
            index++;
            showSlide(index);
            console.log(index);
        }
        
        showSlide(index);
        
    },settings.duration);
}


function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount
    }

    if(i >= slaytCount){
        index = 0;
    }

document.querySelector(".card-img-top").setAttribute("src", pics[index].image);
document.querySelector(".card-title").textContent = pics[index].name;
document.querySelector(".card-link").setAttribute("href", pics[index].link);

}


