import React from 'react';

class Bola extends React.Component {
  constructor(material) {
    super(material);
    this.state={
      material:"couro"
    }
  }
  render() {
    const {material} = this.state;
    return(
      <h1><i>Eu tenho uma bola de </i> {material}.</h1>
    )
  }
}
export default Bola;