// Lagrange interpolation function
function lagrangeInterpolation(xi, yi, x) {
    let result = 0;
    const n = xi.length;

    for (let i = 0; i < n; i++) {
        let term = yi[i];
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term = term * (x - xi[j]) / (xi[i] - xi[j]);
            }
        }
        result += term;
    }

    // Round result to the nearest integer if expecting integer results
    return Math.round(result);
}

// Function to parse the JSON-like input and extract xi and yi
function parseJsonInput(jsonStr) {
    const data = JSON.parse(jsonStr);
    const xi = [];
    const yi = [];
    
    for (const key in data) {
        if (key !== 'keys') {
            const base = parseInt(data[key].base, 10);
            const valueStr = data[key].value; // No need to remove quotes
            const x = parseInt(key, 10);
            const y = parseInt(valueStr, base);
            xi.push(x);
            yi.push(y);
        }
    }

    return { xi, yi };
}

// Sample JSON input string
const jsonInput = JSON.stringify({
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    },
    "4": {
        "base": "11",
        "value": "917978721331A"
    },
    "5": {
        "base": "16",
        "value": "1A22886782E1"
    },
    "6": {
        "base": "10",
        "value": "28735619654702"
    },
    "7": {
        "base": "14",
        "value": "71AB5070CC4B"
    },
    "8": {
        "base": "9",
        "value": "122662581541670"
    },
    "9": {
        "base": "8",
        "value": "642121030037605"
    }
});

// Parse the JSON input and perform Lagrange interpolation
const { xi, yi } = parseJsonInput(jsonInput);
const constantTerm = lagrangeInterpolation(xi, yi, 0);

// Output the result
console.log(`The constant term (c) of the polynomial is: ${constantTerm}`);
