function greeter(person: string): string {
    return "Hello, " + person;
}

function greetArray(people: string[]): string {
    return people.map(person => greeter(person)).join(', ');
}

let user = ["Jane User", "John User"];

console.log(greetArray(user)); // Correct usage