export const mounth3Lettter = [
  'янв',
  'фев',
  'мрт',
  'апр',
  'май',
  'июнь',
  'июль',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек',
];
export const weekDays = [
  'воскресенье',
  'понедельник',
  'вторник',
  'cреду',
  'четверг',
  'пятницу',
  'субботу',
];

export function calcFullDateNow() {
  const date = new Date();
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  const yy = date.getFullYear();

  return yy + '-' + mm + '-' + dd;
}

export function calcDayWithMount(date) {
  const d = new Date(date);
  return d.getDate() + ' ' + mounth3Lettter[d.getMonth()];
}

export function differenceBetweenTwoDates(date1, date2) {
  return (new Date(date2) - new Date(date1)) / (60 * 60 * 24 * 1000);
}

export function calcDayLeft(deliveries, fullDateNow) {
  const deliver = deliveries.find((el) => el.date > fullDateNow);

  return deliver ? differenceBetweenTwoDates(fullDateNow, deliver.date) : 0;
}
