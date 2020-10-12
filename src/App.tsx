import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button className="custom">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank" >Baidu Link</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com"  disabled>Baidu Link</Button>
    </div>
  );
}

export default App;
