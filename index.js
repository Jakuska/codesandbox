const editor = new CodeFlask(".code-editor", { language: "js", lineNumbers: true });
const output = new CodeFlask(".code-output", { language: "js", lineNumbers: false, readonly: true});

function runCode() {
    console.log('Hello world');
}