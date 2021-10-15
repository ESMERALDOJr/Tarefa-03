import React from 'react';

class Cachorro extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nome:"Olaf"
    }
  }
  render() {
    const {nome} = this.state;
    return(
      <h1><i>Eu sou um Cachorro e meu nome é </i> {nome}.</h1>
    )
  }
}
export default Cachorro;