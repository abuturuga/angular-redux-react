export default () => {
  return fetch('/api/dummy')
    .then(response => response.json())
};
