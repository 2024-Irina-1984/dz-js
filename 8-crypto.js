function encrypt(password) {
    if (!password || password.length < 2) return password;
    
    const chars = password.split('');
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
    
    if (chars.length > 2) {
        [chars[1], chars[chars.length - 2]] = [chars[chars.length - 2], chars[1]];
    }
    
    return chars.join('');
}

function decrypt(encrypted) {
    return encrypt(encrypted);
}

function check(inputPassword, storedPassword) {
    const decrypted = decrypt(inputPassword);
    return decrypted === storedPassword;
}

const originalPassword = 'dassworp';
const encrypted = encrypt(originalPassword); 

console.log(encrypted); 
console.log(decrypt(encrypted)); 
console.log(check(encrypted, originalPassword)); 
console.log(check('wrong', originalPassword)); 
