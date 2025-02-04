
var editors = document.querySelector('.editor');

var tagMaked = false;

var editor = ace.edit(editors);


editor.setOption("wrap", true);
editor.setTheme("ace/theme/terminal");
setInterval(()=>{
  if(editors.textContent.includes('Set Screen')){
    tagMaked = true;
  } else {
    tagMaked = false;
  }
})



// Flag to track whether the user is inside <myTag>
var isInsideTag = false;


// Function to check if the cursor is inside the <myTag> tag
function checkIfInsideTag(cursorPos) {
    var tagStart = "Set Screen(~"; 
    var tagEnd = "~)";
    
    var totalLines = editor.getSession().getLength();
    var startLine = cursorPos.row;
    var currentLine;

    // Loop to check if current line or any previous lines contain <myTag>
    for (var i = startLine; i >= 0; i--) {
        currentLine = editor.getSession().getLine(i);
        if (currentLine.includes(tagStart)) {
            isInsideTag = true;
           
            break;
        }
    }

    // Loop to check if any subsequent lines contain </myTag>
    for (var i = startLine; i < totalLines; i++) {
        currentLine = editor.getSession().getLine(i);
        if (currentLine.includes(tagEnd)) {
            isInsideTag = false;
            
            break;
        }
    }
}

// Handle change events to check cursor position
editor.on('change', function(e) {
    var cursorPos = editor.getCursorPosition();
    checkIfInsideTag(cursorPos);
    
});

// Autocompletion logic




var MyLanguageCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        // Your list of completions
        var completions = [
            { caption: "applied", value: "applied", meta: "define function" },
            { caption: "var", value: "var", meta: "declaration statement" },
            { caption: "set", value: "set", meta: "declare variable" },
            { caption: "fix", value: "fix", meta: "constant value" },
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
            
     ~)` } : { caption: 'TechJs', value: `import String from {data};
     import System from {data};
     import Screen from {System};
     Set Screen(~
     $componet- type=°button° id=°btn° value=°Hello° class=°childBtn° /--
     ~);
     Imported Screen`, meta: 'Started' },
     { caption: "system", value: "system", meta: "Window Property" },
     { caption: "screen", value: "screen", meta: "User Screen"  },
     
     tagMaked ? !isInsideTag ? { caption: "$CC", value: "$componet- id=°° power=°° type=°° value=°°--" } : { caption: "Screen Data", value: `Set Screen(~ 
            
    $componet- type=°button° id=°° power=°° value=°button° --
            
     ~)` } : { caption: 'TechJs', value: `import String from {data};
     import System from {data};
     import Screen from {System};
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
     { caption: "createComponet", value: "createComponet", meta: "create componet only accept componet" },
     { caption: "createNode" },
     { caption: "connectChild" },
     { caption: "connect" },
     { caption: "delete" },
     { caption: "babyComponet" },
     { caption: "babyNodes" },
     { caption: "see" },
     { caption: "headNode" },
     { caption: "headComponet" },
     { caption: "actionList"},
     { caption: "action" },
     { caption: "firstElementBaby" },
     { caption: "power" },
     { caption: "screenSlot" },
     { caption: "babyElementCount" },
     { caption: "event" },
     { caption: "doubleClick" },
     { caption: "input(value)" },
     { caption: "input(text)" },
     { caption: "enterText" },
     { caption: "fog" },
     { caption: "is not equal" },
     { caption: "waitForAction" },
     { caption: "waitAllAction" },
     { caption: "->" }
     
            
        ];

        // Filter completions by prefix
        var filteredCompletions = completions.filter(function(item) {
            return item.caption.startsWith(prefix);
        });

        // Return the filtered completions
        callback(null, filteredCompletions);
    }
};



editors.addEventListener('focus', ()=>{
  document.getElementById('scroll2').click();
  
})
  




var suggestions = document.querySelector('.ace-autocomplete')

var shows = false;
var oks = false;

document.getElementById('scroll').addEventListener('click', ()=>{
  
   if(oks == true){
     moveSuggestions("down");
     shows = false;
   } else {
     showSuggestionsBox();
     shows = true;
     oks = true;
   }
   
});

console.log(suggestions)


document.getElementById('scroll2').addEventListener('click', ()=>{
  
    if(oks == true){
     moveSuggestions("up");
     shows = false;
     
     
   } else {
     showSuggestionsBox();
     shows = true;
     oks = true;
   }
})

editor.on('change', ()=>{
  
  oks = false;
  
})



setInterval(()=>{
 /* editor.completers.popup.setRow(editor.completers.popup.getRow() + 1);*/
})

// Array to store declared variables




function show(){
  
}





// Ace Editor Initialization

editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
});

// Initialize Ace Editor

// Function to show the suggestions box
function showSuggestionsBox() {
    const completer = editor.completer;
    if (completer) {
        completer.showPopup(editor);
    }
}

// Custom function to handle scroll up and down
function moveSuggestions(direction) {
 
    const popup = editor.completer && editor.completer.popup;
    if (popup && popup.isOpen) {
        const currentRow = popup.getRow();
        const maxRows = popup.session.getLength() - 1;

        let newRow = currentRow;

        if (direction === "down") {
            newRow = currentRow < maxRows ? currentRow + 1 : 0;
        } else if (direction === "up") {
            newRow = currentRow > 0 ? currentRow - 1 : maxRows;
        }

        popup.setRow(newRow);
        popup.scrollToRow(newRow);
    }
}







editor.on("changeSelection", function() {
    var selectedText = editor.getSelectedText();
    getCursorPositionInPixels();
    if (selectedText) {
        
    } else {
      
    }
});



// Function to get cursor position in pixels
function getCursorPositionInPixels() {
    var position = editor.getCursorPosition();
    var coordinates = editor.renderer.characterWidth * position.column;
    var lineHeight = editor.renderer.lineHeight * position.row;

   // console.log("Cursor Position: X " + coordinates + " px, Y " + lineHeight + " px");
    
}

// Call this function to get the current cursor position in pixels
getCursorPositionInPixels();






editor.completers = [MyLanguageCompleter];


