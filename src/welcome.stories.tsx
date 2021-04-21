import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 miniui 组件库</h1>
        <p>miniui 是个人为练习react打造的一套组件库，从零到一去学习组件库的搭建</p>
        <h3>安装试试</h3>
        <code>
          npm install miniui --save
        </code>
      </>
    )
  }, { info : { disable: true }})