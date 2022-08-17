import React from "react";


class Imagecard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans: 0}
        this.imageref=React.createRef();

    }
    componentDidMount(){
        this.imageref.current.addEventListener('load',this.Setspans)
    }


    Setspans=()=>{
        const height=this.imageref.current.clientHeight
        const spans=Math.ceil(height/10)
        this.setState({spans})
    }
    render(){
        const {discription,urls}=this.props.img
        return(
            <div style={{gridRowEnd :`span ${this.state.spans}`}}>
                <img ref={this.imageref} alt={discription} src={urls.regular}></img>
            </div>
        );
    }
}

export default Imagecard;