import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requires-login'
import Recipelist from './Recipelist'
import { getSearchResults } from '../actions/recipe-actions'
import './Searchpage.css'

export class Searchpage extends Component {
  
   handleSubmit(e){
       e.preventDefault();
       this.props.dispatch(getSearchResults());
       this.textInput.value = '';
   }
   
    render() {
        return (
            <div className="searchpage-container">
                <div className="searchbox-container">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Search for recipes"
                            ref={input => this.textInput = input}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form> 
                </div> 
                <div className="results-container">
                    <Recipelist recipes={this.props.recipes} type="searchrecipes"/>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
})

export default requiresLogin()(connect(mapStateToProps)(Searchpage));