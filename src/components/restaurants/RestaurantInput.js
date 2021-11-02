import React, { Component } from 'react';

class RestaurantInput extends Component {

  state={
    text: ""
  }

  handleSubmit= (e) =>{
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });

  }

  handleChange = (e) => {
    this.setState({text: e.target.value})

  }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
          <input  
          value= {this.state.text}
          onChange= {this.handleChange}/>

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
