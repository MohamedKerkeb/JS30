// Array Cardio days 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Mo", year: 1970 },
  { name: "Lia", year: 2015 }
];

const comments = [
  { text: "Love this", id: 523423 },
  { text: "Super good ", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice", id: 542328 }
];

// Some and Every checks
//Some is at least one person 19
const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log({ isAdult });

const allAdults = people.every(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.log({ allAdults });

// Find
// find is like filter, but instead returns just the one you are looking for
// find the comment with th ID of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// FindIndex
//find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

// comments.splice(index, 1);

// popular redux world
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);
console.table(comments);
