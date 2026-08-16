import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div className="container">
      <div className="profile-card">
        <img className="profile-img" src={props.src} alt="Profile" />
        <h2 className="profile-name">{props.name}</h2>
        <h3 className="profile-title">{props.role}</h3>
        <p className="profile-bio">Passionate about creating amazing web experiences</p>
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noreferrer"></a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noreferrer"></a>
          <a href="https://instagram.com/johndoe" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    </div>
  );
}