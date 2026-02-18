export function login(username) {
  localStorage.setItem("user", username);
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser() {
  return localStorage.getItem("user");
}

export function isLoggedIn() {
  return !!localStorage.getItem("user");
}