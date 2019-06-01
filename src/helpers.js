export function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
  const taglines = [
    "I am not a buyer, I'm a free man",
    "I hate buying things, I will never do it again",
    "Can't  buy me love, so why bother buying anything else."
  ];

  return randomArrayItem(taglines)
}
