import { useEffect } from "react";
import "./CursorEffect.css";

const CursorEffect = () => {
  useEffect(() => {
    const addSparkle = (e) => {
      // Reduce density: only create 2-3 sparkles instead of 5
      const sparkleCount = Math.floor(Math.random()) + 1; 

      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Slightly reduce spread to keep sparkles closer to cursor
        const offsetX = (Math.random() - 0.5) * 15;
        const offsetY = (Math.random() - 0.5) * 15;

        sparkle.style.left = `${e.pageX + offsetX}px`;
        sparkle.style.top = `${e.pageY + offsetY}px`;
        sparkle.style.setProperty("--rotation", `${Math.random() * 360}deg`);
        sparkle.style.setProperty("--size", `${Math.random() * 6 + 4}px`); // 4px to 10px

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 1000); // Increase lifespan slightly for smoothness
      }
    };

    document.addEventListener("mousemove", addSparkle);

    return () => {
      document.removeEventListener("mousemove", addSparkle);
    };
  }, []);

  return null;
};

export default CursorEffect;
