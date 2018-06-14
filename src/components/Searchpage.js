import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Searchpage.css'
import Recipelist from './Recipelist'

export class Searchpage extends Component {
   //TODO handleSubmit => console.log(value)
//    handleSubmit()
    render() {
       
        return (
            <div className="searchpage-container">
                <div className="searchbox-container">
                    <form>
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Search for recipes"
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
    recipes: state.recipes
})

export default connect(mapStateToProps)(Searchpage);