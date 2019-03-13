//Fade in quote
$(document).ready(function () {
    $('#quote').fadeIn(3000).removeClass('hidden');
});

//Random Oakley Selector

let randomOak = '';
function randomOakResponse() { // Function generates a random number and then assigns a response to randomOak based on that number
    let randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
        case 0:
          randomOak = "<img class='randompic' src ='images/profile.jpg'>";
            break;
        case 1:
          randomOak = "<img class='randompic' src ='images/oak1.jpg'>";
            break;
        case 2:
            randomOak = "<img class='randompic' src ='images/oak2.jpg'>";
            break;
        case 3:
            randomOak = "<img class='randompic' src ='images/oak3.jpg'>";
            break;
        case 4:
            randomOak = "<img class='randompic' src ='images/oak4.jpg'>";
            break;
        case 5:
            randomOak = "<img class='randompic' src ='images/oak5.jpg'>";
            break;
        case 6:
            randomOak = "<img class='randompic' src ='images/oak6.jpg'>";
            break;
        case 7:
            randomOak = "<img class='randompic' src ='images/oak7.jpg'>";
            break;
        case 8:
            randomOak = "<img class='randompic' src ='images/oak8.jpg'>";
            break;
        case 9:
            randomOak = "<img class='randompic' src ='images/oak9.jpg'>";
            break;
        default:
            randomOak = "<img class='randompic' src ='images/profile.jpg'>";
    }
    return randomOak;
}
function pick () {
    randomOakResponse();
    document.getElementById('randompic').innerHTML = randomOak;
}
document.getElementById('clickMe').addEventListener('click', pick);
