// Write your solution in this file!
const employees = {
    'john':'1234',
};
employees;

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = {...obj};
    newObj[key]= value;
    console.log(newObj);
}
updateEmployeeWithKeyAndValue(employees,'Peter','1256');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key]=value;
    console.log(obj); 
}
destructivelyUpdateEmployeeWithKeyAndValue(employees,'mark','naks');

function deleteFromEmployeeByKey(){
    delete employees.john;
    console.log(employees)
}
deleteFromEmployeeByKey();

console.log(employees);