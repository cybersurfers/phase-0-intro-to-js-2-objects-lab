// Write your solution in this file!

const employee = {'name':'Dave Hamburger','streetAddress': '123 Cheese St.'}

function updateEmployeeWithKeyAndValue(employee, eKey, eValue) {
    const newEmployee = {...employee}
    newEmployee[eKey] = eValue
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, eKey, eValue) {
    employee[eKey] = eValue
    return employee
}

function deleteFromEmployeeByKey(employee, eKey) {
    const newEmployee = {...employee}
    delete newEmployee[eKey]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, eKey) {
    delete employee[eKey]
    return employee
}