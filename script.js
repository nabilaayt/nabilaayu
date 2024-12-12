const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");
const scriptURL = 'https://script.google.com/macros/sAKfycbyWGbMj-q7d3XL25D_5v-EMBCOskJxYGL_dV9twCMjcv39ynuwnkSDEeR9sv1FJXGMtXQ/exec';

const form = document.forms['contact']

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