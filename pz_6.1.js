const array = [];

for (let i = 1; i < 32; i++){
  array.push(i);
}

array.forEach(e => {
  const date = new Date(2020, 0, e);
  const day = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format(date);
  console.log(`${e} января, ${day}`);
});