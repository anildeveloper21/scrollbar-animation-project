const scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
    console.log("scrolly", window.scrollY);
    console.log("scrollheight", document.body.scrollHeight);
    console.log("innerheight", window.innerHeight);

    let percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollbar.style.width = percentage + '%';
})