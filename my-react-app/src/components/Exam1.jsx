// 클래스 컴포넌트 Exam1 정의

import { Component } from "react";

// - 클래스형 컴포넌트는 React.Component 클래스를 상속받아 구현하며,
class Exam1 extends Component {
  // React.Component 클래스 상속받아 클래스형 컴포넌트 정의 (태어남)
  // - 생성후에 내보내는 구문 필요

  // 생성자 정의. props 는 부모 컴포넌트로부터 전달받은 데이터
  constructor(props) {
    super(); // 부모 클래스(컴포넌트)의 생성자를 호출

    // this.state : 클래스형 컴포넌트에서 컴포넌트의 상태(state) 객체를 의미함.
    this.state = { count: 0 }; // state(상태) 중 count 상태값을 0으로 초기화.

    console.log("생성자 호출");
  }

  // 생명주기 코드

  // 1. 컴포넌트가 처음 화면에 나타났을 때
  componentDidMount() {
    console.log("componentDidMount : 마운트 완료");
  }

  // 2. props나 state 가 변경된 후
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate : 업데이트 완료");
    console.log("이전 state : ", prevState.count);
    console.log("현재 state :", this.state.count);
  }

  // 3. 컴포넌트가 화면에서 제거될 때
  componentWillUnmount() {
    console.log("componentWillUnmount : 언마운트 됨");
  }

  // 랜더링 메서드. JSX를 반환하여 화면에 UI 랜더링(그린다)
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
      </div>
    );
  }
}
// - export default : 하나에 파일에 여러개의 클래스를 정의 가능 , 어떤 클래스를 내보내는지
// 다른 파일에서 해당 파일 (Exam1.jsx)의 기본으로 지정된 컴포넌트(Exam1)를 사용할 수 있도록
// 내보냄 (수출함)
export default Exam1;
