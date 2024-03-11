
// ARGUEMENT OBJECTS

// function display(name1,name2){
//     // document.write(name);
//     arguments[0]="Series";
//     document.write(arguments[0] + " : ")
//     document.write(arguments[1])
// }
// display("GOT","Games");

// function length(a,b,cc){
//     document.write(arguments.length);
// }
// length(1,2,3);


// function args(u,i,o,g){
//     for(let i=0; i<arguments.length; i++){
//         document.write(arguments[i] + " :");
//     }
    
// }
// args(12,33,46,78)

// function printl(elements) {
//     let result = ""; 
   
//     for (let i = 1; i < arguments.length; i++) {
//       result += arguments[i] + elements;
//     }
//     return result;
//   }
// document.writeln(printl(", ", "red", "orange", "blue"));
// document.writeln(printl(", ", "red", "orange", "blue"));
// document.writeln(printl(", ", "red", "orange", "blue"));
// document.writeln(printl(", ", "red", "orange", "blue"));

//Parameterss


// default parametesrs
// function multiply(a, b) {
//     b = typeof b !== "undefined" ? b : 1;
//     return a * b;
//   }
  
// document.write(multiply(5)); 


// function multiply(a, b=1) {
    
//     return a * b;
//   }
  
// document.write(multiply(5)); 

// rest parameter

// function arry(a,...theArgs) {
//     return a * theArgs;
// }
// const array= arry(12,13);
// // document.write(array)
// console.log(array)

//arrow functions and this keyword

const arrow=()=>{
    console.log("ARROW FUNCTION");
}
arrow();

const sayhello= (name,greeting)=>{
    console.log(greeting +" "+ name);
}
sayhello();

const x={
    name:"JS",
    role:"Consfusion",
    age:"10 years",
    show: function(){
        console.log(`The name is ${(this .name)}\n The role is${(this.role)}`)
    //    setTimeout(function(){
    //     // console.log(this);
    //     console.log(`The name is ${(this .name)}\n The role is${(this.role)}`)
    //    },2000)

    }
}
x.show();
