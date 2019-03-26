if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i))
 {

document.body.style.backgroundImage = "url('../assets/background2.jpg')";
document.body.style.backgroundAttachment = "scroll";

 }



// let pic1 = document.getElementById('cut1image');
// let pic2 = document.getElementById('cut2image');
// let pic3 = document.getElementById('cut3image');
// let pic4 = document.getElementById('cut4image');

//  let cutPictures = {
//      1: 'assets/cuts/1.jpg',
//      2: 'assets/cuts/2.jpg',
//      3: 'assets/cuts/3.jpg',
//      4: 'assets/cuts/4.jpg',
//      5: 'assets/cuts/5.jpg',
//      6: 'assets/cuts/6.jpg',
//      7: 'assets/cuts/7.jpg',
//      8: 'assets/cuts/8.jpg',
//      9: 'assets/cuts/9.jpg',
//      10: 'assets/cuts/10.jpg',
//      11: 'assets/cuts/11.jpg',
//      12: 'assets/cuts/12.jpg'
//  }


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// let randnum1 = getRndInteger(1,3)
// let randnum2 = getRndInteger(4,6)
// let randnum3 = getRndInteger(7,8)
// let randnum4 = getRndInteger(10,12)

// pic1.src = cutPictures[randnum1];
// pic2.src = cutPictures[randnum2];
// pic3.src = cutPictures[randnum3];
// pic4.src = cutPictures[randnum4];