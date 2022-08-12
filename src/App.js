import { useEffect, useState, useMemo } from "react";
import Color from "./Color";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import _ from "lodash";

function App() {
  const [brightness, setBrightness] = useState(50);

  const changeBri = (value) => {
    setBrightness(value);
    console.log(value);
  };

  const throttle = useMemo(() => _.throttle(changeBri, 100), []);

  useEffect(() => {
    fetch(
      "http://192.168.8.104/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/lights/56/state",
      {
        method: "PUT",
        body: JSON.stringify({
          bri: brightness,
        }),
      }
    );
  }, [brightness]);

  useEffect(() => {
    fetch(
      "http://192.168.8.104/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/lights/56/state",
      {
        method: "PUT",
        body: JSON.stringify({
          xy: [0.3227, 0.329],
        }),
      }
    );
  }, []);

  return (
    <div className="App">
      <Color r="0" g="255" b="255" />
      <Color r="148" g="0" b="211" />
      <Slider defaultValue={brightness} onChange={throttle} />
    </div>
  );
}

export default App;
