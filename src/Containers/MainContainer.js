import React, { Component } from 'react'
import MacroCalc from '../Components/MacroCalc'

class MainContainer extends Component {
    render() {
        return (
            <div className='home_container'>
                <h1> BMR & TDEE Calculator</h1>
                <MacroCalc/>
            </div>
        )
    }
}

export default MainContainer
