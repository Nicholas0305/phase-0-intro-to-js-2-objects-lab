// Write your solution in this file!
const employee ={
    name:" ",
    streetAddress:" "
};
function updateEmployeeWithKeyAndValue(employee,name,streetAddress){
    const newem = {...employee}
    newem[name]=streetAddress;
    return newem;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
    employee[name]=streetAddress;
    return employee;
} 
function deleteFromEmployeeByKey(employee,name){
    const newem ={...employee}
    delete newem.name;
    return newem;
}
function destructivelyDeleteFromEmployeeByKey(employee,name){
    delete employee.name;
    return employee;
}