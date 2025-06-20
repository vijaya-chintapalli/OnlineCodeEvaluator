# 🚀 Online Code Evaluator

A lightweight web-based Java (and multi-language) code evaluator tool with support for custom input, real-time compilation, and output display. Ideal for quick testing of code snippets and learning purposes.

## 🌐 Live Demo
> 🔗   
> e.g., https://yourusername.github.io/online-code-evaluator

## 🛠️ Tech Stack

- **Frontend**: React, CodeMirror  
- **Backend**: Node.js, Express  
- **Language Support**: Java (Python & C++ planned)  
- **Compilation**: Child Process via `exec`  
- **Extras**: Custom input, error display  

## 📦 Features

- ✅ Run Java code instantly in the browser  
- ✅ Accepts custom inputs  
- ✅ Shows output or compile/runtime errors  
- ✅ Simple UI using CodeMirror  
- ✅ Easily extensible to support more languages  

## 📸 Screenshots

> *(Include these after hosting)*  
- Editor UI  
- Output area with result  
- Error display (compile/runtime)

## 📁 Folder Structure

```
OnlineCodeEvaluator/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── temp/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.js
│   │   │   └── TestResult.js
│   │   └── App.js
│   └── package.json
```

## 🔧 Setup Instructions

### 1. Clone this repo
```bash
git clone https://github.com/yourusername/OnlineCodeEvaluator.git
cd OnlineCodeEvaluator
```

### 2. Start Backend
```bash
cd backend
npm install
npx nodemon server.js
```

### 3. Start Frontend
```bash
cd ../frontend
npm install
npm start
```

## ✅ Sample Code

```java
import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
```

**Input**
```
Vijaya
```

**Output**
```
Hello, Vijaya!
```

## 📌 TODO / Improvements
- [ ] Add C++ and Python support
- [ ] Improve UI/UX
- [ ] Add theme toggle
- [ ] Host frontend + backend

## 📄 License
MIT License
