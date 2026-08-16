import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <>
      <h1 className="TeamTitle">My Team Members</h1>
      <div className="MainParent">
        <ProfileCard name="John Doe" role="REACT Developer" src="/path/to/john-doe.jpg" />
        <ProfileCard name="Jane Smith" role="UX Designer" src="/path/to/jane-smith.jpg" />
        <ProfileCard name="Bob Johnson" role="Node.js Developer" src="/path/to/bob-johnson.jpg" />
        <ProfileCard name="Alice Williams" role="UI Developer" src="/path/to/alice-williams.jpg" />
        <ProfileCard name="Charlie Brown" role="Java Developer" src="/path/to/charlie-brown.jpg" />
      </div>
    </>
  );
}