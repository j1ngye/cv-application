export default function Preview({ personal, educational, practical }) {
  return (
    <>
      <main className="preview">
        <section className="personal-section">
          <div>{personal.name}</div>
          <div>{personal.email}</div>
          <div>{personal.phone}</div>
        </section>
        <section className="educational-section">
          <div>{educational.school}</div>
          <div>{educational.major}</div>
          <div>
            {educational.dateIn} {educational.dateIn && "--"}
            {educational.dateIn && educational.dateOut === ""
              ? "Present"
              : educational.dateOut}
          </div>
        </section>
        <section className="practical-section">
          <div>{practical.ccompany}</div>
          <div>{practical.title}</div>
          <div>{practical.responsibility}</div>
          <div>
            {practical.dateIn} {practical.dateIn && "--"}
            {practical.dateIn && practical.dateOut === ""
              ? "Present"
              : practical.dateOut}
          </div>
        </section>
      </main>
    </>
  );
}
