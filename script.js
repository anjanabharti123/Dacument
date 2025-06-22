/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Correct use of .map() function to filter developers and console.log them
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Correct use of .forEach() function to filter developers and console.log them
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Adding a new employee object to the array and console.log the updated array
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Removing all employees with the profession 'admin' and console.log the updated array
  const updatedArr = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArr);
}

function concatenateArray() {
  // Creating a new array with 3 objects and concatenating with the original array, then console.log the result
  const newEmployees = [
    { id: 5, name: "alex", age: "22", profession: "developer" },
    { id: 6, name: "sara", age: "30", profession: "tester" },
    { id: 7, name: "tom", age: "27", profession: "manager" }
  ];
  const concatenatedArray = arr.concat(newEmployees);
  console.log(concatenatedArray);
  
}

