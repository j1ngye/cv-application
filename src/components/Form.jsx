import { useState } from "react";
import Personal from "./Personal";
import Educational from "./Educational";
import Practical from "./Practical";
import Preview from "./Preview";
export default function Form() {
  return (
    <>
      <form>
        <Personal />
        <Educational />
        <Practical />
      </form>
      <Preview />
    </>
  );
}
