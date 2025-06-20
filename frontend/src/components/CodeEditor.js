// src/components/CodeEditor.js
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";

function CodeEditor({ code, setCode }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <CodeMirror
        value={code}
        height="300px"
        extensions={[java()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default CodeEditor;
