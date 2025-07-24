export default function Practical() {
  return (
    <>
      <h3>Practical Information</h3>
      <label htmlFor="company">Company</label>
      <input type="text" id="company" name="company" />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="responsibility">Responsibility</label>
      <textarea type="date" id="responsibility" name="responsibility" />
      <label htmlFor="date-in">Date In</label>
      <input type="date" id="date-in" name="date-in" />
      <label htmlFor="date-out">Date Out</label>
      <input type="date" id="date-out" name="date-out" />
    </>
  );
}
