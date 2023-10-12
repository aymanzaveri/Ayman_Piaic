// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const commonCharacteristic = 'They are all mammals.';
const animals: string[] = ['Dog', 'Cat', 'Horse'];

// Loop to print the names of each animal
console.log('List of animals with a common characteristic:');
for (const animal of animals) {
    console.log(animal);
}

// Loop to print a statement about each animal
console.log('\nMore about these animals:');
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about the common characteristic
console.log(`\n${commonCharacteristic}`);
