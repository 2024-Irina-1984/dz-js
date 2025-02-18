const language = prompt("Введите ваш язык (de, ru, en):");

switch (language) {
    case 'de':
        console.log('Gutten Tag!');
        break;
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'en':
        console.log('Good afternoon!');
        break;
    default:
        console.log('Привет! Я не знаю ваш язык!');  
        break;     
}