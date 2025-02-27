// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector(".typing-text");
    
    if (!textElement) {
        console.error("Could not find element with class 'typing-text'");
        return;
    }

    const typed = new Typed(textElement, {
        strings: ["Video Editor", "Web Developer", "Java Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        smartBackspace: true
    });
});