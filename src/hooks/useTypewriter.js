import { useEffect, useState } from "react";

const useTypewriter = (
  roles,
  typingSpeed = 50,
  deletingSpeed = 30,
  pause = 1500
) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[index].text;
    let charIndex = isDeleting ? fullText.length : 0;

    const typeForward = () => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
        setTimeout(typeForward, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pause);
      }
    };

    const deleteBackward = () => {
      if (charIndex >= 0) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex--;
        setTimeout(deleteBackward, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    isDeleting ? deleteBackward() : typeForward();
  }, [index, isDeleting]);

  return {
    text: displayedText,
    emoji: roles[index].emoji,
  };
};

export default useTypewriter;
