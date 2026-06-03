import { useState, useRef, useEffect } from "react";

export default function ProgressBar() {
  const [bars, setBars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const idRef = useRef(0);

  const startTimerRef = useRef(null);
  const doneTimerRef = useRef(null);

  const handleAdd = () => {
    setBars((prev) => [...prev, { id: ++idRef.current, progress: 0 }]);
  };

  useEffect(() => {
    if (activeIndex >= bars.length) return;
    if (bars[activeIndex].progress === 100) return;

    startTimerRef.current = setTimeout(() => {
      setBars((prev) => {
        return prev.map((bar, idx) => {
          return idx === activeIndex ? { ...bar, progress: 100 } : bar;
        });
      });
    }, 50);

    doneTimerRef.current = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2050);

    return () => {
      clearTimeout(startTimerRef.current);
      clearTimeout(doneTimerRef.current);
    };
  }, [bars.length]);

  return (
    <div>
      <div className="btnContainer">
        <button onClick={handleAdd} style={{ marginBottom: "30px" }}>
          Add Bar
        </button>
      </div>
      <div className="outerBar">
        {bars.map((bar) => {
          return (
            <div key={bar.id} className="bar-outer">
              <div
                className="bar-inner"
                style={{
                  width: `${bar.progress}%`,
                  transition: "width 2s linear",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
