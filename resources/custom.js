// Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbwrq0S5rX4CJLwUBbs3n_znOTM2cb7tkctnUCTBOmr_44xQZhAZkLLuNvOM6_klL-OEIA/exec"
var form = document.forms['google-sheet'];
form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST' , body: new FormData(form)})
    .then(_response => alert("Thanks for Connecting us! We will contact you soon."))
    .catch(error => console.error('Error!',error.message))
})


// Scroll to Top


$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000)
    }
);

// AOS
AOS.init();