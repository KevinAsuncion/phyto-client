import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Myrecipes.css';
import Recipelist from './Recipelist';

export class Myrecipes extends Component {
    
    render() {
        return (
            <div className="myrecipes-container">
                <div className="results-container">
                    <Recipelist recipes={this.props.myRecipes} type="myrecipes"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    myRecipes: state.favoriteRecipes
})

export default connect(mapStateToProps)(Myrecipes)