const question = prompt('Що ви хочете зробити (add, sub, mult, div)', ' ');

const a = +prompt('Введіть перше число', ' ');
if (Number.isNaN(a)) {
    alert (`Це не число`)
}

const b = +prompt('Введіть друге число', ' ');
if (Number.isNaN(b)) {
    alert (`Це не число`)
}

if (Number.isNaN(a) && Number.isNaN(b)) {
    alert (`Це не числа`)
}

switch (question) {
    case 'add':
        alert (`${a} + ${b} = ` + (a + b) )
        break;
    case 'sub' :
        alert (`${a} - ${b} = ` + (a - b) )
        break;
    case 'mult' :
        alert (`${a} * ${b} = ` + (a * b) )
        break;
    case 'div' :
        if (b == 0) {
            alert (` Ви не можете ділити на нуль!`)
           }
        if (a == 0) {
            alert (` Ви не можете ділити на нуль!`)
        }    
        else {
            alert (`${a} / ${b} = ` + (a / b) ) 
           }   
        break;
    default :
        alert (`Невідома операція`)
}
