import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'
library.add(fas)

const App: React.FC = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}} mode="horizontal" defaultOpenSubMenus={[ '2' ]}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled >
          cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
        <MenuItem>
        dropdown 1
        </MenuItem>
        <MenuItem>
        dropdown 2
        </MenuItem>
        </SubMenu>
        <MenuItem>
        cool link 3
        </MenuItem>
      </Menu>
      <Button size='lg' onClick={() => { setShow(!show) }}>
        Toggle
      </Button>
      <Transition
        in = {show}
        timeout = {300}
        animation = "zoom-in-top"
      >
      <div>
        <p>测试动画1</p>
        <p>测试动画1</p>
        <p>测试动画1</p>
        <p>测试动画1</p>
      </div>
      </Transition>
      <Transition
        in = {show}
        timeout = {300}
        animation = "zoom-in-left"
        wrapper
      >
      <Button btnType='primary' size='lg'>测试动画</Button>
      </Transition>
    </div>
  );
}

export default App;
