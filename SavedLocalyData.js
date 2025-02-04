
var editors = document.querySelector('.editor');



// Array to store declared variables
let declaredVariables = [];

// Function to detect variables in the code
function updateDeclaredVariables() {
    const session = editor.getSession();
    const lines = session.getDocument().getAllLines();

    declaredVariables = []; // Reset the array

    // Regular Expression to match variable declarations
    const variableRegex = /\b(set|fix|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/;

    // Loop through all lines in the editor
    lines.forEach(line => {
        const match = line.match(variableRegex);
        if (match) {
            const variableName = match[2]; // Extract the variable name
            if (!declaredVariables.includes(variableName)) {
                declaredVariables.push(variableName); // Add to the array
            }
        }
    });
}

// Handle editor change events to update variables
editor.on('change', function() {
    updateDeclaredVariables();
});

// Custom completer for variables and other keywords
const VariableCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        // General suggestions (keywords, etc.)
        const generalSuggestions = [
                        { caption: "applied", value: `applied fname(para){
  
    }`, meta: "define function" },
            { caption: "var", value: "var name = ", meta: "declaration statement" },
            { caption: "set", value: "set name = ", meta: "declare variable" },
            { caption: "fix", value: "fix name = ", meta: "constant value" },
            // Add more custom keywords, functions, etc.
            { caption: "RepeatAll", value: "RepeatAll", meta: "keyword" },
            { caption: "write", value: "write", meta: "print" },
            { caption: "warn", value: "warn", meta: "warning print " },
            { caption: "or", value: "##", meta: "OR" },
            { caption: "error", value: "error", meta: "Show Error on Code" },
            { caption: "called fun", value: "√", meta: "Direct Called" },
            { caption: "non", value: "non", meta: "null" },
            { caption: "imports String", value: "import String from {data};" },
            { caption: "imports System", value: "import System from {data};" },
            { caption: "imports Screen", value: "import Screen from {System};", meta: imSy },
            { caption: "Screen", value: `Set Screen(~ 
            
    $componet- type=°button° value=°button° --
            
     ~)` },
     
  tagMaked ? !isInsideTag ? { caption: "$C", value: "$componet- type=°° value=°°--" } : { caption: "Screen", value: `Set Screen(~ 
            
    $componet- type=°button° value=°button° --
            
     ~)` } : { caption: 'TechJs', value:`
     // /-import Data;
     import String from {data};
     import System from {data};
     import Screen from {System};
     
     
     // /-Setup Screen;
    Set Screen(~
  $componet- type=°button° id=°btn° value=°Hello° class=°childBtn° /--
     ~);
     Imported Screen`, meta: 'Started' },
     { caption: "system", value: "system", meta: "Window Property" },
     { caption: "screen", value: "screen", meta: "User Screen"  },
     
     tagMaked ? !isInsideTag ? { caption: "$CC", value: "$componet- id=°° power=°° type=°° value=°°--" } : { caption: "Screen Data", value: `Set Screen(~ 
            
    $componet- type=°button° id=°° power=°° value=°button° --
            
     ~)` } : { caption: 'TechJs', value: `
     // /-import Data;
     import String from {data};
     import System from {data};
     import Screen from {System};
     
     
     // /-Setup Screen;
     Set Screen(~
     $componet- type=°button° id=°btn° value=°Hello° class=°childBtn° /--
     ~);
     Imported Screen`, meta: 'Started' },
     { caption: "system", value: "system", meta: "Window Property" },
     { caption: "screen", value: "screen", meta: "User Screen"  },
     
     { caption: "∆", value: "∆fog", meta: "this called event" },
     { caption: "notice", value: "notice", meta: "alert message" },
     { caption: "see", value: "see", meta: "test String" },
     { caption: "comment line", value: "••", meta: "comment just one line" },
     { caption: "RepeatAll", value: "RepeatAll", meta: "every items catch" },
     { caption: "and", value: "&&", meta: "and if another true" },
     { caption: "truer", value: "truer", meta: " while condition is true" },
     { caption: "check", value: "check", meta: "all repact value" },
     { caption: "idGet", value: "idGet", meta: "componet get from system" },
     { caption: "classGet", value: "classGet", meta: "get componet group" },
     { caption: "query", value: "query", meta: "get one component thought css property" },
     { caption: "queryAll", value: "queryAll", meta: "get all componet thought css property" },
     { caption: "design", value: "design", meta: "change the design only work componet" },
     { caption: "createComponet", value: "createComponet", meta: "create Something" },
     { caption: "createNode", value: "createNode", meta: "create Text" },
     { caption: "connectChild", value: "connectChild", meta: "connect Componet" },
     { caption: "connect", value: "connect", meta: "connect any" },
     { caption: "delete", value: "delete", meta: "delete any componet" },
     { caption: "babyComponet", value: "babyComponet", meta: "componet child" },
     { caption: "babyNodes", value: "babyNodes", meta: "text child" },
     { caption: "see", value: "see", meta: 'see if true' },
     { caption: "headNode", value: "headNode", meta: "parent text" },
     { caption: "headComponet", value: "headComponet", meta: "parent Element" },
     { caption: "actionList", value: "actionList", meta: "componet header" },
     { caption: "action", value: "action", meta: "main header" },
     { caption: "firstElementBaby", value: "firstElementBaby", value: "firstElementBaby", meta: "first child of parent" },
     { caption: "power", value: "power", meta: "companion manager" },
     { caption: "screenSlot", value: "screenSlot", meta: "screen manager" },
     { caption: "babyElementCount", value: "babyElementCount", meta: "child count of parent" },
     { caption: "event", value: "event", meta: "trigger of componet" },
     { caption: "doubleClick", value: "doubleClick", meta: "double tap event" },
     { caption: "input(value)", value: "input(value)", meta: "componet value" },
     { caption: "input(text)", value: "input(text)", meta: "componet text" },
     { caption: "enterText", value: "enterText", meta: "if text enter event" },
     { caption: "fog", value: "fog", meta: "this event" },
     { caption: "is not equal", value: "≠≠", meta: "not equal true" },
     { caption: "waitForAction", value: "waitForAction", meta: "wait to set event" },
     { caption: "waitAllAction", value: "waitAllAction", meta: "wait to all event repeat" },
     { caption: "->", value: `-> {
       // /-write here;
  }` }
     
        ];

        // Add declared variables to suggestions
        const variableSuggestions = declaredVariables.map(variable => {
            return { caption: variable, value: variable, meta: 'variable' };
        });

        // Combine general and variable suggestions
        const allSuggestions = generalSuggestions.concat(variableSuggestions);

        // Filter suggestions based on prefix
        const filteredSuggestions = allSuggestions.filter(item => 
            item.caption.startsWith(prefix)
        );

        callback(null, filteredSuggestions);
    }
};




















// Add the custom completer to the editor
editor.completers = [VariableCompleter];




// Create Custom Mode for Operators
