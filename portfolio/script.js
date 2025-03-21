function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const texts = ["DEVELOPER", "DESIGNER"];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;
    
    function typeWriter() {
      if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }
    
    function eraseText() {
      if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }
    typeWriter();
 });
