const yaml = require('js-yaml');

let textarea = document.getElementById("textarea");
let code_area = document.getElementById("code_area");
let convert_to_yaml = document.getElementById("convert_to_yaml")
let convert_to_json = document.getElementById("convert_to_json")

textarea.onchange = function (){
    convert("convertYamlToJson",textarea.value,code_area)
}
code_area.onchange = function (){
    convert("convertJsonToYaml",code_area.value,code_area)
}
convert_to_json.onclick = function (){
    convert("convertYamlToJson",textarea.value,code_area)
}
convert_to_yaml.onclick = function (){
    convert("convertJsonToYaml",textarea.value,code_area)
}

function convert(type, input, output) {
    console.log("try to convert "+type)
    let result = ""
    try {
        if (type === "convertJsonToYaml") {
            result = convertJsonToYaml(input)
        } else {
            result = convertYamlToJson(input)
        }
        output.value = result
    } catch (e) {
        console.log(e);
    }
}


function convertJsonToYaml(input) {
    let doc = yaml.load(input)
    return yaml.dump(doc)
}

function convertYamlToJson(input) {
    return JSON.stringify(yaml.load(input), null, 2)
}