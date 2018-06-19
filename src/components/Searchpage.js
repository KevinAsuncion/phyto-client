import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requires-login'
import Recipelist from './Recipelist'
import { getSearchResults } from '../actions/recipe-actions'
import './Searchpage.css'

export class Searchpage extends Component {
  
   handleSubmit(e){
       e.preventDefault();
       this.input.value.trim();
       this.props.dispatch(getSearchResults(this.input.value));
       console.log(this.input.value)
       console.log(this.props.recipes.length)
       this.input.value = '';
   }

    render() {
        let error,loader
        if(this.props.loading){
           loader = <div><p>Loading...</p></div>
        }
        if (this.props.error) {
            error = <div><p>Looks like there was an error. Try your request again.</p></div>
        }
        return (
            <div className="searchpage-container">
                <div className="searchbox-container">
                    <form onSubmit={(e) => this.handleSubmit(e,this.props.recipes.length)}>
                        <input 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Search for recipes"
                            ref={input => this.input = input}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form> 
                </div> 
                <div className="results-container">
                    {error}
                    {loader}
                    <Recipelist recipes={this.props.recipes} type="searchrecipes"/>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes,
    loading: state.recipe.loading,
    error: state.recipe.error
})


export default requiresLogin()(connect(mapStateToProps)(Searchpage));