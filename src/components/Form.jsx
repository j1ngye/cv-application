import { use, useState } from "react";
import Personal from "./Personal";
import Educational from "./Educational";
import Practical from "./Practical";
import Preview from "./Preview";
export default function Form() {
  const [personal, setPersonal] = useState({
    name: "John Doe",
    email: "johndoe@hello.com",
    phone: "1-39387680",
  });
  const [educational, setEducational] = useState({
    school: "Harvard University",
    major: "Computer Science",
    dateIn: "2020-07-25",
    dateOut: "2024-07-25",
  });
  const [practical, setPractical] = useState({
    company: "Google",
    title: "Frontend Developer",
    responsibility:
      "building and maintaining user interfaces for Google's web applications. This involves translating design wireframes into functional, user-friendly interfaces using technologies like HTML, CSS, and JavaScript.",
    dateIn: "2025-01-01",
    dateOut: "2025-07-25",
  });
  const [isShown, setIsShown] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    setIsShown((prev) => !prev);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={!isShown ? "hide" : ""}>
        <Personal personal={personal} handleChange={setPersonal} />
        <Educational educational={educational} handleChange={setEducational} />
        <Practical practical={practical} handleChange={setPractical} />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <Preview
        personal={personal}
        educational={educational}
        practical={practical}
        handleEdit={setIsShown}
        isShown={isShown}
      />
    </>
  );
}
