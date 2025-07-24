import { useState } from "react";
import Personal from "./Personal";
import Educational from "./Educational";
import Practical from "./Practical";
import Preview from "./Preview";
export default function Form() {
  const [personal, setPersonal] = useState({ name: "", email: "", phone: "" });
  const [educational, setEducational] = useState({
    school: "",
    major: "",
    dateIn: "",
    dateOut: "",
  });
  const [practical, setPractical] = useState({
    company: "",
    title: "",
    responsibility: "",
    dateIn: "",
    dateOut: "",
  });
  return (
    <>
      <form>
        <Personal personal={personal} handleChange={setPersonal} />
        <Educational educational={educational} handleChange={setEducational} />
        <Practical practical={practical} handleChange={setPractical} />
      </form>
      <Preview
        personal={personal}
        educational={educational}
        practical={practical}
      />
    </>
  );
}
