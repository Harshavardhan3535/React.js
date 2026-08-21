import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="form-container">
      <h2>USER FORM</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          {/* Regex strips digits from the name field as the user types */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value.replace(/[0-9]/, ""))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="subscribe" checked={isSubscribed} onChange={(e) => setIsSubscribed(e.target.checked)} />
          <label htmlFor="subscribe">Subscribe</label>
        </div>
      </form>
      <div className="preview">
        <h2>Live Preview</h2>
        <p>Your Name: {name}</p>
        <p>Your Email: {email}</p>
        <p>Your Age: {age}</p>
        <p>Subscribed: {isSubscribed ? "YES" : "NO"}</p>
      </div>
    </div>
  );
};

export default UserForm;