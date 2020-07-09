
import MacroCalc from '../Components/MacroCalc'
import React from 'react';

const MainContainer = () => {
    return (
        <div className='home_container'>
            <h1> BMR, TDEE, & Macro Calculator</h1>
            <h4> To calculate your BMR, TDEE & daily calorie and macro goals, simply fill out the information on the calculator below! </h4>
            <MacroCalc/>
        </div>
    );
};

export default MainContainer;

// class MainContainer extends Component {
//     render() {
//         return (
//             <div className='home_container'>
//                 <h1> BMR & TDEE Calculator</h1>
//                 <h4> To calculate your BMR, TDEE & daily calorie and macro goals, simply fill out the information on the calculator below! </h4>
//                 <MacroCalc/>
//             </div>
//         )
//     }
// }

// export default MainContainer
