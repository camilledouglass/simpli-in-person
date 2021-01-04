import React from 'react';

class ItemsComponent extends React.Component{
  state={items:[]};
  getItems(p){
    var fruits=['Apple', 'Banana', 'Apricot', 'Cherry', 'Grape', 'Mango'];
    var vegetables=['Carrot', 'Onion', 'Romaine Lettuce', 'Summer Squash', 'Celery', 'Eggplant'];
    if (p==='fruits') this.setState({fruits:fruits, heading: "List of Fruits", msg:`Count of fruits: ${fruits.length}`})
    else if (p==='vegetables') this.setState({vegetables:vegetables, heading: "List of Vegetables", msg:`Count of vegetables: ${vegetables.length }`});
  }
  render(){
    return(
      <div>
        <h2>Items Component</h2>
        <button onClick={()=>this.getItems("fruit")}>Show Fruits</button>
        <button onClick={()=>this.getItems("vegetables")}>Show Vegetables</button>
        <ol>
        {this.state.items.map(i => <li>{i}</li>)}
        </ol>
      </div>
    )
  }
}

export default ItemsComponent;