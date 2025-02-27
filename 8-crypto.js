const crypto = ['dassworp']; 

function encrypt(password) {
    const firstChar = password[0]; 
    const lastChar = password[password.length - 1]; 
    const middle = password.slice(1, -1); 
    return lastChar + middle + firstChar; 
}

function check(inputPassword) {
    const encryptedInput = encrypt(inputPassword); 
    const encryptedStored = encrypt(crypto[0]); 
    if (encryptedInput === encryptedStored) { 
        return true;
    } else {
        return false;
    }
}

const password = 'dassworp'; 
console.log(check(password));

