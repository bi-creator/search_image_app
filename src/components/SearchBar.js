import React from "react";



class Searchbar extends React.Component{
   state={trem:'Images'};
   onFormsubmit=(event)=>{
    event.preventDefault();
    this.props.onsub(this.state.trem);
   }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormsubmit} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                    <input type='text' value={this.state.trem} onChange={e=>{this.setState({trem:e.target.value})}}></input>
                    </div>
                </form>
            </div>
        );
    };
};



export default Searchbar;