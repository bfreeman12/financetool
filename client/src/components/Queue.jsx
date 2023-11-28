import React from "react";

const Queue = (data) => {
  const queueFiles = data.data;
  if (queueFiles.length === 0) {
    return null;
  }

  return (
    <div className="queue">
      <p>Up Next: </p>
      <ul className="queue-list">
        {queueFiles.map((item, index) => (
          <li key={index} style={{ opacity: 1 - index * 0.11 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Queue;
