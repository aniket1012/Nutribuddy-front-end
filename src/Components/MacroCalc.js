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

        biometrics: {
            available: false,
            bmr: null,
            tdee: null,
            calories: null,
            protein: null,
            carbohydrates: null,
            fat: null,
        }
       
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
         var form = document.querySelector('.macro_form')

        let bmr, tdee, calories, protein, carbohydrates, fat

        if(this.state.gender === 'male'){
            bmr = (10 * (this.state.weight *  0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) + 5
        } else if ( this.state.gender === 'female'){
            bmr = (10 * (this.state.weight * 0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) - 161
        }
        
        tdee = bmr * parseFloat(this.state.exerciseLevel)

        if(this.state.goal === 'recomp'){
            calories = tdee
            protein = (calories * .3)/4
            carbohydrates = (calories * .4)/4
            fat = (calories * .3)/9
        }else if(this.state.goal === 'lose'){
            calories = tdee - (tdee * 0.25)
            protein = (calories * .3)/4
            carbohydrates = (calories * .4)/4
            fat = (calories * .3)/9
        } else if(this.state.goal === 'gain'){
            calories = tdee + (tdee * 0.25)
            protein = (calories * .3)/4
            carbohydrates = (calories * .4)/4
            fat = (calories * .3)/9
        }

          this.setState({
            biometrics:{
                available: !this.state.available,
                bmr: bmr.toFixed(2),
                tdee: tdee.toFixed(2),
                calories: calories.toFixed(2),
                protein: protein.toFixed(2),
                carbohydrates: carbohydrates.toFixed(2),
                fat: fat.toFixed(2),
            }
          })

          form.reset()

    }
    
    render() {
        console.log(this.state)
        return (
            <div className='macro_container'>

                <div className='macro_calc'>
                    {/* <h5> To calculate your daily calorie and macro goals, simply fill out the information on the calculator below! </h5> */}
                    <form className='macro_form' onSubmit={this.handleSubmit}>
                        <div className='inputs_container'>
                            <h4>Gender</h4>
                            <select  className= 'inputs' name='gender' placeholder='Gender' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            <h4>Enter Age</h4>
                            <input  className='inputs' type='number' name='age' placeholder='Age' onChange={this.handleChange}/>
                            <h4>Enter Weight</h4>
                            <input className='inputs' type='number' name='weight' placeholder='Weight (lbs)' onChange={this.handleChange}/>
                            <h4>Enter Height</h4>
                            <input className='inputs' type='number' name='height' placeholder='Height (in)' onChange={this.handleChange}/>
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
                            <button className='inputs' type='submit' style={{backgroundColor: 'grey', color: 'white', fontSize:'20px'}}>Submit</button>
                        </div>
                    </form>
                </div>

                <div className='macro_results'>
                    {(this.state.biometrics.available) ? 
                    <div className='test'>
                        <h2 >Basel Metabolic Rate (BMR)</h2>
                        <p>{this.state.biometrics.bmr} Calorie/Day</p>
                        <br/>
                        {/* <br/> */}
                        <h2>Total Daily Energy Expenditure (TDEE)</h2>
                        <p>{this.state.biometrics.tdee}Calories/day</p>
                        <br/>
                        {/* <br/> */}
                        <h2>Daily Calorie Consumption</h2>
                        <p>{this.state.biometrics.calories}Calorie/Day</p>
                        <br/>
                        {/* <br/> */}
                        <h2>Daily Protein Consumption</h2>
                        <p>{this.state.biometrics.protein}Grams/Day</p>
                        <br/>
                        {/* <br/> */}
                        <h2>Daily Carbohydrates Consumption</h2>
                        <p>{this.state.biometrics.carbohydrates}Grams/Day</p>
                        <br/>
                        {/* <br/> */}
                        <h2>Daily Fats Consumption</h2>
                        <p>{this.state.biometrics.fat}Grams/Day</p>
                    </div>  
                    :  
                    <div className='test'>{this.state.biometrics.bmr} <h1>NO BMR</h1></div>}
                    
                </div>

            </div>
        );
    }
}

    function mapStateToProps(state){
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