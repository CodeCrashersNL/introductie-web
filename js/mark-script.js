const currentDate = new Date();
let weekDay = currentDate.getDay();
let monthDay = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

switch (weekDay) {
    case 1:
        weekDay = 'maandag';
        break;
    case 2:
        weekDay = 'dinsdag';
        break;
    case 3:
        weekDay = 'woensdag';
        break;
    case 4:
        weekDay = 'donderdag';
        break;
    case 5:
        weekDay = 'vrijdag';
        break;
    case 6:
        weekDay = 'zaterdag';
        break;
    case 7:
        weekDay = 'zondag';
        break;
    default:
        weekDay = 'onbekend';
}

switch (month) {
    case 1:
        month = 'januari';
        break;
    case 2:
        month = 'februari';
        break;
    case 3:
        month = 'maart';
        break;
    case 4:
        month = 'april';
        break;
    case 5:
        month = 'mei';
        break;
    case 6:
        month = 'juni';
        break;
    case 7:
        month = 'juli';
        break;
    case 8:
        month = 'augustus';
        break;
    case 9:
        month = 'september';
        break;
    case 10:
        month = 'oktober';
        break;
    case 11:
        month = 'november';
        break;
    case 12:
        month = 'december';
        break;
    default:
        month = 'onbekend';
}

const dateString = `${weekDay}, ${monthDay} ${month} ${year}`;
$('#datum').text(dateString);

$('button').click(function () {
    $('.spoiler-text').slideToggle(500);
    if ($(this).text() === 'Verbergen') {
        $(this).text('Terughalen');
    } else {
        $(this).text('Verbergen');
    }
});

$('img').click(function () {
    $(this).toggleClass('alt-image');
});

$('.icon').click(function () {
    if (confirm('Weet je het zeker?\nJe krijgt hier mogelijk spijt van.')) {
        $('body').addClass('aaaaah');
        $('img')
            .attr('src', './images/haha.jpg')
            .css({ 'position': 'fixed', 'top': '0', 'left': '0', 'height': '100%', 'width': '100%' });
        $('a').attr('href', './images/wallpaper.jpg');
        $('#datum').text('tijd voor Nicolas Cage');
        $('.list-info').text('Beste films ooit:');
        $('li:nth-of-type(1)').text('Face/Off');
        $('li:nth-of-type(2)').text('Vampire\'s Kiss');
        $('li:nth-of-type(3)').text('Ghost Rider');
        $('li:nth-of-type(4)').text('Honeymoon in Vegas');
        $('li:nth-of-type(5)').text('National Treasure');
        $('li:nth-of-type(6)').text('Con Air');
        $('li:nth-of-type(7)').text('Willy\'s Wonderland');
        $('li:nth-of-type(8)').text('The Wicker Man');
        $('li:nth-of-type(9)').text('Moonstruck');
        $('li:nth-of-type(10)').text('Color Out of Space');
        $('.icon')
            .text('🤡')
            .off('click');
        $('.name').text('Nick Cage');
        
        let mySound = new Audio('./images/cat-laugh-meme-1.mp3');
        mySound.play();
    }
});

$('.name').click(function () {
    const name = prompt('Wat is je naam', 'Nick Cage');
    $(this).text(name);
});
