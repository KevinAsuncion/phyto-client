import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requireslogin'
import Recipelist from './Recipelist'
import { getSearchResults, clearCount, getSearchRequestError} from '../actions/recipe-actions'
import './Searchpage.css'

export class Searchpage extends Component {
   
   handleSubmit(e){
       e.preventDefault();
       const str = this.input.value.trim().toLowerCase();
       const meats = ['beef','pork','fish','chicken']
       const includesMeat = meats.find(meat => {
            return str.includes(meat)
       })
       if(includesMeat){
            this.input.value = ''
            return this.props.dispatch(getSearchRequestError())
       }
       if(this.input.value !== this.props.prevSearchTerm){
           this.props.dispatch(clearCount())
           this.props.dispatch(getSearchResults(this.input.value, 0));
           this.input.value = ''
       } else {
           this.props.dispatch(getSearchResults(this.input.value, 0));
           this.input.value = ''
       }
    }

    handleShowMore(prevSearchTerm,count){
        this.props.dispatch(getSearchResults(prevSearchTerm, count)) 
    }
      
    render() {
        let error,loader,showMoreBtn,saveSuccess
        if(this.props.loading){
           loader = <div><p>Loading...</p></div>
        }
        if(this.props.error) {
            error = <div className="searchpage-error"><p>Looks like there was an error. Try your request again.</p></div>
        }      
        if (this.props.recipes.length > 0){
            showMoreBtn = <button className="show-more-button" onClick={()=>this.handleShowMore(this.props.prevSearchTerm, this.props.count)}> 
            {this.props.loading ? 'Loading...': 'Show More'} </button> 
        }
        if(this.props.saved){
            saveSuccess = <div className="save-success"><p>Recipe Saved.</p></div>
        }
        return (
            <div className="searchpage-container">
                <div className="searchbox-container">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Search for recipes"
                            ref={input => this.input = input}
                            required="required"
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form> 
                </div> 
                <div className="results-container">
                    {error}
                    {loader}
                    {saveSuccess}
                    <Recipelist recipes={this.props.recipes} type="searchrecipes"/>
                    {showMoreBtn}
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes,
    loading: state.recipe.loading,
    error: state.recipe.error,
    searched: state.recipe.searched,
    count: state.recipe.count,
    prevSearchTerm: state.recipe.prevSearchTerm,
    saved: state.recipe.saved
})


export default requiresLogin()(connect(mapStateToProps)(Searchpage));