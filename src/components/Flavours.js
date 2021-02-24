import React from "react";

class Flavours extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'cranberry'};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
      return (
          <div id="flavours" className="page-break pad1">
            <h2>Ice Cream Flavours</h2>
            <label>
                Pick your favorite ice cream flavour:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    <option value="blackcurrant">Blackcurrant</option>
                    <option value="rasberry">Rasberry</option>
                    <option value="cranberry">Cranberry</option>
                </select>
            </label>
            <p>Your flavour of choice is: <strong>{this.state.value}</strong></p>
        </div>
      );
    }
  }

  export default Flavours;
