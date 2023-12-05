const items = [
  { name: "Розы", value: 1500 },
  { name: "Тюльпаны", value: 1200 },
  { name: "Пионы", value: 1800 },
  { name: "Ромашки", value: 1000 },
  { name: "Незабудки", value: 800 },
  { name: "Хризантемы", value: 900 },
  { name: "Герберы", value: 600 },
  { name: "Лилии", value: 1400 },
  { name: "Подсолнухи", value: 1700 },
  { name: "Гвоздики", value: 1300 },
  { name: "Орхидеи", value: 2000 },
  { name: "Ирисы", value: 1900 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
