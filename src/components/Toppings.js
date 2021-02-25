import React from "react";
import Select from 'react-select';

const options = [
  { value: 'raspberry-coulis', label: 'Raspberry coulis' },
  { value: 'coconut-shavings', label: 'Coconut shavings' },
  { value: 'salted-butter-caramel-chip', label: 'Salted butter caramel chips' },
];

class Toppings extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div id="toppings" className="page-break pad1">
        <h2>Ice Cream Topping</h2>
        <p>Pick your favorite ice cream flavour:&nbsp;</p>
        <Select
          id="select-toppings"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

  export default Toppings;
