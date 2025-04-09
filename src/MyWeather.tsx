import React from 'react';
// import { Component } from 'react';

interface MyProps {
  weather: string;
  children: React.ReactNode;
}

// functional component
const MyWeather: React.FC<MyProps> = ({ weather, children }) => {
  return (
    <div>
      <p>{children}</p>
      오늘의 날씨는 {weather}입니다.
    </div>
  );
};

// class component

// class MyWeather extends Component<MyProps> {
//   render() {
//     const { children, weather } = this.props;
//     return (
//       <div>
//         <p>{children}</p>
//         오늘의 날씨는 {weather}입니다.
//       </div>
//     );
//   }
// }

export default MyWeather;
