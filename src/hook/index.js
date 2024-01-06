import { useEffect } from "react";
import { useHover } from "./useHover";
const HookBase = () => {
  const [ref, isHovering] = useHover();

  useEffect(() => {
    if (isHovering) {
      alert("Hover!");
    }
  }, [isHovering]);

  return <div ref={ref}>Hover Me</div>;
};

export default HookBase;
