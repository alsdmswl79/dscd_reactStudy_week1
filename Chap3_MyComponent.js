//화살표 함수 문법 ()=> {} 으로 함수형 컴포넌트 생성
// import React from "react";

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };
//function 키워드 사용하지 않고 함수형 컴포넌트 생성함.
//화살표 함수는 functuon함수와 다르다. (parameter)=>{}; 가 함수인듯

// import React from "react";

// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>안녕하세요. 제 이름은 {props.name}입니다.</h1>;
//       <h2>안녕하세요. 제 동생 이름은 {props.name2}입니다.</h2>;
//     </div>
//   );
// };

// import React from "react";

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다.
//       <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };
// //태그 사이의 내용을 보여주는 probs임.
// MyComponent.defaultProps = {
//   name: "기본이름",
// };
// //디폴트 Component.defaultProps지정

// import React from "react";
// //const MyComponent =({name, children})=>{ 비구조화 할당 문법
// //: 객체에서 값을 추출한다
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}
//       입니다.
//     </div>
//   );
// };
// //태그 사이의 내용을 보여주는 probs임.
// MyComponent.defaultProps = {
//   name: "기본이름",
// };
// //디폴트 Component.defaultProps지정

// import React from "react";
// import PropTypes from "prop-types";

// const MyComponent = ({ name, children, favoriteNumber }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children값은 {children}입니다. 제가 좋아하는 숫자는 {favoriteNumber}
//       입니다.
//     </div>
//   );
// };
// MyComponent.defaultProps = {
//   name: "기본이름",
// };
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };
//prop type을 지정함.
//name > string이 아닌 값이 들어와도 출력은 되지만, 오류 메세지 발생
//favoriteNumber: 값이 지정되지 않으면 오류 메세지.

//클래스형 컴포넌트에서 props사용하기
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// class MyComponent extends Component {
//   render() {
//     const { name, favoriteNumber, children } = this.props; //비구조화 할당
//     return (
//       <div>
//         안녕하세요, 제 이름은 {name}입니다. <br />
//         children값은 {children}입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }
// MyComponent.defaultProps = {
//   name: "기본이름",
// };
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

//클래스 내부에 prop type및 default 값 지정하기
import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    //클래스 내부에 default지정
    name: "기본이름",
  };
  static propTypes = {
    //클래스 내부에 default지정
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponent;
//probs는 n개의 매개변수, component를 return할 때 name= "" name2="" 라고 넣으면 출력된다.
