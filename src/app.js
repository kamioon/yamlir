const yaml = require('js-yaml');

let textarea = document.getElementById("textarea");
let code_area = document.getElementById("code_area");
let convert_to_yaml = document.getElementById("convert_to_yaml")
let convert_to_json = document.getElementById("convert_to_json")

textarea.onchange = function () {
    convert("convertYamlToJson", textarea.value, code_area)
}
code_area.onchange = function () {
    convert("convertJsonToYaml", code_area.value, textarea)
}
convert_to_json.onclick = function () {
    convert("convertYamlToJson", textarea.value, code_area)
}
convert_to_yaml.onclick = function () {
    convert("convertJsonToYaml", code_area.value, textarea)
}

function convert(type, input, output) {
    console.log("try to convert " + type)
    let result = ""
    try {
        if (type === "convertJsonToYaml") {
            console.log("convertJsonToYaml")
            result = convertJsonToYaml(input)
        } else {
            console.log("convertYamlToJson")
            result = convertYamlToJson(input)
        }
        output.value = result
    } catch (e) {
        console.log(e);
    }
}

function convertJsonToYaml(input) {
    return yaml.dump(yaml.load(input))
}

function convertYamlToJson(input) {
    return JSON.stringify(yaml.load(input), null, 2)
}