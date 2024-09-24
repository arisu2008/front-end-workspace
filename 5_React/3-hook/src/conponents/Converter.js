import { useState } from "react";
import Btn from "./Btn";
const Converter = () => {
  const [text, setText] = useState("Minutes => Hours");
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");

  const invert = () => {
    setBool(!bool);
    reset();
  };

  const change = (e) => {
    setNumber(e.target.value);
  };
  const reset = () => {
    setNumber("");
  };

  useEffect(() => {
    if (bool) {
      setText("Houres => Minutes");
    } else {
      setText("Minutes => Houres");
    }
  }, [bool]);
  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minute :{" "}
        <input
          type="number"
          placeholder="Minute"
          disabled={bool}
          value={bool ? number * 60 : number}
          onChange={change}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={Math.floor(number / 60)}
          onChange={change}
        />
      </p>
      <Btn click={reset} text="Reset" />
      <Btn click={invert} text="{text}" />
    </>
  );
};
