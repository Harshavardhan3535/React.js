function RecipeCard() {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
      borderRadius: "12px",
      padding: "20px",
      width: "300px",
      color: "#3a2a1a"
    }}>
      <h2>Masala Chai Recipe</h2>
      <p>Prep Time: 5 minutes | Cook Time: 10 minutes</p>
      <hr />
      <p><strong>Serves:</strong> 2 people</p>
      <p><strong>Difficulty:</strong> Easy</p>
      <p><strong>Type:</strong> Beverage</p>
      <p>☕</p>
      <p><em>Traditional HARSHIT Tea™ Recipe since 1998</em></p>
    </div>
  );
}

export default RecipeCard;