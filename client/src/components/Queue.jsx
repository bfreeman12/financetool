import React from "react";
import "../styles/forms.css";
const Queue = (data) => {
  const queueFiles = data.data;

  if (queueFiles.length === 0) {
    return null;
  }

  return (
    <div className="queue">
      <p>All Forms: </p>
      <ul className="queue-list">
        {queueFiles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Queue;
