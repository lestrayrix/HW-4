import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor() {
        super();
        this.state={
            input: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleAdd = () => {
        console.log(this.state.input)
        this.setState({
            input: ''
        })
    }

    handleClear = () => {
        this.setState( {
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" value={this.state.input}/>
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleClear}>clear</button>
            </div>
        );
    }
}

export default ContactsPage;