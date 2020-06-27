import React, { Component } from 'react';
import { connect } from 'react-redux'



class MacroCalc extends Component {

    state = {
        form: {
            gender: null,
            age: null,
            weight: null,
            exerciseLevel: null,
            goal: null,
        }
    }
    
    // handleInputs = (event) => {
    //     this.setState({
    //         gender: event.target.value 
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        console.log( this.state)
        return (
            <div className='macro_calc'>
                <h2> BMR & MacroCalc</h2>
                <div className='inputs_container'>
                    <h5> To calculate your daily calorie and macro goals, simply fill out the information on the calculator below! </h5>
                            <br/>
                            <h3>{this.props.count}</h3>
                            <h4>Gender</h4>
                            <select  className= 'inputs' name='gender' placeholder='Gender' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            <h4>Enter Age</h4>
                            <input  className='inputs' type='number' name='age' placeholder='Age' onChange={this.handleChange}></input>
                            <h4>Enter Weight</h4>
                            <input className='inputs' type='number' name='weight' placeholder='Weight (lbs)' onChange={this.handleChange}></input>
                            <h4>Exercise Level</h4>
                            <select  className= 'inputs' name='exerciseLevel' placeholder='Exercise Level' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='male'>Sedentary (No Exercise)</option>
                                <option value='female'>Moderate (3x-4x Per Week)</option>
                                <option value='female'>Active(5x+ Per Week)</option>
                            </select>
                            <h4>Primary Goal</h4>
                            <select  className= 'inputs' name='goal' placeholder='Primary Goal' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='male'>Loose Weight</option>
                                <option value='female'>Gain Weight </option>
                                <option value='female'>Recomp</option>
                            </select>
                            <br/>
                            <button className='inputs' onClick={this.props.incrementLikes}>Submit</button>
                </div>
                {/* <div className='macro_results'>
                    <div className='test'>div 2</div>
                </div> */}
            </div>
        );
    }
}

    function mapStateToProps(state){
        console.log(state)

        return {
            count: state.count
        }
    }

    function mapDispatchToProps(dispatch){


        return {
            incrementLikes: () =>{
                dispatch({type: 'LIKE'})
            }
        }
    }





export default connect(mapStateToProps, mapDispatchToProps)(MacroCalc);