//exec//
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  //  output: "Found foo. Next starts at 9."
  //  output: "Found foo. Next starts at 19."
}




//test//

const str = 'table football';

const regex5 = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex5.test(str));
//  output: true

console.log(globalRegex.lastIndex);
// output: 0

console.log(globalRegex.test(str));
// output: true

console.log(globalRegex.lastIndex);
//  output: 9

console.log(globalRegex.test(str));
// output: false
 



//match//

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
//  output: Array ["T", "I"]




//match all//
const regexp = /t(e)(st(\d?))/g;
const str4 = 'test1test2';

const array = [...str4.matchAll(regexp)];

console.log(array[0]);
//  output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
//  output: Array ["test2", "e", "st2", "2"]




//replace//

const p = 'The quick brown fox jumps over the lazy dog. ';

console.log(p.replace('dog', 'monkey'));
// output: "The quick brown fox jumps over the lazy monkey. "


const regex6 = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// output: "The quick brown fox jumps over the lazy ferret. "




//replace all//

const p2 = 'The quick brown fox jumps over the lazy dog. ';

console.log(p2.replaceAll('dog', 'monkey'));
//  output: "The quick brown fox jumps over the lazy monkey. "


const regex7 = /Dog/ig;
console.log(p2.replaceAll(regex7, 'ferret'));
//  output: "The quick brown fox jumps over the lazy ferret. "




//search//
const paragraph3 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex8 = /[^\w\s]/g;

console.log(paragraph3.search(regex8));
// output: 43

console.log(paragraph3[paragraph3.search(regex8)]);
// output: "."




//split//
const str6 = 'The quick brown fox jumps over the lazy dog.';

const words = str6.split(' ');
console.log(words[3]);
//  output: "fox"

const chars = str6.split('');
console.log(chars[8]);
// output: "k"

const strCopy = str6.split();
console.log(strCopy);
// output: Array ["The quick brown fox jumps over the lazy dog."]
