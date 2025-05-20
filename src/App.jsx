import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  // 상태(state)
  const [showExam, setShowExam] = useState();

  return (
    //  <></> :fragment(html 역할 x)

    /* 
    jsx 주석
    <>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </>
  */

    <>
      <button onClick={() => setShowExam(!showExam)}>클릭</button>

      {/*showExam 이 true면 화면에 Exam1 컴포넌트 호출하여 렌더링함*/}
      {showExam && <Exam2 jaei="helld" test="world" />}
    </>
  );
}

export default App;
