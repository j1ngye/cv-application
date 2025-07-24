export default function Practical({ practical, handleChange }) {
  return (
    <>
      <h3>Practical Information</h3>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        name="company"
        value={practical.company}
        onChange={(e) =>
          handleChange({ ...practical, company: e.target.value })
        }
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={practical.title}
        onChange={(e) => handleChange({ ...practical, title: e.target.value })}
      />
      <label htmlFor="responsibility">Responsibility</label>
      <textarea
        type="date"
        id="responsibility"
        name="responsibility"
        value={practical.responsibility}
        onChange={(e) =>
          handleChange({ ...practical, responsibility: e.target.value })
        }
      />
      <label htmlFor="date-in">Date In</label>
      <input
        type="date"
        id="date-in"
        name="date-in"
        value={practical.dateIn}
        onChange={(e) => handleChange({ ...practical, dateIn: e.target.value })}
      />
      <label htmlFor="date-out">Date Out</label>
      <input
        type="date"
        id="date-out"
        name="date-out"
        value={practical.dateOut}
        onChange={(e) =>
          handleChange({ ...practical, dateOut: e.target.value })
        }
      />
    </>
  );
}
