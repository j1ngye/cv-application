export default function Preview({
  personal,
  educational,
  practical,
  handleEdit,
  isShown,
}) {
  return (
    <>
      <main className="preview">
        <section className="personal-section">
          <div className="name-div heavy">{personal.name}</div>
          <div className="flex-container">
            <div className="light">{personal.email}</div>
            <div className="light">{personal.phone}</div>
          </div>
        </section>
        <section className="educational-section">
          <h2>Education</h2>
          <div className="flex-container">
            <div className="left">
              <div className="heavy">{educational.major}</div>
              <div className="light">{educational.school}</div>
            </div>
            <div className="light">
              {educational.dateIn} {educational.dateIn && " - "}
              {educational.dateIn && educational.dateOut === ""
                ? "Present"
                : educational.dateOut}
            </div>
          </div>
        </section>
        <section className="practical-section">
          <h2>Experience</h2>
          <div className="flex-container">
            <div className="left">
              <div>
                <div className="heavy">{practical.company}</div>
                <div className="light">{practical.title}</div>
              </div>
              <div className="responsibility-div light">
                {practical.responsibility}
              </div>
            </div>
            <div className="light">
              {practical.dateIn} {practical.dateIn && " - "}
              {practical.dateIn && practical.dateOut === ""
                ? "Present"
                : practical.dateOut}
            </div>
          </div>
        </section>
        <button
          onClick={handleEdit}
          className={!isShown ? "" : "hide"}
          id="edit-btn"
        >
          Edit
        </button>
      </main>
    </>
  );
}
