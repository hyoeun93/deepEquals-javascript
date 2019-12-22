/*
time complexity: 0(1) - constant
space complexity: none
*/

function deepEqualsOrderMatters(a, b) {
    JSON.stringify(a) === JSON.stringify(b);
}

/* 
time complexity: 0(n) - linear
space complexity: none
*/

function deepEquals(a, b) {
    if(a === b) {
        return true;
    } else if(a && b && typeof a === 'object' && typeof b === 'object' && Object.keys(a).length === Object.keys(b).length) {
        if(Array.isArray(a) === Array.isArray(b)) {
            for (let key in a) {
                if(key in b) {
                    if(!deepEquals(a[key], b[key])) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        }
    }
    return false; 
}