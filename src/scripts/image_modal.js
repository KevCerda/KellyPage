const images = document.querySelectorAll(".images-container img");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#selected-image");
const downloadButton = document.querySelector("#download-button");
const closeButton = document.querySelector("#close-dialog-button");

images.forEach(image =>
{
    image.addEventListener("click", () =>
    {
        modalImage.src = image.src;
        modalImage.alt = image.alt;

        downloadButton.href = image.src;
        downloadButton.download = image.alt.replace(/\s+/g, '_') + ".png";

        setTimeout(() => {
            modal.showModal();
        }, 50);
    });
});

closeButton.addEventListener("click", (element) =>
{
    element.preventDefault();
    modal.close();
});