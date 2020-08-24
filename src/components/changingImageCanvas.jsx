import React, {useEffect, useRef} from "react";

import createjs from 'createjs-module'

const ChangingImageCanvas = ({image1, image2, percentage}) => {
  const canvasRef = useRef(null);
  const before = new createjs.Bitmap(image1);
  const after = new createjs.Bitmap(image2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = new createjs.Stage(canvas);

    before.image.onload = function() { stage.update(); };
    after.image.onload = function() { stage.update(); };

    stage.addChild(getResultBitmap(percentage));
    stage.update();
  });

  const getResultBitmap = (percentage) => {
    if (percentage > 50)
      return before;
    else
      return after;
  };

  return(<canvas ref={canvasRef}/>);
};

export default ChangingImageCanvas;
