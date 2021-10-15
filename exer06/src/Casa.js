import React from 'react';
import Porta from './Porta';
import Janela from './Janela';

class Casa extends React.Component {
    render() {
        return (
            <div>

                <h1>Eu sou uma casa.</h1>
                <Janela />
                <Porta />
                
            </div>
        );
    }
}

export default Casa;