// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces


console.log("hunzala\tzafar");

let nameWithWhitespace: string = "\t\n hunzala Zafar \n\t";

// Printing the name with leading and trailing whitespaces
console.log("Name with whitespace:");
console.log(nameWithWhitespace);

// Stripping the whitespace
let strippedName: string = nameWithWhitespace.trim();

// Printing the stripped name
console.log("\nStripped name:");
console.log(strippedName);




