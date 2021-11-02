import React, { Component } from 'react';


class ReviewInput extends Component {

  state={
    text: ""
  }

  handleSubmit= (e) =>{
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
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
          <input type="submit"/>
        </form>

      </div>
    );
  }
};

export default ReviewInput;
