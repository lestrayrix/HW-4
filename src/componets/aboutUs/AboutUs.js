import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state={
            boo: true,
        }
    }

    handleClick = () =>{
        this.setState({
            boo: !this.state.boo
        })
    }

    render() {
        return (
            <div>
                {this.state.boo
                    ?
                    <p>Текст</p>
                    :
                    null
                }
                <button onClick={this.handleClick}>Включить/выключить</button>
            </div>
        );
    }
}

export default AboutUs;