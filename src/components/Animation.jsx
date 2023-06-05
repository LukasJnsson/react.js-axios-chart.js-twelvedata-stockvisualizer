
import React from 'react'


export default function Animation(props) {
  const { count } = props;


  /**
   * Function that creates <span> elements which contains animations
   * @param {Number} count - The number of animations based on the count prop
   * @returns {Array} - The array with <span> elements
   */
  function createAnimation(count) {
    const spanArr = [];
    for (let i = 0; i < count; i++) {
      spanArr.push(<span key={i}></span>);
    };
    return spanArr;
  };


  return (
    <div>
        {createAnimation(count).map((span) => span)}
    </div>
  );
};