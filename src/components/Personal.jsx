export default function Personal({ personal, handleChange }) {
  return (
    <>
      <h3>Personal Information</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={personal.name}
        onChange={(e) => handleChange({ ...personal, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={personal.email}
        onChange={(e) => handleChange({ ...personal, email: e.target.value })}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={personal.phone}
        onChange={(e) => handleChange({ ...personal, phone: e.target.value })}
      />
    </>
  );
}
