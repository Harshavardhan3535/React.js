// Array destructuring
const [first, second] = ["React", "Vite"];

// Skipping values
const [, onlySecond] = ["React", "Vite"];

// Swapping values
let a = 1, b = 2;
[a, b] = [b, a];

// Object destructuring + aliasing
const recipe = { title: "Masala Chai", servings: 2 };
const { title: recipeTitle, servings } = recipe;

// Nested destructuring
const data = { recipe: { title: "Filter Coffee", servings: 1 } };
const { recipe: { title: nestedTitle, servings: nestedServings } } = data;

// Function parameter destructuring (the props pattern from Day 5/6)
function RecipeCard({ title, servings }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <p>Serves: {servings}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Destructuring Demo</h1>

      <h2>Array destructuring</h2>
      <p>first: {first}, second: {second}</p>
      <p>skipped, onlySecond: {onlySecond}</p>
      <p>after swap — a: {a}, b: {b}</p>

      <h2>Object destructuring + aliasing</h2>
      <p>recipeTitle: {recipeTitle}, servings: {servings}</p>

      <h2>Nested destructuring</h2>
      <p>nestedTitle: {nestedTitle}, nestedServings: {nestedServings}</p>

      <h2>Function parameter destructuring</h2>
      <RecipeCard title="Masala Chai" servings={2} />
      <RecipeCard title="Filter Coffee" servings={1} />
    </div>
  );
}

export default App;