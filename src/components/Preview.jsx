export default function Preview({ personal, educational, practical }) {
  return (
    <>
      <main className="preview">
        <section className="personal-section">
          <div className="name-div">{personal.name}</div>
          <div className="flex-container">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
          </div>
        </section>
        <section className="educational-section">
          <h2>Education</h2>
          <div className="flex-container">
            <div className="left">
              <div>{educational.major}</div>
              <div>{educational.school}</div>
            </div>
            <div>
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
                <div>{practical.company}</div>
                <div>{practical.title}</div>
              </div>
              <div className="responsibility-div">
                {practical.responsibility}
              </div>
            </div>
            <div>
              {practical.dateIn} {practical.dateIn && " - "}
              {practical.dateIn && practical.dateOut === ""
                ? "Present"
                : practical.dateOut}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
