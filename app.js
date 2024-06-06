const typeWriter = document.querySelector('.typewriter-effect  .text');
const text ="< I'm Prem >";
typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

document.addEventListener('scroll', function() {
    const navbarText = document.querySelector('.nav-Title_p');
    const section1 = document.querySelector(".intro_section").offsetTop;
    // console.log(section1);
    var section2 = document.querySelector(".about_me").offsetTop;
    // console.log(section2);
    section2=section2-3;
    var section3 = document.querySelector(".highlighted_project").offsetTop;
    section3=section3-3;
    var section4=document.querySelector(".contact").offsetTop;
    // console.log("3--",section3);
    var scrollPosition = window.scrollY;
    section4=section4-20;
    // scrollPosition= scrollPosition-5;
    // console.log("scroll--",scrollPosition--);
    if(scrollPosition >= section4){
        navbarText.textContent = 'contact';
    }
    else if (scrollPosition >= section3) {
        navbarText.textContent = 'Project';
    } else if (scrollPosition >= section2) {
        navbarText.textContent = 'Skills';
    } else if (scrollPosition >= section1) {
        navbarText.textContent = 'About';
    } else {
        navbarText.textContent = 'PREM';
    }
});
var sliders = document.querySelectorAll('.slider');
sliders.forEach(function(slider) {
    var imgs = slider.querySelectorAll('img');
    var dots = slider.nextElementSibling.querySelectorAll('.dot'); // Select dots relative to the slider
    var currentImg = 0;
    const interval = 3000;

    function changeSlide(n) {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0;
            dots[i].classList.remove('active');
        }

        currentImg = n !== undefined ? n : (currentImg + 1) % imgs.length;

        imgs[currentImg].style.opacity = 1;
        dots[currentImg].classList.add('active');
    }

    var timer = setInterval(changeSlide, interval);

    function handleDotClick(n) {
        clearInterval(timer);
        changeSlide(n);
        timer = setInterval(changeSlide, interval);
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            handleDotClick(i);
        });
    }
});
///
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projects.forEach(project => {
        observer.observe(project);
    });
});

function ani(){
    document.getElementById('plane').className ='animation';
}
function anitwo(){
    document.getElementById('bg').className ='animation2';
}
var btn=document.querySelector(".btn_plane");
btn.addEventListener("click",()=>{
   var s= validation();
   if (s==-1) {
    
}else{
    document.getElementById('plane').className ='animation';
    // var btnplane=document.querySelector("#plane");
    // btnplane.src='icons8-done-48.png';
}
});




function send() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    
    var body="Name :"+name+"<br/> Email :"+email+"<br/> Message :"+message;
    
    console.log(body);
    Email.send({
       Host : "smtp.elasticemail.com",
       Username : "premkamble301@gmail.com",
       Password : "0CBCD1772E04235181FD371095166146A6F1",
    //    premkamble301@gmail.com
       To : 'pk5988897@gmail.com',
       From : "premkamble301@gmail.com",
       Subject : "Message ",
       Body : body
      
        }).then(
       message => {
        if (message=='OK') {
            swal("Done", "Your data successfully received", "success");
            document.getElementById("name").value='';
            document.getElementById("email").value='';
         
            document.getElementById("message").value='';
        }
        else{
            swal("Something wrong !", "Your data is not received", "error");
        }
       }
       
       );
    return 1;
}


 function validation(){
    
    var email =document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        // Prevent the form from submitting
        return -1;
    }

   return send();
};
const letbtn=document.querySelector(".letsgo_btn_btn");
letbtn.addEventListener("click",()=>{
    console.log("hello");
    window.location.replace("https://www.linkedin.com/in/prem-kamble-0b559827b/");
})











// 
// var imgs = document.querySelectorAll('.slider img');
// var dots = document.querySelectorAll('.dot');
// var currentImg = 0; // index of the first image 
// const interval = 3000; // duration(speed) of the slide   

// function changeSlide(n) {
//     for (var i = 0; i < imgs.length; i++) { // reset
//         imgs[i].style.opacity = 0;
//         dots[i].className = dots[i].className.replace(' active', '');
//     }

//     currentImg = n !== undefined ? n : (currentImg + 1) % imgs.length;

//     imgs[currentImg].style.opacity = 1;
//     dots[currentImg].className += ' active';
// }

// var timer = setInterval(changeSlide, interval);

// function handleDotClick(n) {
//     clearInterval(timer);
//     changeSlide(n);
//     timer = setInterval(changeSlide, interval);
// }

// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', function() {
//         handleDotClick(i);
//     });
// }