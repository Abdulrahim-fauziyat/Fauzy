

 let arr1=[22,34,45]
 let arr2=[23,45,78]

 console.log(arr1===arr2)
 
 let z=20
 let q =30
  console.log(arr1===arr2)
  console.log(arr1===z)
//   console.log(arr1.tostring()===arr2.tostring())
//   console.log(arr1.tostring(),ar2.tostring())
console.log(arr1.join(" ").toString(),arr2.join(' ').tostring)

let third_items =arr2
arr1[1]=400;
arr2[2] =500;
console.log(arr1)



let earning =[10,20,30,40]
earning.forEach( function(earn) {
          let newEarning = earn +earn/2;
          console.log(`Your earning is ${newEarning}`
          )
})
  

const myMoney=[ 1,2,3]
earning.forEach(function(earn){
     let ourMoney = earn +earn/10;
    //  console.log(`this s your money ${ourMoney}`)
     myMoney.push(ourMoney)
     console.log(ourMoney)
})



 let  earn=[ 10,30,40]
     earning.map((val,index) => {val +=val/10})
     const cash1=myMoney.map((val) => val+=val/6)
     const cash2 =myMoney.map((val) =>{return val+=val/6})

     console.log(cash1,cash2)
 
   
  



//    salary.map((val,index)=>{ val+=val/2});

//    const newSal=salary.map((val)=>val+=val /2)
   
//    const newSal2=salary.map((val)=>{ return val+=val /2})
   
   
//    console.log(newSal)
//    console.log(newSal2)
let ar1=[76,87]
let ar2=[76,87]

let x=10



let y=10

console.log(ar1===ar2)
console.log(x===y)
console.log(ar1.toString()===ar2.toString())
console.log(ar1.toString(),ar2.toString())
console.log(ar1.join("").toString(),ar2.join('').tostring)
console.log(typeof ar1,typeof ar2)

let second_item=ar2[1]
ar2[1]=3409;
ar2[10]=23;
console.log(ar2)
// javascriptobject data structure



// map, forEach and filter methods of the array

let salary = [24,50,75,12,44]
salary.forEach( function(item,i){
    let newSalary = item +item /2; //add salary bonus

    console.log(`At position ${newSalary}}`)
});

//using push in for each
 
const newSetSalary=[];
salary.forEach( function(item,i) {
    let newSalary = item +item /2; //add salary bonus
    newSetSalary.push(newSalary);
})

  




console.log(newSetSalary);



//using the map methods
salary.map((val,index)=>{ val+=val/2});

const newSal=salary.map((val)=>val+=val /2)

const newSal2=salary.map((val)=>{ return val+=val /2})


console.log(newSal)
console.log(newSal2)

// using filter method
let salary25less=salary.filter( (val)=> val <=25); //get all values that are less than<=25

console.log(salary25less)


//object is made up of key values points

let myObj={ 
title:"Dr", firstName:"Adedu", 
surname:"sulieman", 
test:function(){return this.title} };

//reading values for myobject
console.log(myObj.title) //using the dot notation
console.log(myObj['surname'])  //using [] notation




// add more properties

myObj.networth = 98000;
myObj.getBio= function(){
    return this.surname + " "+ this.firstName
};
myObj['country'] = "Nigeria";

console.log(myObj)
console.log(myObj.test())
console.log(myObj.getBio())


//pop and shift is used to remove at begining and end

// slice removes everything in array
  



let school =[
    {"name":"daniel dAnito", "age":15, "class":"PR3", "subjects":["eng","math", "civic"]},
    {"name":"Gabriel chukwudi", "age":13, "class":"PR2", "subjects":["eng","math", "agr"]},
    {"name":"labir sunday", "age":15, "class":"PR4", "subjects":["eng","math", "agr"]},
    {"name":"china lawal", "age":13, "class":"PR3", "subjects":["eng","math", "agric"]},
    {"name":"china lawal", "age":13, "class":"PR2", "subjects":["eng","math", "agric"]},
    {"name":"kege lawal", "age":14, "class":"PR4", "subjects":["eng","math", "agric"]},
    {"name":"kolin lawal", "age":14, "class":"PR4", "subjects":["eng","math", "agric"]},
]

 // get student whose age is 13

 let age13Student =school.filter((student) =>student.age===13);
 
 let pri2Student =school.filter((student) =>student.class==="PR2");
 let evenAgeStudent =school.filter((student) =>student.age%2 == 0);
 
 console.log(evenAgeStudent)

 console.log(age13Student)
 


 //object and array destructuring

 const{title,country} =myObj;
 console.log(`${title} is from ${country}`);

 //destructuring array
 let options =[ 24,50,75,12,44]
 const[,sal1,sal2,]=options;
 console.log(sal1, sal2);

   //REST and SPREAD operators

   let obCopy = {...myObj, hieght:120, color:'blaky'};
   console.log(obCopy);

   //spread operator with an array
   let arCopy =[...options];
   console.log(options.splice(0))




    











