import React, { useContext, FunctionComponent } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import {FunctionComponentElement} from 'react'

export interface SubMenuProps {
    index ?: number;
    title: string;
    className ?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index == index
    })
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
        })
    }
    return (
        <li key={index} className={classes}>
            <div className="submenu-title">
                {title}
            </div>
        </li>
    )
}