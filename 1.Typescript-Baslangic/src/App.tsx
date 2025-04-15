import './App.css'

function App() {
  // Interface ve type kullanımı 
  //? Optional Type: ? işareti ile tanımlanır. Bu işaret, bir özelliğin isteğe bağlı olduğunu belirtir.

  //! Type kullanımı 
  type User = {
    name: string,
    age: number
  }

  const object1: User = {
    name: "Ali",
    age: 25
  }

  let array: User[] = [];

  //! Interface kullanımı
  interface User2 {
    name: string,
    age?: number // age olsada olur olmasada olur
  }

  //* nesneyi oluştururken interfacein içindeki özellikleri kullanmak zorundayız.
  const object2: User2 = {
    name: "Ahmet",
    age: 38
  }

  const object3: User2 = {
    name: "Veysel"
  }

  console.log(object1)
  console.log(object2);
  console.log(object3);


  //! FUNCTIONLAR

  function topla(a: number, b: number) {
    //* numberdan başka bir tür verilirse hata verir. number yerine kendi interfaceimizi de yazabiliriz.
    console.log(a + b)
  }

  function topla2(a: number, b: number): number | string { //* topla2 fonksiyonu number yada string döndürür.    
    //return (a + b)
    return "Toplama işlemi başarılı";
  }

  topla(5, 10);
  console.log(topla2(5, 10)); // 15

  //? geriye bir şey döndürmeyecekse void yazılır.
  function write(array: Array<string>): void { // arrayin içindeki elemanlar string olmalı.
    array.forEach((value) => console.log(value));
  }

  write(["Ali", "Veysel", "Ahmet"]);


  //!-------------------------------------------

  interface User3 {
    name: string,
    age: number
  }

  function writeConsole(array: Array<User3>): void { // arrayin içindeki elemanlar User3 olmalı.
    array.forEach((value: User3) => console.log(value.name, value.age));
  }

  const obj1: User3 = {
    name: "Ali",
    age: 25
  }

  const obj2: User3 = {
    name: "Ahmet",
    age: 30
  }

  let myArray: Array<User3> = [obj1, obj2];

  writeConsole(myArray);

  return (<div></div>)
}

export default App
