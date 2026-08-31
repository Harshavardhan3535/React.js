export function mockLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "test123") {
        resolve({ token: "mock-jwt-token-abc123" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
}