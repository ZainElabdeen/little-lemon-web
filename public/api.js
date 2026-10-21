// Little Lemon booking API, vendored from the Coursera capstone starter:
// https://raw.githubusercontent.com/courseraap/capstone/main/api.js
//
// Two notes vs. the original file:
// - GitHub serves raw files as text/plain with X-Content-Type-Options: nosniff,
//   so a <script src> pointing at the raw URL is refused by browsers. Keeping
//   a local copy in public/ lets the script tag actually execute.
// - The original declares fetchAPI/submitAPI with `const`, which does NOT
//   attach them to window in a classic script. Assigning them to window makes
//   window.fetchAPI / window.submitAPI available to the React app (and to the
//   unit tests, which mock them).

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

window.fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

window.submitAPI = function (formData) {
  return true;
};
