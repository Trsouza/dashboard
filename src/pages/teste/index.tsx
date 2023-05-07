import { useState } from "react";
import Input from "./input";

export function Index() {
  const [value, updateValue] = useState("");

  function updateInputValue(e: any) {
    e.persist();
    updateValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Input onChange={(e: any) => updateInputValue(e)} />
      <div>Input value: {value}</div>
    </div>
  );
}

