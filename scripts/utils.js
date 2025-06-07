const personId = document.getElementById('personId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthDate = document.getElementById('birthDate');
const salary = document.getElementById('salary');
const addPerson = document.getElementById('addPerson');
const personList = document.getElementById('personList');
const stats = document.getElementById('stats');

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}

function createButtonDel(callback) {
    const buttonDel = createInfoElement('x', 'button')
    buttonDel.id = 'buttonDel';
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';
    buttonDel.addEventListener('click', function ({target}) {
        target.parentElement.remove();
        if (typeof callback === 'function') {
            callback();
        }
    });
    return buttonDel;
}

function printPerson(text, callback) {
    const person = createInfoElement(text, 'p')
    personList.append(person);
    person.append(createButtonDel(callback));
}

function printStats(text) {
    const statistics = document.createElement('div');
    text.forEach(line => {
        const p = createInfoElement(line, 'p');
        statistics.append(p);
    })
    if (stats.children.length === 1) {
        stats.append(statistics)
    } else {
        stats.replaceChild(statistics, stats.children[1]);
    }
}

function checkInputs(personId, firstName, lastName, birthDate, salary) {
    if (isNaN(personId.value) || personId.value === "" || personId.value < 0) {
        alert('Please enter a valid ID (Numbers from 0)')
        personId.focus();
        return false;
    }
    if (!isNaN(firstName.value) || firstName.value === "") {
        alert('Please enter a valid first name');
        firstName.focus();
        return false;
    }
    if (!isNaN(lastName.value) || lastName.value === "") {
        alert('Please enter a valid last name');
        lastName.focus();
        return false
    }
    if (birthdateInputNotCorrect(birthDate.value)) {
        alert('Please enter a valid birthdate');
        birthDate.focus();
        return false;
    }
    if (isNaN(salary.value) || salary.value === "" || salary.value < 0) {
        alert('Please enter a valid salary');
        salary.focus();
        return false;
    }
    return true;
}

function birthdateInputNotCorrect(birthdateValue) {
    const today = new Date();
    const enteredDate = new Date(birthdateValue);
    const minDate = new Date('1900-01-01');
    return (birthdateValue === "" ||
        isNaN(enteredDate.getTime()) ||
        enteredDate > today ||
        enteredDate < minDate);
}