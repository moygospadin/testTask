function calcProgressBarWidth(deliveries, fullDateNow) {
  const res = deliveries.reduce((acc, currVal) => {
    if (currVal.date > fullDateNow) {
      acc -= 100 / deliveries.length;
    }
    return acc;
  }, 100);

  return res <= 0 ? 0 : res;
}
export default calcProgressBarWidth;
