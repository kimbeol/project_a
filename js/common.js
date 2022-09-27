

window.onlineShop_list = (function() {
    
    // global scope
    let eleVal;

    /**
     * 1.load : init
     */
    function load() {
        // 목록
        read();
    }

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
     * 2.read
     */
     const read = (item) => {
        let elementsVal2 = listHtml(item);

        // html elements
        let itemsEle = document.querySelector('.items');
        itemsEle.innerHTML = elementsVal2;

        // return arrEvent();
    }

    /**
     * search Event
     */
     const searchList = (item) => {
        let dataName = item.dataset.action;
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
    const listHtml = (item) => {
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

    // 이벤트 위임
    // const ActionFunctions = {
    //     shirt : () => {searchList('shirt')},
    //     pants : () => {searchList('pants')},
    //     skirt : () => {searchList('skirt')},
    //     blue :  () => {searchList('blue')},
    //     yellow : () => {searchList('yellow')},
    //     pink :  () => {searchList('pink')}
    // }

    /**
     * click button event
     */
    document.querySelector('.buttons').addEventListener('click', e =>{
    
        const action = e.target;
        searchList(action);

    }); 

    return {
        init : load 
    }

})();



