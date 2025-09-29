document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".buttons-container a");

    function randomRotation()
    {
        const rotations = ["rotate-3", "rotate-6"];
        let rotation = rotations[Math.floor(Math.random() * 2)];
        let isNegative = Math.floor(Math.random() * 2);
        if(isNegative)
            return "-" + rotation;
        else
            return rotation;
    }

    buttons.forEach(button => 
    {
        let rotation = randomRotation();
        button.classList.add("md:hover:" + rotation);
    });
});

