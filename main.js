

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0px";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzjNOBvJ2XfVx9kpOGkHkre7X872p_CFogCAuPHLbC9txA1eUYYdmy9ouC24Cx9EahZ/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// <!-- Dark mode to normal mode js -->


const body = document.querySelector('body');
const button = document.querySelector('.button');
const icon = document.querySelector('.btn_icon');

// function to store dark and light mode in local storage


function store(value) {
    localStorage.setItem('darkmode', value);
}


// <!-- function to store dark and light mode in local storage end-->

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if (darkmode == 'false') {
        icon.classList.add('fa-sun');
    }
}

load();

button.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');
    // saving true false
    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
        icon.classList.add('fa-moon')
        icon.classList.remove('fa-sun')

    } else {
        icon.classList.add('fa-sun')
        icon.classList.remove('fa-moon')
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)

});