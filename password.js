let password = 'DevMount@inPT6'

console.log(`${password} ${password.length}`);

if(password.length < 10 || !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password)){
    console.log ('Failure:Your password is to short or it contains special characters.')
} else if(password.length >= 10 && /^[A-Za-z0-9]*$/.test(password)) {
    console.log('Success')
} else {
    console.log('Failure')
}

