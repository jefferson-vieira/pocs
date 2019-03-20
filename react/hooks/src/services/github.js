export function getRepositories(user) {
  return fetch(`https://api.github.com/users/${user}/repos`).then(resp =>
    resp.json()
  );
}
