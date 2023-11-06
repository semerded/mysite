const codeExample = ['print("Hello World!")', 
                    'console.log("Hello World!");', 
                    'class hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}', 
                    'void main() {\n\tprint("Hello World!);\n}', 
                    '#include <iostream>\nusing namespace std;\n\nvoid main() {\n\tcout << "Hello World!";\n}'];

function copyCodeExample(codeCopyNumber) {
    navigator.clipboard.writeText(codeExample[codeCopyNumber]);
}