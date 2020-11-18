import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
library.add(fas)

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <Icon icon="coffee" theme="primary" size="10x" />
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
      
      <Button className="custom">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank" >Baidu Link</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com"  disabled>Baidu Link</Button>
    </div>
  );
}

export default App;
