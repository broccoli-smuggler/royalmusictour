import React, {useEffect, useState} from "react";
import ChangingImageCanvas from "../components/changingImageCanvas";


const TerraformElement = () => {
  const [count, setCount] = useState(0);

  const handleKeyPress = (event) => {
    if (count !== 100) {
      setCount(count + 5);
    }
  };

  useEffect(() => {
    document.getElementById("focused").focus();
  });

  return (
    <div role="button" id="focused" tabIndex="-1" onKeyPress={handleKeyPress} >
      <ChangingImageCanvas image1="/terraformed-mars1.jpg" image2="/terraformed-mars2.jpg" percentage={count}/>
      <div className="text">
        Hello my terraforming friends!
      </div>
      <div className="text">
        Typing changes the world.. {count} %
      </div>
    </div>
  );
};


export default TerraformElement;
