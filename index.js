const json_schema = require("json-schema");
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

let result = json_schema.validate(data, schema);
if (result.valid) {
    console.log("OK!");
} else {
    for (let e of result.errors) {
        console.log(`Property: "${e.property}", Message: ${e.message}`);
    }
}