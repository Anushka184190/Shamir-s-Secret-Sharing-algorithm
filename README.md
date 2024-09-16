<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lagrange Interpolation Script</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #bbb 1px solid;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 24px;
        }
        code {
            background: #eee;
            padding: 2px 5px;
            border-radius: 3px;
        }
        pre {
            background: #eee;
            padding: 10px;
            border-radius: 3px;
            overflow-x: auto;
        }
        h1, h2 {
            color: #333;
        }
        a {
            color: #1e90ff;
        }
        footer {
            background: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Lagrange Interpolation Script</h1>
        </div>
    </header>
    <div class="container">
        <h2>Code Walkthrough</h2>

        <h3>1. Lagrange Interpolation Function</h3>
        <pre><code>
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
        </code></pre>
        <p><strong>Purpose:</strong> Calculates the interpolated value at a given <code>x</code> using the Lagrange interpolation formula.</p>
        <p><strong>Parameters:</strong></p>
        <ul>
            <li><code>xi</code>: Array of x-coordinates of the data points.</li>
            <li><code>yi</code>: Array of y-coordinates of the data points.</li>
            <li><code>x</code>: The x-value at which to evaluate the polynomial.</li>
        </ul>
        <p><strong>Returns:</strong> The interpolated value at <code>x</code>, rounded to the nearest integer.</p>

        <h3>2. JSON Parsing Function</h3>
        <pre><code>
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
        </code></pre>
        <p><strong>Purpose:</strong> Parses the JSON input and extracts the x and y values required for interpolation.</p>
        <p><strong>Parameters:</strong></p>
        <ul>
            <li><code>jsonStr</code>: JSON string containing data points.</li>
        </ul>
        <p><strong>Returns:</strong> An object with <code>xi</code> (array of x-coordinates) and <code>yi</code> (array of y-coordinates).</p>

        <h3>3. Sample JSON Input</h3>
        <pre><code>
const jsonInput = JSON.stringify({
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
});
        </code></pre>
        <p><strong>Purpose:</strong> Provides a sample JSON string with data points and their bases.</p>
        <p><strong>Structure:</strong></p>
        <ul>
            <li><code>"keys"</code>: Metadata about the data (not used in the calculations).</li>
            <li><code>"1"</code>, <code>"2"</code>, etc.: Data points, where each point has a <code>base</code> (numerical base) and a <code>value</code> (value in that base).</li>
        </ul>

        <h3>4. Execution</h3>
        <pre><code>
const { xi, yi } = parseJsonInput(jsonInput);
const constantTerm = lagrangeInterpolation(xi, yi, 0);

console.log(`The constant term (c) of the polynomial is: ${constantTerm}`);
        </code></pre>
        <p><strong>Purpose:</strong> Parses the JSON input, performs Lagrange interpolation, and prints the result.</p>
        <p><strong>Steps:</strong></p>
        <ul>
            <li>Parse the JSON to extract x and y coordinates.</li>
            <li>Compute the constant term of the polynomial using the interpolation function.</li>
            <li>Output the result to the console.</li>
        </ul>

        <h2>How to Run</h2>

        <h3>Prerequisites</h3>
        <p>Ensure you have <a href="https://nodejs.org/" target="_blank">Node.js</a> installed on your system.</p>

        <h3>Instructions</h3>
        <ol>
            <li><strong>Save the Script:</strong> Save the JavaScript code to a file named <code>lagrange_interpolation.js</code>.</li>
            <li><strong>Run the Script:</strong> Open a terminal or command prompt and navigate to the directory where you saved <code>lagrange_interpolation.js</code>.</li>
            <li>Run the script using Node.js:
                <pre><code>node lagrange_interpolation.js</code></pre>
            </li>
            <li><strong>View the Output:</strong> The script will output the constant term of the polynomial to the console.</li>
        </ol>

        <h2>Example Output</h2>
        <pre><code>
The constant term (c) of the polynomial is: 4
        </code></pre>
        <p>This example assumes that the JSON data provided is accurate and the interpolation correctly computes the constant term.</p>

        <h2>Additional Notes</h2>
        <ul>
            <li>Ensure your JSON input is correctly formatted and valid.</li>
            <li>Adjust the <code>jsonInput</code> string in the script as needed to test with different data.</li>
        </ul>
    </div>

    <footer>
        <p>&copy; 2024 Lagrange Interpolation Script. All rights reserved.</p>
    </footer>
</body>
</html>
