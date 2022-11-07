import React, {Component} from 'react';

class PortfolioPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            works: []
        }
    }

    oneClick = () => {
        this.setState({
            works: ["Work1", "Work2",'work3']
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.oneClick}>get</button>
                <ul>
                    {
                        this.state.works.map(elem => <li>{elem}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default PortfolioPage;