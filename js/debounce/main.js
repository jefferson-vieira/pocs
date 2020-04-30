'use strict';

function debounce(handler, timeout) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => handler(...args), timeout);
  };
}

(() => {
  const search = async (name) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`);
    return await response.json();
  };

  const handleInput = debounce(async ({ target: { value } }) => {
    const users = await search(value);
    console.log(users.map((user) => user.name));
  }, 1000);

  document.getElementById('search').addEventListener('input', handleInput);
})();
