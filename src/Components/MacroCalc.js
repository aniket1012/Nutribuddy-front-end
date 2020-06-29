import React, { Component } from 'react';
import { connect } from 'react-redux'



class MacroCalc extends Component {

    state = {
        gender: null,
        age: null,
        weight: null,
        height: null,
        exerciseLevel: null,
        goal: null,

        bmr: null,
        tdee: null,
        protein: null,
        carbohydrates: null,
        fat: null,
       
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let bmr, tdee, protein, carbohydrates, fat
        if(this.state.gender === 'male'){
            bmr = (10 * (this.state.weight *  0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) + 5
        } else if ( this.state.gender === 'female'){
            bmr = (10 * (this.state.weight * 0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) - 161 
        }
        
        tdee = bmr * parseFloat(this.state.exerciseLevel)

        

      
        console.log(bmr, tdee)
        // return bmr

    }
    
    render() {
        console.log( this.state)
        return (
            <div className='macro_calc'>
                <h1> BMR & TDEE Calculator</h1>
                <div className='inputs_container'>
                    <h4> To calculate your daily calorie and macro goals, simply fill out the information on the calculator below! </h4>
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
                            <h4>Enter Height</h4>
                            <input className='inputs' type='number' name='height' placeholder='Height (in)' onChange={this.handleChange}></input>
                            <h4>Exercise Level</h4>
                            <select  className= 'inputs' name='exerciseLevel' placeholder='Exercise Level' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='1.2'>Sedentary (No Exercise)</option>
                                <option value='1.55'>Moderate (3x-4x Per Week)</option>
                                <option value='1.725'>Active(5x+ Per Week)</option>
                            </select>
                            <h4>Primary Goal</h4>
                            <select  className= 'inputs' name='goal' placeholder='Primary Goal' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='lose'>Lose Weight</option>
                                <option value='gain'>Gain Weight </option>
                                <option value='recomp'>Recomp</option>
                            </select>
                            <br/>
                            {/* <button className='inputs' onClick={this.props.incrementLikes} style={{backgroundColor: 'black', color: 'white', fontSize:'20px'}}>Submit</button> */}
                            <button className='inputs' onClick={this.handleSubmit} style={{backgroundColor: 'black', color: 'white', fontSize:'20px'}}>Submit</button>
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