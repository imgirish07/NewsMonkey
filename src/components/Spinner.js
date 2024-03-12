import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Spinner extends Component {
  render() {
    return (

      <div >
        <img src={Loading} alt="Loading"  style={{height:'50px', width:'50px'}}/>
      </div>
    )
  }}   


export default Spinner