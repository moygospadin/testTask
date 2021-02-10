const mounth3Lettter = [
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
  console.log('date', date);
  const d = new Date(date);
  return d.getDate() + ' ' + mounth3Lettter[d.getMonth()];
}

export function differenceBetweenDates(date1, date2) {
  return (new Date(date2) - new Date(date1)) / (60 * 60 * 24 * 1000);
}
