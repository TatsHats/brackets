function check(str, bracketsConfig) {
    let stack = [];
    const OPEN_BRACKETS = [];                       // массив открыв. 
    const BRACKETS_PAIR = {};                       // массив пар

    for (let [open, close] of bracketsConfig) {
        BRACKETS_PAIR[close] = open;                // пары - по ключам закрыв. скобок создаются знач. соотв. открыв.
        OPEN_BRACKETS.push(open);                   // все открыв.
    }

    for (let i = 0; i < str.length; i++) {
        let currentSymb = str[i];

        if (OPEN_BRACKETS.includes(currentSymb)) {
            if (currentSymb === '|' && stack[stack.length - 1] === '|') { // посколько | м.б. как открыв. так закр.
                stack.pop();
            } else {
            stack.push(currentSymb);
            }
        } else {
            if (stack.length === 0) {
                return false;
            }

            let topElementStack = stack[stack.length - 1];

            if (BRACKETS_PAIR[currentSymb] === topElementStack) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
  return stack.length === 0;                        // Если стек пустой, все скобки совпали
}

module.exports = check;