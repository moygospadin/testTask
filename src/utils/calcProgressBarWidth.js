import {calcFullDateNow} from './date';
function calcProgressBarWidth(deliveries) {
  const dateNow = calcFullDateNow();

  const res = deliveries.reduce((acc, currVal) => {
    if (currVal.date > dateNow) {
      acc -= 100 / deliveries.length;
    }
    return acc;
  }, 100);

  return res <= 0 ? 0 : res;
}
export default calcProgressBarWidth;
