var counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, contactCounter = 0, name;
function contact() { "use strict"; contactCounter += 1;
    if (contactCounter % 2 === 1) {
        document.getElementById("contact").innerHTML = "<P><img src='img/Location.ico' width='30px' height='30px'> الموقع : <a href='https://goo.gl/maps/C6No6BxxBuE5zt7P8' target='_blank'>الجيزة</a><br><br><img src='img/Mobile.ico' width='35px' height='30px'>  موبايل : <a href='tel:+201220452267'>012220452267</a><br><br><img src='img/Email.ico' width='30px' height='30px'> الايميل :<a href='mailto:eng.micheal_fawzy@yahoo.com'>eng.micheal_fawzy@yahoo.com</a><br><br> <img src='img/Linkedin.ico' width='30px' height='30px'> لينكد ان : <a href='https://www.linkedin.com/in/micheal-fawzy/' target='_blank'>/micheal-fawzy</a><br></p>";
    } else {document.getElementById("contact").innerHTML = ""; }
                   }
function videoPlayer(num) {
    this.num = num;
    var url;
    switch (num) {

    case 1:
        name = "video_player1";
        counter1 += 1;
        if (counter1 % 2 === 1) {
            url = '<iframe width="800" height="480" src="https://www.youtube.com/embed/videoseries?list=PLsy3bLFJfVBApxNosrOMysE79RrIatdfG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            document.getElementById("button1").innerHTML = "<b>ايقاف</b>";
        } else {url = "";
               document.getElementById("button1").innerHTML = "<b>تشغيل</b>"; }
        break;

    case 2:
        name = "video_player2";
        counter2 += 1;
        if (counter2 % 2 === 1) {
            url = '<iframe width="800" height="480" src="https://www.youtube.com/embed/videoseries?list=PLsy3bLFJfVBAsiSvuEJnio1us3rZPUvMp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            document.getElementById("button2").innerHTML = "<b>ايقاف</b>";
        } else {url = "";
               document.getElementById("button2").innerHTML = "<b>تشغيل</b>"; }
        break;

    }
    document.getElementById(name).innerHTML = url;
}
function galleryViewer(num) {
    this.num = num;
    var url;


    switch (num) {
    // <iframe src="https://albumizr.com/a/iW-e" scrolling="no" frameborder="0" allowfullscreen width="800" height="480"></iframe>
    case 1:
        name = "gallery_viewer1";
        counter3 += 1;
        if (counter3 % 2 === 1) {
            url = '<iframe src="https://albumizr.com/a/3CKb" scrolling="no" frameborder="0" allowfullscreen width="700" height="400"></iframe>';
            document.getElementById("button3").innerHTML = "<b>اخفاء</b>";
        } else {url = "";
               document.getElementById("button3").innerHTML = "<b>عرض</b>"; }
        break;

    case 2:
        name = "gallery_viewer2";
        counter4 += 1;
        if (counter4 % 2 === 1) {
            url = '<iframe src="https://albumizr.com/a/S76o" scrolling="no" frameborder="0" allowfullscreen width="800" height="480"></iframe>';
            document.getElementById("button4").innerHTML = "<b>اخفاء</b>";
        } else {url = "";
               document.getElementById("button4").innerHTML = "<b>عرض</b>"; }
        break;

    }
    document.getElementById(name).innerHTML = url;
}
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
     var digits = document.querySelectorAll(".items , .items1");
    var digit;
    for (digit of digits) {
       digit.classList.toggle("dark-item");}
    document.getElementById("header").classList.toggle("dark-header");
    document.getElementById("nav").classList.toggle("dark-nav");
   // document.getElementById("haeder").classList.add("mystyle");

}
    
function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
     var digits = document.querySelectorAll(".items , .items1");
    var digit;
    for (digit of digits) {
       digit.classList.toggle("dark-item");}
    document.getElementById("header").classList.toggle("dark-header");
    document.getElementById("nav").classList.toggle("dark-nav");
   // document.getElementById("haeder").classList.add("mystyle");

}
    
function DarkMode1() {
    if (document.getElementById("bubble").checked) {
        DarkMode();
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Micheal-Fawzy/Cv/main/img/site-background%5B1%5D.jpg')";
    } else {
        DarkMode();
        document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Black-wallpaper-HD-dark.jpg')";
    }
}

