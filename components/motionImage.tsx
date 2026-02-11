import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function StoryImage() {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // smooth qilish uchun
  const smoothX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -15;
    const rY = ((x - centerX) / centerX) * 15;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 700 }}
      className="inline-block"
    >
      <motion.img
        src="/images/main.jpg"
        alt="entrance"
        className="object-contain rounded-2xl shadow-blue-700"
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
        }}
      />
    </div>
  );
}

export default StoryImage;
