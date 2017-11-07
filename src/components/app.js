import React, { Component } from 'react';

class App extends Component {
    /*
        Life Cycle Methods ( Mounting )
            1. constructor()
            2. componentWillMount()
            3. render()
            4. componentDidMount()

        Life Cycle Methods ( Updating )
            1. constructor(props, context)
            2. componentWillReceiveProps(nextProps, nextContext)
            3. shouldComponentUpdate(nextProps, nextState, nextContext)
            4. componentWillUpdate(nextProps, nextState, nextContext)
    */

    render() {
        return(
            <div>
                <h1>fafaz-react-boilerplate</h1>
            </div>
        );
    }
}

export default App;
