//arrow function and es7 ways of doing things
class Human{
    
    gender = "Male"
    printgender = () => {
          console.log(this.gender)
      }
  }
  class Person extends Human{
          name = "MAX"
          age = "26"
       printname = () => {
          console.log(this.name)
      }
      printage = () => {
          console.log(this.age)
      }
  }
  const person = new Person();
  person.printgender();
  person.printname();
  person.printage();
  
  //spread and rest operators
  
  const arr = [1,2,3,4]
  const newarr = [...arr , 5]
  console.log(newarr)
  
  const obj = {
      name : "max"
  }
  const newObj = {...obj , age:26}
  console.log(newObj)
  
  const filter = (...arg) =>{
      return arg.filter(ele=>ele===1)
  }
  console.log(filter(1,2,3,4,5))
  
  //destructuring the array and object
  
  const number = [1,2,3]
  const [num1 , , num3] = number;
  console.log(num1 , num3)
  
  const objecct = {name:"harry" , age: 26}
  const {name} = objecct
  const {age} = objecct
  console.log(name,age)