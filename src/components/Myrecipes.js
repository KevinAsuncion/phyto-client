import React, { Component } from 'react';
import './Myrecipes.css'
import Recipelist from './Recipelist'


export default class Myrecipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables ",
                    recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 2",
                    recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 3",
                    recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
                },
                {
                    image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
                    title: "Roasted Vegetables 4",
                    recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
                }
            ]
        }
    }
    render() {
        const { recipes } = this.state
        return (
            <div className="myrecipes-container">
                <div className="results-container">
                    <Recipelist recipes={recipes} type="myrecipes"/>
                </div>
            </div>
        );
    }
}