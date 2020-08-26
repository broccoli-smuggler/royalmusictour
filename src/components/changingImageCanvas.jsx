import React, {useEffect, useRef} from "react";

const ChangingImageCanvas = ({image1, image2, percentage}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const createjs = require("createjs-module");

      const before = new createjs.Bitmap(image1);
      const after = new createjs.Bitmap(image2);
      const canvas = canvasRef.current;
      const stage = new createjs.Stage(canvas);

      stage.addChild(after);
      stage.addChild(before);

      composeBitmaps(createjs, before, after, percentage, before.image.height, before.image.width);

      after.image.onload = function() {
        canvas.width = after.image.width;
        canvas.height = after.image.height;
        stage.update();
      };

      before.image.onload = function() {
        stage.update();
      };
    }
  });

  const composeBitmaps = (createjs, before, after, percentage, height, width) => {
    if (percentage === 0) return;

    const alpha_offset_b = -255 * (1.0/(101 / (percentage+1)));
    const alpha_offset_a = -255 - alpha_offset_b;

    before.filters = [new createjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, alpha_offset_b)];
    before.cache(0, 0, width, height);

    after.filters = [new createjs.ColorFilter(1, 1, 1, 1, 0, 0, 0, alpha_offset_a)];
    after.cache(0, 0, width, height);
  };

  return(<canvas ref={canvasRef}/>);
};

export default ChangingImageCanvas;
