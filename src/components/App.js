import React from 'react';
import SearchBar from './SearchBar';



class App extends React.Component{
onSubmitmethod(term){
console.log(term);
}
  render(){
  return <div className ="ui container" style = {{marginTop:'10px'}}>
            <SearchBar searchprops ={this.onSubmitmethod}/>
        </div>
  }
}

export default App;