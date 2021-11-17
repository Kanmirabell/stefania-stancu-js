// iiife
12;

(function () {
  console.log('test');
})();

(() => {
  console.log('arrow function');
})();

(function (w) {
  console.log('am rulat si am pus pe window');
  w.myName = 'Tokyo';
});
