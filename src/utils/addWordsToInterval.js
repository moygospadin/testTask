function addWordsToInterval(str) {
  const arr = str.split('-');
  arr[0] = 'с ' + arr[0];
  arr[1] = 'до ' + arr[1];
  return arr.join('');
}
export default addWordsToInterval;
