export default function FunctionParam() {
  const name = "aminul";
  const age = 30;
  function logPerson(personName: string, personAge: number) {
    const info = `Name: ${personName},  age: ${personAge}`;
    console.log(info);
    return info;
  }
  logPerson(name, age);
}