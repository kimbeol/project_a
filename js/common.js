
// 1.
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
    
    // html
    itemsEle.append(eleHtml);

}

window.onload = function() {
    
    // 목록
    read();

}
