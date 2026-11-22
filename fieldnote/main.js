
const featured = document.querySelector("#featured")
const thumbs = document.querySelectorAll(".thumbnails button");

thumbs.forEach((button) => {
    button.addEventListener("click", () => {
        const photo = button.querySelector("img");
        featured.src = photo.src;
        featured.alt = photo.alt;
        document.querySelector('[aria-pressed=""true]')
            .setAttribute("aria-pressed", "false");
            button.setAttribute("aria-pressed", "true")
    })
})