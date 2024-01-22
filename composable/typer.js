export default function typer(dynamicText, words) {
// Variables to track the position and deletion status of the word
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    dynamicText.textContent = currentWord.substring(0, charIndex);
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
      // If condition is true, type the next character
      charIndex++;
      setTimeout(typeEffect, 50);
    } else if (isDeleting && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      // If word is deleted then switch to the next word
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
    }
  }
  typeEffect();
}