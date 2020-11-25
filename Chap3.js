//함수형 컴포넌트
// import React from 'react';

// function App(){
//     const name='리액트';
// return <div className="react">{name}</div>
// }

//클래스형 컴포넌트
// import React,{Component} from 'react';

// class App extends Component{
//     rendor(){
//         const name ='react';
//         return <div className="react">{name}</div>;
//     }
// }
// class형 컴포넌트는 rendor함수가 꼭 필요하고, 그 안에서 보여줄 JSX을 리턴해야 함.
// state와 라이프사이클 API의 사용이 가능하다.

// import React from "react";
// import MyComponent from "./MyComponent";

// const App = () => {
//   return <MyComponent />;
// };

// import React from "react";
// import MyComponent from "./MyComponent";

// const App = () => {
//   return <MyComponent name="민은지" name2="몽실이" />;
// };

import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name={"숫자 넣으면 오류 메세지"}>리액트</MyComponent>;
};

export default App;
//다른 파일에서 import할 때 위에서 선언한 App Class를 불러오도록 설정함.
