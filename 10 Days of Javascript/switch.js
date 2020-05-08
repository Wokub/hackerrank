function getLetter(s) {
    let letter = s.charAt(0);
    const v1 = ['a', 'e', 'i', 'o', 'u'];
    const v2 = ['b', 'c', 'd', 'f', 'g'];
    const v3 = ['h', 'j', 'k', 'l', 'm'];
    let mode = '';

    if(v1.includes(letter)) {
        mode = 'v1';
    } else if (v2.includes(letter)) {
        mode = 'v2';
    } else if (v3.includes(letter)) {
        mode = 'v3';
    } else {
        mode = 'v4';
    }

    switch(mode) {
        case 'v1':
            letter = 'A';
            break;
        case 'v2':
            letter = 'B';
            break;
        case 'v3':
            letter = 'C';
            break;
        case 'v4':
            letter = 'D';
            break;
        default:
            break;
    }
    
    return letter;
}