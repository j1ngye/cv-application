export default function Educational({ educational, handleChange }) {
  return (
    <>
      <h3>Educational Information</h3>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        name="school"
        value={educational.school}
        onChange={(e) =>
          handleChange({ ...educational, school: e.target.value })
        }
      />
      <label htmlFor="major">Major</label>
      <input
        type="text"
        id="major"
        name="major"
        value={educational.major}
        onChange={(e) =>
          handleChange({ ...educational, major: e.target.value })
        }
      />
      <label htmlFor="date-in">Date In</label>
      <input
        type="date"
        id="date-in"
        name="date-in"
        value={educational.dateIn}
        onChange={(e) =>
          handleChange({ ...educational, dateIn: e.target.value })
        }
      />
      <label htmlFor="date-out">Date Out</label>
      <input
        type="date"
        id="date-out"
        name="date-out"
        value={educational.dateOut}
        onChange={(e) =>
          handleChange({ ...educational, dateOut: e.target.value })
        }
      />
    </>
  );
}
