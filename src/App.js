import React, { useState, useEffect } from "react";
import "./styles.css";

import randomcolor from "randomcolor";

export default function App() {
  const [like, setLike] = useState(6);
  const [dislike, setDislike] = useState(1);
  const [likeColor, setLikeColor] = useState("");
  const [dislikeColor, setDislikeColor] = useState("");

  useEffect(() => {
    setLikeColor(
      randomcolor({
        luminosity: "dark"
      })
    );
  }, [like]);

  useEffect(() => {
    setDislikeColor(
      randomcolor({
        luminosity: "dark"
      })
    );
  }, [dislike]);

  return (
    <div className="App">
      <div className="header">facebook</div>
      <div className="post">
        <img
          alt="random"
          className="image"
          src="https://source.unsplash.com/random/400x200?nature"
        />
        <div className="row">
          <div>
            <button onClick={() => setLike(like + 1)}>
              <span role="img" aria-label="heart">
                👍
              </span>
            </button>
            <span className="num" style={{ color: likeColor }}>
              {like}
            </span>
          </div>
          <div>
            <button onClick={() => setDislike(dislike + 1)}>
              <span role="img" aria-label="heart">
                👎
              </span>
            </button>
            <span className="num" style={{ color: dislikeColor }}>
              {dislike}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
