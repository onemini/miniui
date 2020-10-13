import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled >
        cool link 2
        </MenuItem>
        <MenuItem index={2}>
        cool link 3
        </MenuItem>
      </Menu>
      
      <Button className="custom">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank" >Baidu Link</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com"  disabled>Baidu Link</Button>
    </div>
  );
}

export default App;
