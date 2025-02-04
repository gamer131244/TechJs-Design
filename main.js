console.log('Hello World!');

var run = document.getElementById('run');
var editor = document.querySelector('.editor');
var JsCode = '';
var imSy = 'System undefined';

var ons = document.getElementById('ons');
var ok = document.getElementById('ok');

//  ons.style.marginTop = '-320px'





document.getElementById("ok").addEventListener("click", function() {
    // Create a custom KeyboardEvent for "Enter"
    var enterEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13, // KeyCode for Enter
        which: 13,
        bubbles: true
    });

    // Dispatch the event to Ace Editor
    editor.textInput.getElement().dispatchEvent(enterEvent);
});



var keys = ['screen', 'helo']



ace.define("ace/mode/TechJs", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules"], function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    // Define Custom Highlight Rules
    var MyLanguageHighlightRules = function() {
        this.$rules = {
            "start": [
                {
                    token: "keyword", // Keywords
                   regex:"\\b(screen|data|event|system|input|value|text|Set|Screen|screenURI|power|id|class|String|Screen|System|type|componet|Imported)\\b"
                },
                {
                token: "operator", // Assign "operator" class
                regex: /(\+|-|\*|\&|=|==|===|!=|!==|>|<|>=|<=|&&|\||\||\≠|\;|\$)/ // Match common operators
            },
                {
                    token: "string", // Strings
                    regex: `°.*?°|".*?"|'.*?'|~.*?~|•.*?•`
                },
                {
                    token: "comment", // Single-line comments
                    regex: "/•.*$|//.*$|///.*?///"
                },
                
                {
                    token: "number", // Numbers
                    regex: "\\b\\d+\\b"
                },
                {
                    token: "constant.language", // Custom constants
                    regex: "\\b(true|false|non|import|from)\\b"
                },
                {
                  token: "variable",
                  regex: "\\b(var|set|fix)\\b"
                },
                {
                  token: "function",
                  regex: "\\b(applied|check|truer|RepeatAll|delete|\∆f0g|\∆|notice|idGet|classGet|query|queryAll|see|fog|connectChild|connect|write|warn|error|√|createComponet|createNode|disConnectChild|babyComponet|babyNodes|headNode|headComponet|firstBaby|firstElementBaby|waitAllAction|waitForAction)\\b"
                },
                {
                  token: "identifier",
                  regex: /(\(|\))/
                },
                {
                  token: "punctuation",
                  regex: /(\{|\})/
                },
                {
                  token: "constant",
                  regex: /(\[|\])/
                },
                {
                  token: "text",
                  regex: /\b[a-zA-Z_]\w*\b/,
                  next: "start"
                }
            ] 
        }; 
    };

    oop.inherits(MyLanguageHighlightRules, TextHighlightRules);

    // Define Mode
    var MyLanguageMode = function() {
        this.HighlightRules = MyLanguageHighlightRules;
    };
    oop.inherits(MyLanguageMode, TextMode);

    (function() {
        this.lineCommentStart = "//"; // Line comments syntax
        this.$id = "ace/mode/myLanguage";
    }).call(MyLanguageMode.prototype);

    exports.Mode = MyLanguageMode;
});


var editor = ace.edit(editor);
editor.session.setMode("ace/mode/TechJs"); // یہاں اپنی لینگویج کا راستہ دیں



console.log(editor.session.getMode().$id); // یہ چیک کرے گا کہ کون سا موڈ لوڈ ہوا ہے







console.log(editor.session.getMode().$id); // یہ چیک کرے گا کہ کون سا موڈ لوڈ ہوا ہے



/*editor.setOptions({
    enableBasicAutocompletion: true, // Basic Autocompletion
    enableLiveAutocompletion: true,  // Live Autocompletion
    enableSnippets: true,            // Code snippets
    autoCloseBrackets: true          // Auto-close brackets
});*/



editor.commands.addCommand({
    name: "insertBracket1",
    bindKey: { win: "[", mac: "[" },
    exec: function(editor) {
        editor.insert("[]");
       // editor.moveCursorLeft();
       var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});

editor.commands.addCommand({
    name: "insertBracket2",
    bindKey: { win: "{", mac: "{" },
    exec: function(editor) {
        editor.insert("{}");
      //  editor.moveCursorLeft();
      var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});


editor.commands.addCommand({
    name: "insertBracket3",
    bindKey: { win: "(", mac: "(" },
    exec: function(editor) {
        editor.insert("()");
     //   editor.moveCursorLeft();
     var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});

editor.commands.addCommand({
    name: "insertQue0",
    bindKey: { win: "'", mac: "'" },
    exec: function(editor) {
        editor.insert("''");
     //   editor.moveCursorLeft();
     var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});



editor.commands.addCommand({
    name: "DotShow",
    bindKey: { win: ".", mac: "." },
    exec: function(editor) {
        editor.insert(">");
     //   editor.moveCursorLeft();
    }
});

















 
editor.commands.addCommand({
    name: "insertQue1",
    bindKey: { win: '"', mac: '"' },
    exec: function(editor) {
        editor.insert('""');
     //   editor.moveCursorLeft();
     var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});











editor.setOptions({
    behavioursEnabled: true // Enable built-in paired behaviors
});














editor.commands.addCommand({
    name: "insertQue2",
    bindKey: { win: '~', mac: '~' },
    exec: function(editor) {
        editor.insert('~~');
     //   editor.moveCursorLeft();
     var cursor = editor.getCursorPosition();
       editor.moveCursorTo(cursor.row, cursor.column - 1);
       console.log(editor.getCursorPosition())
    }
});



// ace.edit(editor);
editor.setOptions({
    enableBasicAutocompletion: true,  // Basic autocompletion
    enableLiveAutocompletion: true    // Live autocompletion
});






// Create a custom completion provider for your language








/*editor.addEventListener('input', ()=>{
  console.log(editor.getValue());
  console.log(editor.getCursorPosition())


})*/
  



run.addEventListener('click', () => {
  JsCode = editor.getValue();
  ConvertMyCodeToJsCode();
  window.location.href = "compiler.html"
});





function ConvertMyCodeToJsCode() {
console.log(JsCode)
  if (editor.getValue().includes("import String from {data}")) {
    var JsCodeRun = JsCode.replace(/°|set|fix|write|warn|error|applied|\√|non|\-!|!-|∆|\~|notice|\>|see|•|\∞|\^|RepeatAll|##|screen|system|truer|check|idGet|classGet|query|queryAll|design|createComponet|createNode|connectChild|connect|disConnectChild|delete2|babyNodes|babyComponet|headNode|headComponet|action|firstBaby|firstElementBaby|power|screenURI|babyElementCount|\nones|event|doubleClick|input\(value\)|\input\(text\)|enterText|fog|\≠≠|waitForAction|\->|waitAllAction|Set Screen|delete|helo/g, (match) => { 
      // String Form Imported Data; 
      if (match === 'set') return 'let';
      if (match === '°') return '"';
      if (match === 'fix') return 'const';
      if (match === 'write') return 'console.log';
      if (match === 'warn') return 'console.warn';
      if (match === 'error') return 'console.error';
      if (match === 'applied') return 'function';
      if (match === '√') return '()';
      if (match === 'non') return 'null';
      if (match === '!-') return '{';
      if (match === '-!') return '}';
      if (match === '∆') return 'this';
      if (match === '~') return '`';
      if (match === 'notice') return 'alert';
      if (match === '>') return '.';
      if (match === 'see') return 'test';
      if(match === '•') return '/';
      if (match === '∞') return '[';
      if (match === '^') return ']';
      if (match === 'RepeatAll') return 'forEach';
      if (match === '?&') return '&&';
      if (match === '##') return '||';
      if (match === 'system') return 'window';
      if (match === 'screen') return 'document';
      if (match === 'truer') return 'while';
      if (match === 'check') return 'for';
      if (match === 'idGet') return 'getElementById';
      if (match === 'classGet') return 'getElementsByClassName';
      if (match === 'query') return 'querySelector';
      if (match === 'queryAll') return 'querySelectorAll';
      if (match === 'design') return 'style';
      if (match === 'createComponet') return 'createElement';
      if (match === 'createNode') return 'createTextNode';
      if (match === 'connectChild') return 'appendChild';
      if (match === 'connect') return 'append';
      if (match === 'disConnectChild') return 'removeChild';
      if (match === 'delete') return 'remove';
      if (match === 'babyComponet') return 'children';
      if (match === 'babyNodes') return 'childNodes';
      if (match === 'headNode') return 'parentNode';
      if (match === 'headComponet') return 'parentElement';
      if (match === 'actionList') return 'classList';
      if (match === 'action') return 'className';
      if (match === 'firstBaby') return 'firstChild';
      if (match === 'firstElementBaby') return 'firstElementChild';
      if (match === 'power') return 'attributes';
      if (match === 'screenURI') return 'baseURI';
      if (match === 'screenSlot') return 'assignedSlot';
      if (match === 'babyElementCount') return 'childElementCount';
      if (match === 'event') return 'addEventListener';
      if (match === 'doubleClick') return 'dblclick';
      if (match === 'input(value)') return 'value';
      if (match === 'input(text)') return 'innerText';
      if (match === 'enterText') return 'input';
      if (match === 'fog') return '';
      if (match === '≠≠') return '!==';
      if (match === 'waitForAction') return 'setTimeout';
      if (match === 'waitAllAction') return 'setInterval';
      if (match === '->') return '()='+'>';
      //the End Of String Form;
      
      if(editor.getValue().includes('import System from {data}')){
        if(editor.getValue().includes('import Screen from {System}')) {
          if (match === 'Set Screen') return `var sysI = document.createTextNode`;
          
        }
      }
      
    });
    
    


    if (JsCode.includes('import String from {data}')) {
      JsCodeRun = JsCodeRun.replace('import String from {data}', 'var String = "a6hs8js8j3jKhshAfhdHdhe&shj&jnd+$7!&ejJdu7369Jx7oqjx&jxvg" ');
       
       JsCodeRun = JsCodeRun.replace(/import System from {data}|import Screen from {System}|\$button-|-button\$|\$componet-|--|Imported Screen|Set Screen/g, (match)=>{
         if (match === 'import System from {data}') return 'var System = "gd7hsh7hd7je8dj83jsigdjz8jdisjdjhsk8jd7jejdu" ';
         if (match === 'import Screen from {System}') return 'var Screen = "hd6he6he7dhk8jH8jKs7Jdj7h&jdku8jH75" ';
         if (match === '$componet-') return '<input';
         if (match === '--') return '>';
         if (match === 'Set Screen') return 'document.createTextNode';
         if (match === 'Imported Screen') return `
         
         
         
         localStorage.setItem("td", sysI.wholeText);
         
         
          `;
       });
      
    var  JsCodeRuns = `try {
        ${JsCodeRun}
        } catch (e) {
          localStorage.setItem("error", e);
        }`
    }








  } else {
    alert('Please Import String Data');
  }

  


  if (!JsCode.includes('function')) {
    if (!JsCode.includes('"')) {
      if (!JsCode.includes("'")) {
        if (!JsCode.includes('`')) {
          
          if(!JsCode.includes('{{')){
            if(!JsCode.includes('}}')){
              
              
              if(!JsCode.includes('alert')){
                if(!JsCode.includes('.')){
                  try {
            var runner = document.createElement('script');
            var text = document.createTextNode(JsCodeRuns);
            runner.appendChild(text);
            document.body.appendChild(runner);
            console.log(JsCodeRuns);
            localStorage.setItem("ts", JsCodeRuns);
          } catch (e) {
            alert(e)
            
          }
                } else {
                  alert('undefined . did you mean >');
                }
              } else {
                alert('undefined alert did you mean notice')
              }
          
          
            } else {
              alert("undefined °}° did you mean °!-°");
            }
          } else {
            alert("undefined °{° did you mean °!-°");
          }
          
          
        } else {
          alert("Undefined °`° did you mean °~°");
        }


      } else {
        alert("undefined °'° did you mean ° ");
      }
    } else {
      alert('undefined °"° did you mean °');
    }
  } else {
    alert('undefined °function° did you mean applied');
  }





}









setInterval(()=>{
  if(editor.getValue().includes('import System from {data}')){
    imSy = 'System defined';
  } else {
    imSy = 'System Undefined';
  }
})



ace.config.loadModule('ace/ext/language_tools', function() {
    editor.focus();
    editor.setValue(`     import String from {data};
     import System from {data};
     import Screen from {System};
     
     Set Screen(~
       
       $componet- type=°button° id=°btn° value=°Hello World° --
       
       ~);
       Imported Screen
       
       var btn = screen>idGet(°btn°);
       btn>event(°click°, ->{
         notice(°Button Clicked°);
       });
       
     `);
     editor.addEventListener("focus", ()=>{
       document.body.scrollTop = 9999999999;
       editor.execCommand("");
     });
});


