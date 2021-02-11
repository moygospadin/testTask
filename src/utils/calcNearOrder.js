function calcNearOrder(deliveries, fullDateNow) {
  console.log('deliveries', deliveries);
  return deliveries.filter((el) => el.date > fullDateNow);
}
export default calcNearOrder;
