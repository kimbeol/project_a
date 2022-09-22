
/**
 * 0.valiable
 */

/**
 * 1.read
 */
read = () => {

    let itemsEle = document.querySelector('.items');

    let elementsVal = '';
        elementsVal += '<li class=li data-name=shirt blue>',
        elementsVal += '    <img src="img/blue_t.png" alt="">',
        elementsVal += '    <span class="name">feamle, large</span>',
        elementsVal += '</li>';

    let eleHtml;
    eleHtml = document.createElement('li');
    
    eleHtml.innerHTML = elementsVal;
    
    // html dot elements
    itemsEle.append(eleHtml);

    return  arrEvent();
}

/**
 * 2. array event
 */
function arrEvent() {
    let arrLoop = [
        // shirt
        {
            "type" : "shirt",
            "gender" : "famale",
            "size" : "large",
            "color" : "blue",
            "image" : "img/blue_t.png"
        },
        {
            "type" : "shirt",
            "gender" : "famale",
            "size" : "yellow",
            "color" : "pink",
            "image" : "img/yellow_t.png"
        },
        {
            "type" : "shirt",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        // pants
        {
            "type" : "pants",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        {
            "type" : "pants",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        {
            "type" : "pants",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        // skirt
        {
            "type" : "skirt",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        {
            "type" : "skirt",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
        {
            "type" : "skirt",
            "gender" : "famale",
            "size" : "large",
            "color" : "pink",
            "image" : "img/pink_t.png"
        },
    ];

    for(val in arrLoop) {
        console.log(arrLoop[val].type)
    }
}


/**
 * load
 */
window.onload = function() {
    
    // 목록
    read();
}
