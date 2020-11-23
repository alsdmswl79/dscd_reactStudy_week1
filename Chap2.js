//react 시작
// import React from 'react';
// function App(){
//     return(
//         <div>
//             <h1>리액트 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </div>
//     )
// }
// export default App;

//fragment이용하기
// import React,{Fragment} from 'react';
// function App(){
//     return(
//         <Fragment>
//             <h1>리액트 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </Fragment>
//     )
// }
// export default App;

//fragment의 다른 이용 방법
// import React from 'react';

// function App(){
//     return(
//         <>
//             <h1>리액트 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </>
//     )
// }
// export default App;

//name을 {}안에 감싸면 자바스크립트 표현식으로 작성 할 수 있다.
// import React from 'react';
// function App(){
//     const name='리액트';
//     return(
//         <>
//             <h1>{name} 안녕!</h1>
//             <h2>잘 작동하니?</h2>
//         </>
//     )
// }
// export default App;

//조건문 {조건?(true일 때 실행문):(false일 때 실행문)} >> 삼항 연산자
// import React from 'react';

// function App(){
//     const name='리액트';
//     return(
//         <div>
//             {name==='리액트'?(
//                 <h1>리액트 입니다.</h1>
//             ):(
//                 <h2>리액트가 아닙니다.</h2>
//             )};
//         </div>
//     );
// }
// export default App;

//?? null을 렌더링 하면 아무 것도 보여주지 않음.
// import React from 'react';

// function App(){
//     const name='리액트';
//     return(
//         <div>
//             {name==='리액트'?
//             <h1>리액트 입니다.</h1>:null}
//         </div>
//     )
// }
// export default App;

//&&를 이용한 조건부 렌더링 && : ~이면 이라고 생각하면 좋을 것 같다.
// import React from 'react';

// function App(){
//     const name='리액트';
//     return(
//         <div>
//             {name==='리액트'&&
//             <h1>리액트 입니다.</h1>}
//         </div>
//     )
// }
// export default App;

//값이 undefined일 경우 defined는 return할 수 없음.
// import React from 'react';

// function App(){
//     const name=undefined;
//     return name;
// }
// export default App;

//OR 연산자를 이용하여 undefined return을 방지하자
//undefined||a 면 a를 return
// import React from 'react';

// function App(){
//     const name=undefined;
//     return name||'값이 undefined입니다.';
// }
// export default App;

//JSX로 감싸주면 리턴 가능하다.
// import React from 'react';
// function App(){
//     const name=undefined;
//     return <div>{name}</div>;
// }
// export default App;

// import React from 'react';
// function App(){
//     const name='리액트'; // name 객체 생성
//     const style={ //stule 객체 생성
//         //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됨.
//         //DOM 요소에 스타일을 적용할 때에는 문자열 형태(-포함)이 아니라 객체 형태로 넣어주어야 함. -를 빼면 객체명이 된다.
//         backgroundColor:'black',
//         color:'aqua',
//         fontSize:'48px', //font-size => fontSize
//         fontWeight:'bold', //font-weight => fontWeight
//         padding:16 // 단위 생략시에는 px로 지정됨.
//     };
//     return <div style={style}>{name}</div> // style객체를 div의 style값으로 지정.
// }
// export default App;

// import React from 'react';
// function App(){
//     const name='리액트'; // name 객체 생성
//     return (
//         <div
//             style={{
//                 backgroundColor:'black',
//                 color:'aqua',
//                 fontSize:'48px', //font-size => fontSize
//                 fontWeight:'bold', //font-weight => fontWeight
//                 padding:16 // 단위 생략시에는 px로 지정됨.
//             }} //객체 생성 없이 바로 style값 지정.
//         >
//         {name}
//         </div> // style객체를 div의 style값으로 지정.
//     );
// }
// export default App;

//일반 HTML에서 CSS class를 사용시 <div class="myClass"></div>식으로 속성 설정
//JSX에서는 class가 아닌 className으로 설정해 주어야 한다.
//JSX내부에서 주석을 작성할 때
import React from "react";
import "./App.css";

function App() {
  const name = "리액트"; // name 객체 생성
  return (
    <>
      {/* <>는 fragment ; 주석은 이렇게 작성합니다.*/}
      <div className="react">{name}</div>
      //이 주석은 그대로 나타난다 /*이 주석은 그대로 나타난다. */
    </>
  );
}
export default App;

//input과 br태그는 닫지 않아도 오류가 발생하지 않는다.<input> <br>
//self-closing tag : <input /> 태그 사이 별도의 내용이 들어가지 않는 경우

//f1+format검색+enter 기본 들여쓰기 및 세미콜론 붙여 정렬해줌.
