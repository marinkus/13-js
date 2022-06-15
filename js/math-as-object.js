console.clear();
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

    const userN1 = 7;
    const userN2 = 5;
    const userAction = '+';
    
    const userFunc = operations[userAction];
    const answer = userFunc(userN1, userN2);
    
    
    console.log(userN1, userAction, userN2, '=', answer);