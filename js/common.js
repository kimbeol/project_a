/**
 * 0. array list
 * type : shirt, pants, skirt
 * color : blue, yellow, pink
 */
 function arrEvent() {
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

    // html elements
    let itemsEle = document.querySelector('.items');
    itemsEle.innerHTML = elementsVal2;

    // return arrEvent();
}

/**
 * search Event
 */
searchList = (item) => {
    let dataName = item;
    let listLi = [];
    let lengthLi = arrEvent();
    let schEle = '';

    for(val of lengthLi) {
        // console.log(val.image);
        if((dataName == val.type) || (dataName == val.color)) {
            schEle += `<li class="li" data-code="${val.type}" data-color="${val.color}">
                    <img src="${val.image}" alt="${val.type}">
                    <span class="name">${val.gender}, ${val.size}</span>
                </li>`;
        }
    }

    let itemsEle = document.querySelector('.items');
    delete itemsEle.children;
    itemsEle.innerHTML = schEle;
    
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

        elementsVal += `<li class="li" data-code="${val.type}" data-color="${val.color}">
                <img src="${val.image}" alt="${val.type}">
                <span class="name">${val.gender}, ${val.size}</span>
            </li>`;
    }

    let ele = elementsVal;
    return ele;
}


/**
 * click button event
 */
let btn_t = document.querySelector('.btn_t').addEventListener('click', () =>{
    searchList('shirt');
});
let btn_p = document.querySelector('.btn_p').addEventListener('click', () =>{
    searchList('pants');
});
let btn_s = document.querySelector('.btn_s').addEventListener('click', () =>{
    searchList('skirt');
});
let btn_blue = document.querySelector('.bg_blue').addEventListener('click', () =>{
    searchList('blue');
});
let btn_yellow = document.querySelector('.bg_yellow').addEventListener('click', () =>{
    searchList('yellow');
});
let btn_pink = document.querySelector('.bg_pink').addEventListener('click', () =>{
    searchList('pink');
});
