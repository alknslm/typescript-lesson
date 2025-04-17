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


  //! GENERIC TYPE --> Bir fonksiyonun birden fazla şeye hizmet edebilmesini sağlar
  //* herhangi bir tipte gelen veriyi yazdırır

  function yazdir<T>(array: T[]): void {
    console.log(array);
  }

  yazdir(["ali", "ahmet", "mehmet"]);
  yazdir([true, false]);
  yazdir([1, 2, 3, 4]);


  // dışardan gelen tipe göre maaş alanı değişir
  interface GenericType<T> {
    name: string,
    age: number,
    salary: T[]
  }

  const obj5: GenericType<string> = { //* T yerine ne yazarsan salary ona göre tür alıyor
    name: "Enes",
    age: 25,
    salary: ["5000", "10000", "15000"]
  }

  const obj6: GenericType<number> = {
    name: "Mehmet",
    age: 24,
    salary: [12000, 13000, 14223]
  }

  let arrayObj: GenericType<string | number>[] = [obj5, obj6]; //* array tanımı yaparken string ve number gelebilir diyerek belirtiyoruz.

  function writeGeneric<T>(array: GenericType<T>[]): void {

    array.forEach((value: GenericType<T>) => console.log(value));
  }

  writeGeneric(arrayObj);


  //! EXTEND _ MİRAS ALMA

  interface OrtakAlanlar {
    id: string,
    olusturmaTarihi: string,
    olusturanKisi: string,
  }

  interface Musteri extends OrtakAlanlar {
    musteriNo: string
  }

  interface Kurum extends OrtakAlanlar {
    kurumNo: string
  }

  const kurum: Kurum = {
    id: "1",
    olusturmaTarihi: "09.05.2025",
    olusturanKisi: "Selim",
    kurumNo: "23123"
  }

  const musteri: Musteri = {
    id: "1",
    olusturmaTarihi: "02.02.2021",
    olusturanKisi: "Selim",
    musteriNo: "12"
  }

  console.log(kurum);
  console.log(musteri);


  //! PARTIAL - REQUIRED - READONLY- PICK - OMIT
  //* PARTIAL   -> interface ile alınan datalardan ne kadardını yazarsan o kadarını kabul eder. Olmayanı hata olarak göstermez (olsada olur olmasada)  
  // //? const kullanici1 : Partial<Kullanici>
  //* REQUIRED  -> soru işaretli olsa da zorunlu alan gibi davranır (name? : string) required yazınca zorunlu hale gelir
  //* READONLY  -> data class içinde yazanlar hariç dışarda nveri değiştirilmesine izin vermez kullanici1.name = "ali" yazılmaz.
  //* PICK      -> sadece bir tane attribute varmış gibi davran.
  //? const kullanici1 : Pick<Kullanici, "name">  sadece name varmış gibi kabul eder.
  //* OMIT      -> buda yazılan attribute dışındaki değerleri al demek
  //? const kullanici1 : Omit<Kullanici, "name"> name dışındaki diğer değerleri al

  interface Kullanici {
    name: string,
    age: number,
    lastname: string,
    tckn: string,
    birthDay: string
  }

  const kullanici1: Pick<Kullanici, "name"> = {
    name: "Veli",
  }

  //!---------------------------------------------
  return (<div></div>)
}

export default App
