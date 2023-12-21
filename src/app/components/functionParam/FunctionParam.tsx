interface Person {
  name: string,
  age: number
}
// type Person = {
//   name: string,
//   age: number
// }
export default function FunctionParam() {
  const name: string = "aminul";
  const age:number = 30;

  const person: Person = {
    name: "Aminul",
    age: 38
  }
  function logPerson(personName: string, personAge: number) {
    const info = `Name: ${personName},  age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPerson2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
        console.log(info);
    return info;
  }
  logPerson(name, age);
  logPerson2(person);
}