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
        },

        credentialError: false 
       
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const form = document.querySelector('.macro_form')

        let bmr, tdee, calories, protein, carbohydrates, fat

        if(this.state.gender === 'male' && this.state.age > 0 && this.state.weight > 0 && this.state.height > 0){
            bmr = (10 * (this.state.weight *  0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) + 5
            
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
        } else if ( this.state.gender === 'female' && this.state.age > 0 && this.state.weight > 0 && this.state.height > 0){
            bmr = (10 * (this.state.weight * 0.453592)) + (6.25 * (this.state.height * 2.54)) - (5 * this.state.age) - 161

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
        } else {
            this.setState({
                credentialError: !false 
            })
        }

          form.reset()
    }
    
    render() {
        // console.log(this.state, this.props)
        return (
            <div className='macro_container'>

                <div className='macro_calc'>
                    <form className='macro_form' onSubmit={this.handleSubmit}>
                        <div className='inputs_container'>
                            <h3>Gender</h3>
                            <select  className= 'inputs' name='gender' placeholder='Gender' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            <h3>Enter Age</h3>
                            <input  className='inputs' type='number' name='age' placeholder='Age' onChange={this.handleChange}/>
                            <h3>Enter Weight</h3>
                            <input className='inputs' type='number' name='weight' placeholder='Weight (lbs)' onChange={this.handleChange}/>
                            <h3>Enter Height</h3>
                            <input className='inputs' type='number' name='height' placeholder='Height (in)' onChange={this.handleChange}/>
                            <h3>Exercise Level</h3>
                            <select  className= 'inputs' name='exerciseLevel' placeholder='Exercise Level' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='1.2'>Sedentary (No Exercise)</option>
                                <option value='1.55'>Moderate (3x-4x Per Week)</option>
                                <option value='1.725'>Active(5x+ Per Week)</option>
                            </select>
                            <h3>Primary Goal</h3>
                            <select  className= 'inputs' name='goal' placeholder='Primary Goal' onChange={this.handleChange}>
                                <option value=''>Select</option>
                                <option value='lose'>Lose Weight</option>
                                <option value='gain'>Gain Weight </option>
                                <option value='recomp'>Recomp</option>
                            </select>
                            <br/>
                            <br/>
                            {(this.state.goal) ? 
                            <button className='btn' type='submit'>Submit</button> 
                            :
                            <p></p>}
                        </div>
                    </form>
                </div>



                <div className='macro_results'>
                    {(this.state.biometrics.available) ? 
                    <div className='results'>
                        <h2 >Basel Metabolic Rate (BMR)</h2>
                        <p>{this.state.biometrics.bmr} Calorie/Day</p>
                        <h2>Total Daily Energy Expenditure (TDEE)</h2>
                        <p>{this.state.biometrics.tdee}Calories/Day</p>
                        <br/>
                        {/* <h1>Macros</h1> */}
                        <h2>Calories</h2>
                        <p>{this.state.biometrics.calories}Calorie/Day</p>
                        <h2>Protein</h2>
                        <p>{this.state.biometrics.protein}Grams/Day</p>
                        <h2>Carbohydrates</h2>
                        <p>{this.state.biometrics.carbohydrates}Grams/Day</p>
                        <h2>Fats</h2>
                        <p>{this.state.biometrics.fat}Grams/Day</p>
                    </div>  
                    :
                    this.state.credentialError ?  
                    <div style={{color: 'red', fontSize: '30px'}}> Please Enter Valid Biometric Credentials</div>
                    :
                    <div></div>}
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