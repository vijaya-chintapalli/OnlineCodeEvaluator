// src/App.js
import React, { useEffect, useState } from "react";
import CodeEditor from "./components/CodeEditor.js";
import TestResult from "./components/TestResult";
import { fetchProblems, submitCode } from "./api";

function App() {
  const [problems, setProblems] = useState([]);
  const [selectedProblemId, setSelectedProblemId] = useState("");
  const [code, setCode] = useState(`import java.util.*;

public class Solution {
    public static void main(String[] args) {
        // your code here
    }
}`);
  const [results, setResults] = useState([]);
  const [customInput, setCustomInput] = useState("");

  useEffect(() => {
    fetchProblems()
      .then((res) => {
        setProblems(res.data);
        if (res.data.length > 0) {
          setSelectedProblemId(res.data[0]._id);
        }
      })
      .catch((err) => console.error("Error fetching problems", err));
  }, []);

  const handleSubmit = async () => {
    if (!selectedProblemId || !code) return alert("Problem and code required");

    try {
      const res = await submitCode(code, selectedProblemId, customInput);
      setResults(res.data.results || [{ output: res.data.output }]);
    } catch (err) {
      alert("Error submitting code");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setSelectedProblemId(e.target.value);
    setCustomInput("");
    setResults([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Online Java Code Evaluator</h2>

      <label>Select Problem:</label>
      <select value={selectedProblemId} onChange={handleChange}>
        <option value="">-- Select a problem --</option>
        <option value="custom">Custom Code</option>
        {problems.map((problem) => (
          <option key={problem._id} value={problem._id}>
            {problem.title}
          </option>
        ))}
      </select>

      {selectedProblemId === "custom" && (
        <div style={{ marginTop: "10px" }}>
          <label>Custom Input:</label>
          <textarea
            rows={4}
            style={{ width: "100%" }}
            placeholder="Enter custom input for your code..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
        </div>
      )}

      <CodeEditor code={code} setCode={setCode} />

      <button style={{ marginTop: "10px" }} onClick={handleSubmit}>
        Submit
      </button>

      {results.length > 0 && <TestResult results={results} />}
    </div>
  );
}

export default App;
