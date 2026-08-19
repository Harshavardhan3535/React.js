const recipes = [
  { id: 1, title: "Masala Chai", difficulty: "Easy" },
  { id: 2, title: "Filter Coffee", difficulty: "Medium" },
  { id: 3, title: "Butter Chicken", difficulty: "Hard" },
];

function RecipeCard({ title, difficulty }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      margin: "10px",
      width: "200px"
    }}>
      <h3>{title}</h3>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
      <h1 style={{ width: "100%" }}>Rendering Arrays with .map()</h1>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          difficulty={recipe.difficulty}
        />
      ))}
    </div>
  );
}

export default App;