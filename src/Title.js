import { useState, useEffect } from "react";

const Title = ({ title }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(title);
  }, [title]);

  return (
    <div className="title">
      <h2>{text}</h2>
    </div>
  );
};

export default Title;