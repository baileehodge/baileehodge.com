document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const images = [
        { src: "media/image1.png", alt: "Image 1", text: "Text for Image 1" },
        { src: "media/image2.png", alt: "Image 2", text: "Text for Image 2" },
        { src: "media/image3.png", alt: "Image 3", text: "Text for Image 3" }
    ];

    // TODO: comb through Canva for designs
    // TODO: comb through Adobe for designs
    // TODO: comb through Box for photography
    // TODO: comb through social media for photography
    // TODO: comb through album covers

    images.forEach((imageData) => {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = document.createElement("img");
        img.src = imageData.src;
        img.alt = imageData.alt;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const overlayText = document.createElement("div");
        overlayText.classList.add("overlay-text");
        overlayText.textContent = imageData.text;

        overlay.appendChild(overlayText);
        container.appendChild(img);
        container.appendChild(overlay);
        gallery.appendChild(container);
    });
});
