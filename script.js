const firm = new Company();

addPerson.onclick = function () {
    if (!checkInputs(personId, firstName, lastName, birthDate, salary)) return;
        const newEmployee = new Employee(
            personId.value,
            firstName.value,
            lastName.value,
            birthDate.value,
            salary.value
        )
        const added = firm.addEmployee(newEmployee);
        if (added) {
            firm.addEmployee(newEmployee);
            printPerson(newEmployee.employeeInfo,
                () => {
                    firm.removeEmployee(newEmployee.id);
                    printStats(firm.printFullStats());
                });
            printStats(firm.printFullStats());
        }
}
