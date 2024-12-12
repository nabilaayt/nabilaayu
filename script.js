const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxi5-an9Wqd8JNu8f7M25FtulDnCJ9VLmcU5e36_ocKD7J-ZMM4F2cR2V6hAyNhQ4elJA/exec';

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
});

menuicon.addEventListener("click", () => {
    menulist.classList.toggle("hidden");
});