/**
 * 0. array list
 */
 function arrEvent() {
    // 품목 : shirt, pants, skirt
    let arrLoop = [
        // shirt
        {
            "type"   : "shirt",
            "gender" : "famale",
            "size"   : "large",
            "color"  : "blue",
            "image"  : "img/blue_t.png"
        },
        {
            "type"   : "shirt",
            "gender" : "male",
            "size"   : "large",
            "color"  : "yellow",
            "image"  : "img/yellow_t.png"
        },
        {
            "type"   : "shirt",
            "gender" : "male",
            "size"   : "large",
            "color"  : "pink",
            "image"  : "img/pink_t.png"
        },
        // pants
        {
            "type"   : "pants",
            "gender" : "male",
            "size"   : "small",
            "color"  : "blue",
            "image"  : "img/blue_p.png"
        },
        {
            "type"   : "pants",
            "gender" : "male",
            "size"   : "large",
            "color"  : "yellow",
            "image"  : "img/yellow_p.png"
        },
        {
            "type"   : "pants",
            "gender" : "famale",
            "size"   : "large",
            "color"  : "pink",
            "image"  : "img/pink_p.png"
        },
        // skirt
        {
            "type"   : "skirt",
            "gender" : "famale",
            "size"   : "small",
            "color"  : "blue",
            "image"  : "img/blue_s.png"
        },
        {
            "type"   : "skirt",
            "gender" : "famale",
            "size"   : "large",
            "color"  : "yellow",
            "image"  : "img/yellow_s.png"
        },
        {
            "type"   : "skirt",
            "gender" : "famale",
            "size"   : "large",
            "color"  : "pink",
            "image"  : "img/pink_s.png"
        }
    ];

    return arrLoop;

    // for(val in arrLoop) {
    //     console.log(arrLoop[val].type)
    // }

    // for(val of arrLoop) {
    //     console.log(val)
    // }
}

/**
 * 1.load
 */
 window.onload = function() {
    let eleVal;

    // 목록
    read();
}


/**
 * 2.read
 */
read = (item) => {
    let elementsVal2 = listHtml(item);
    console.log(elementsVal2); 
    // if(val.type !== items){
    //     elementsVal += `<li class="li" data-code=${val.color} >
    //         <img src="${val.image}" alt="${val.type}">
    //         <span class="name">${val.gender}, ${val.size}</span>
    //     </li>`;
    // }

    // html elements
    let itemsEle = document.querySelector('.items');
    itemsEle.innerHTML = elementsVal2;

    // return arrEvent();
}

/**
 * function
 */
listHtml = (item) => {
    let items = item;
    let arrEventList = arrEvent();
    let elementsVal = '';
    let elementsValArr = [];

    for(val of arrEventList) {
        // console.log(val.image);

        elementsVal += `<li class="li" data-code=${val.color} >
                <img src="${val.image}" alt="${val.type}">
                <span class="name">${val.gender}, ${val.size}</span>
            </li>`;
    }

    let ele = elementsVal;
    return ele;
}


/**
 * click event
 */
let btn_t = document.querySelector('.btn_t').addEventListener('click', () =>{
    read('shirt');
});
let btn_p = document.querySelector('.btn_p').addEventListener('click', () =>{
    read('pants');
});
let btn_s = document.querySelector('.btn_s').addEventListener('click', () =>{
    read('skirt');
});
let btn_blue = document.querySelector('.bg_blue').addEventListener('click', () =>{
    read('blue');
});
let btn_yellow = document.querySelector('.bg_yellow').addEventListener('click', () =>{
    read('yellow');
});
let btn_pink = document.querySelector('.bg_pink').addEventListener('click', () =>{
    read('pink');
});
