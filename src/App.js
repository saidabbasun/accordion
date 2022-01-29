import React, { useState } from "react";
import Accordion from "./Accordion";

export default function App() {
  const [active, setActive] = useState("Title3");
  return (
    <div>
      <Accordion title="Title1" active={active} setActive={setActive} />
      <Accordion title="Title2" active={active} setActive={setActive} />
      <Accordion title="Title3" active={active} setActive={setActive} />
      <Accordion title="Title4" active={active} setActive={setActive} />
    </div>
  );
}
