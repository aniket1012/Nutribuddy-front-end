import React, { Component } from 'react'
import MacroCalc from '../Components/MacroCalc'

class MainContainer extends Component {
    render() {
        return (
            <div className='home_container'>
                <MacroCalc/>
                <div className='test'>div 2</div>
            </div>
        )
    }
}

export default MainContainer
