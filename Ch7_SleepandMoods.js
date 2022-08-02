const hours = [6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9];
const grumpyHours = [];
const happyHours = [];

for (const hour of hours) {
  if (hour < 8) {
    grumpyHours.push(hour);
  } else {
    happyHours.push(hour);
  }
}
console.log(
  `I was happy because I got ${happyHours.length} of sleep last night.`
);
console.log(
  `I was grumpy because I only got ${grumpyHours.length} of sleep last night.`
);
