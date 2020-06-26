import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class MacroCalc extends Component {

    
    
    render() {
        return (
            <div className='macro_calc'>
                <h2> BMR & MacroCalc</h2>
                <div className='inputs_container'>
                    <h5> To calculate your daily calorie and macro goals, simply fill out the information on the calculator below! </h5>
                            <br/>
                            <h4>Choose your Gender</h4>
                            <select  class= 'input' name='' placeholder='Gender'>
                                <option value=''>Select</option>
                                <option value='male'>Male</option>
                                <option value='female'm>Female</option>
                            </select>
                            <h4>Enter Age</h4>
                            <input  class='input' type='number' name='' placeholder='Age'></input>
                            <h4>Enter Weight</h4>
                            <input class='input' type='number' name='' placeholder='Weight (lbs)'></input>
                            <h4>Exercise Level</h4>
                            <select  class= 'input' name='' placeholder='Exercise Level'>
                                <option value=''>Select</option>
                                <option value='male'>Sedentary (No Exercise)</option>
                                <option value='female'm>Moderate (3x-4x Per Week)</option>
                                <option value='female'm>Active(5x+ Per Week)</option>
                            </select>
                            <h4>Primary Goal</h4>
                            <select  class= 'input' name='' placeholder='Primary Goal'>
                                <option value=''>Select</option>
                                <option value='male'>Loose Weight</option>
                                <option value='female'm>Gain Weight </option>
                                <option value='female'm>Recomp</option>
                            </select>
                            <br/>
                            <button class='input'>Submit</button>
                </div>
                {/* <div className='macro_results'>
                    <div className='test'>div 2</div>
                </div> */}
            </div>
        );
    }
}

export default MacroCalc;