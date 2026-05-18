import { useState } from "react";
export default function Virtualized({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    const newEndingIndex = newStartingIndex + Math.floor(height / itemHeight);
    setIndices([newStartingIndex, newEndingIndex]);
  };
  return (
    <div onScroll={handleScroll} style={{ height, width, overflow: "auto" }}>
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              key={item + index}
              style={{
                height: itemHeight,
                width: "100%",
                backgroundColor: "orange",
                borderTop: "5px solid grey",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
              }}
            >
              {"item " + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
