import React from "react";

// const options = [
//   { value: 'grapefruit', label: 'Grapefruit' },
//   { value: 'lime', label: 'Lime' },
//   { value: 'coconut', label: 'Coconut' },
//   { value: 'mango', label: 'Mango' },
//   { value: 'blackcurrant', label: 'Blackcurrant' },
//   { value: 'rasberry', label: 'Rasberry' },
//   { value: 'cranberry', label: 'Cranberry' },
//   { value: 'pineapple', label: 'Pineapple' },
// ];

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
                Pick your favorite ice cream flavour:&nbsp;
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="blackcurrant">Blackcurrant</option>
                    <option value="rasberry">Rasberry</option>
                    <option value="cranberry">Cranberry</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="grapefruit">Blackberry</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <p>Your flavour of choice is:&nbsp;<strong>{this.state.value}</strong></p>
        </div>
      );
    }
  }

  // class Flavours extends React.Component {
  //
  //   state = {
  //     selectedOption: null,
  //   };
  //   handleChange = selectedOption => {
  //     this.setState({ selectedOption });
  //     console.log(`Option selected:`, selectedOption);
  //   };
  //
  //   render() {
  //     const { selectedOption } = this.state;
  //     return (
  //       <div id="flavours" className="page-break pad1">
  //         <h2>Ice Cream Flavours</h2>
  //         <label>
  //             Pick your favorite ice cream flavour:
  //           <Select
  //             value={selectedOption}
  //             onChange={this.handleChange}
  //             options={options}
  //           />
  //         </label>
  //       </div>
  //     );
  //   }
  // }

  export default Flavours;
