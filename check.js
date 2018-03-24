const json_schema = require("jsonschema");
const schema = require("./schema");
const fs = require("fs");

let data;
try {
    data = JSON.parse(fs.readFileSync("./data.json"));
} catch (e) {
    console.error("Error parsing Data!");
    console.error(e);
    process.exit();
}

let v = new json_schema.Validator();
let result = v.validate(data, schema);
if (result.errors.length === 0) {
    console.log("OK");
} else {
    for (let e of result.errors) {
        console.log(`Property: "${e.property}", Message: ${e.message}`);
    }
}
