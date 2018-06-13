import React, { Component } from 'react';
import './Searchpage.css'
import Recipelist from './Recipelist'

export default class Searchpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: [
                {
                    image_url:"https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 1"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 2"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 3"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 4"
                }
            ]
        }
    }
    render() {
        const {recipes} = this.state 
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
                    <Recipelist recipes={recipes}/>
                </div> 
            </div>
        );
    }
}