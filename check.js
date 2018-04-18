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

data["common-words"] = data["common-words"].sort((a, b) => {
    if (a["缩写"] > b["缩写"])
        return 1;
    else if (a["缩写"] < b["缩写"])
        return -1;
    else
        return 0;
})

for (let key of Object.keys(data.threads)) {
    let i = data.threads[key].tags.indexOf("预览版");
    if (i >= 0) {
        data.threads[key].tags.splice(i, 1);
    }
    i = data.threads[key].tags.indexOf("即将过时");
    if (i >= 0) {
        data.threads[key].tags.splice(i, 1);
    }
    i = data.threads[key].tags.indexOf("过时");
    if (i >= 0) {
        data.threads[key].tags.splice(i, 1);
    }

    data.threads[key].tags = data.threads[key].tags.sort((a, b)=> {
        let i = data.tags.indexOf(a);
        let j = data.tags.indexOf(b);
        if (i > j)
            return 1;
        else if (i < j)
            return -1;
        else
            return 0;
    });
}

let v = new json_schema.Validator();
let result = v.validate(data, schema);
if (result.errors.length === 0) {
    fs.writeFile("./data.json", JSON.stringify(data, null, 4), (err)=> {
        if (err) {
            console.log("No problem in data, but error formatting the json file");
        } else {
            console.log("OK");
        }
    });
} else {
    for (let e of result.errors) {
        console.log(`Property: "${e.property}", Message: ${e.message}`);
    }
}
