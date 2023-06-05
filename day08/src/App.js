import React from 'react';
import Color from './component/color/Color';
import Count from './component/count/Count';
import Animal from './component/animal/Animal';

const App = () => {
  return (
    <div>
      <Color />
      <hr />
      <Count />
      <hr />
      <Animal />
    </div>
  );
};

export default App;