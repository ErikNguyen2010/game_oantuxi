import React, { Component } from 'react'
import style from '../assets/styles/components/buble.module.css'
import OanTuTi from './OanTuTi'
export default class BTOanTuTi extends Component {
  render() {
    return (
      <div className={`${style['bg-game']} m-0 p-0` }>

          <OanTuTi/>
      </div>
    )
  }
}
