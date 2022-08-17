import React from "react";
import unsplash from "../Api/unsplash";
import Searchbar from "./SearchBar";
import Imagelist from "./imagelist";


class App extends React.Component{
    state={images:[]};
     fromchild=async(term)=>{
      //  console.log(term)
       const resp= await unsplash.get('/search/photos',{
        params:{query:term},
         } )
      //  console.log(resp.data.results);
       this.setState({images:resp.data.results})
    }
    render(){
            return(
                <div  
                className=" ui container" style={{marginTop:'10px'}} ><Searchbar onsub={this.fromchild}/>
                <Imagelist list={this.state.images}/>
                </div>
            );
            }
            
}


export default App ;