import React from 'react';

class MyComponent1 extends React.Component {
  fruits=['Grapes', 'Apricots','Cantaloupe', 'Cherry'];
  constructor() {
    super();
    this.vegetables = ['Cabbage', 'Carrot', 'Eggplant'];
  }
    render() {
    return <div>
      <h1>List of Fruits</h1>
      <ol>
        {this.fruits.map(f => <li>{f}</li>)}
      </ol>
      <h1>List of Vegetables</h1>
      <ul>
        {this.vegetables.map(v => <li>{v}</li>)}
      </ul>
    </div>
  }
}

export default MyComponent1;