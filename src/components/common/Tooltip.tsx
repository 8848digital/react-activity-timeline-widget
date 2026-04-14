import React, { useState, useRef } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, align = "center" }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({
        top: rect.top - 6,
        left: align === "left" ? rect.left : align === "right" ? rect.right : rect.left + rect.width / 2,
      });
    }
    setVisible(true);
  };

  const getTransform = () => {
    if (align === "left") return "translateY(-100%)";
    if (align === "right") return "translate(-100%, -100%)";
    return "translate(-50%, -100%)";
  };

  return (
    <div ref={ref} className="atw-tooltip-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (
        <div className="atw-tooltip-content" style={{ top: pos.top, left: pos.left, transform: getTransform() }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
