import React from 'react';

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["La Fraiseraie", "Ice Dream", "Amorino"],
            item: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({item: event.target.value});
    }

    handleSubmit(event) {
        this.setState(previousState => ({
            list: [...previousState.list, this.state.item]
        }));
        event.preventDefault();
    }

    render () {
        return (
            <div id="shops" className="page-break pad1">
                <h2>Ice Cream Shops</h2>
                <p>Use this as a place to note down your favourite places to get ice cream:</p>
                <ul>
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label>Add a place: </label>
                    <input value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">+ add</button>
                </form>
            </div>
        );
    }
}

export default Shops;
