import React, { Component } from 'react';


class Search extends Component {
    state = {
        zipCode: null,
        countryCode: null,
        
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.updateLocation(this.state);
        this.props.getWeather(this.state);
        this.setState({
            zipCode:'',
            countryCode:'',
        })
    }

    render() {
        return (
            <div className="block">
                <form className="form flex-row-space-evenly" onSubmit={this.handleSubmit}>
                    <input className="search" id="zipCode" type="text" placeholder="zip code" value={this.state.zipCode} onChange={this.handleChange} />
                    <input className="search" id="countryCode" type="text" placeholder="country code" value={this.state.countryCode} onChange={this.handleChange} />
                    <button className="btn">Search</button>
                </form>

            </div>
        )
    }


}



export default Search