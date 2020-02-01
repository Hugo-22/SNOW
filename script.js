        let form = document.getElementById("form");
        let name = document.getElementById("name");
        let mail = document.getElementById("email");
        let title = document.getElementById("title");
        let message = document.getElementById("comment");
        let submit = document.getElementById("submit");
        var regularExp = /\S+@\S+\.\S+/;

        function check() {
            if (name.value !== "" && regularExp.test(mail.value) && title.value !== "" && comment.value !== "") {
                submit.disabled = false;
                submit.classList.add("blabla");
            } else {
                submit.disabled = true;
                // submit.classList.add("style-btn");
            }
        }


        form.addEventListener('submit', function(event) {
            event.preventDefault();
            title.value = "" ;
            comment.value = "";
            name.value = "";
            mail.value = "";
          
        })

let linkstyle1 = document.querySelector('#link-style1');
let linkstyle2 = document.querySelector('#link-style2');
let linkstyle3 = document.querySelector('#link-style3');
let linkstyle4 = document.querySelector('#link-style4');
let bgc = document.querySelector('.bgc');
let inputCheck = document.querySelector('#check');

linkstyle1.addEventListener('click', function() {
    inputCheck.checked = false;
})
linkstyle2.addEventListener('click', function() {
    inputCheck.checked = false;
})
linkstyle3.addEventListener('click', function() {
    inputCheck.checked = false;
})
linkstyle4.addEventListener('click', function() {
    inputCheck.checked = false;
})

window.addEventListener('scroll', function() {
    let about = document.querySelector("#about");
    let aboutPosition = about.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/2;

    if (aboutPosition < screenPosition) {
        about.classList.add('scrolling-opacity');
    } else {
        about.classList.remove("scrolling-opacity");
    }

    let col = document.getElementsByClassName('scale-anim');
    let colArray = Array.from(col);
    console.log(col, colArray);
    
    let section2 = document.querySelector(".section-2")
    let section2Psition = section2.getBoundingClientRect().top;


    if (section2Psition < screenPosition) {
        colArray.forEach(element => {
            element.classList.add("scale");
        });
       
    } else {
        colArray.forEach(element => {
            element.classList.remove("scale");
        });
       
    }
    
})