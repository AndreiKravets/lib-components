import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Col, Container, Row } from '../../my-lib/layout';
import { Avatar, Image } from '../../my-lib/components/image';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';
import { LHeader } from '../../my-lib/sections/header';
import { Button } from '../../my-lib/components/buttons';
import { Theme } from '../store/theme';
import { Swich, SwitchWrapper } from '../../my-lib/components/switcher';


const menuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]
const Header = () => {

  const [switchBtn, setSwitchBtn] = useState(true)

  return (
    <LHeader minH='86px'>
      <Row alignitems='center' sx='height:100%' p='20px 40px'>
        <Menu>
          {
            menuItems.map((e) => (
              <MenuItem key={e.link} fs={'18px'} color={'white'} ls={'1px'} mr={'20px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
            ))
          }
        </Menu>
        {
          switchBtn ?
          <Button>purple theme</Button>
          : false
        }
        

        <SwitchWrapper active={`${switchBtn}`} onClick={() => (setSwitchBtn(!switchBtn), Theme.setCurrentTheme(switchBtn))}>
           <Swich/>
        </SwitchWrapper>
      </Row>
    </LHeader>
  )
}
export default Header


