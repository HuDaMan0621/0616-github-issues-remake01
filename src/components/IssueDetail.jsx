import React, { Component } from 'react'
import open from './open.png';
import closed from './closed.png';
const ReactMarkdown = require('react-markdown')

console.log(open);
console.log(closed);

export default class IssueDetail extends Component {
    constructor(props) {  
        super(props);

        this.state = {
            loading: true,
            detail: {},
        }
    }

    componentDidMount() {
        const { issueNumber } = this.props.match.params; //{/* assign the information */}
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`) // {/* a template string is needed */}
            .then(res => res.json()) //get the data and pass it into json 
            .then(data => {           // then pass the json into data 
                this.setState({         //will update the state and re-render 
                    detail: data,
                    loading: false,  //we set this to false so the return on line 32 will run.
                });    //lastly, set the data into this State. 
            })
    }

    render() {  
        if (this.state.loading) {
            return <span> Loading Issue...</span> //we can make a component.. when it's loading, it displays a loading icon.. 
        } 
        console.log(this.state.detail);
        const { title, number, body, user} = this.state.detail; //we can deconst it
        let { state } = this.state.detail;


        return (
            <>
            <div>
                <p style={{height:'25px', fontSize:"26px !important", fontWeight:"400"}}>{title} <span style={{ color: '#ccc' }}> #{number} </span></p> {/* so it looks nicer here */}
                {}
        <p style={{}}> {state === "closed" ? <img src={closed} /> :  <img src={open}/> }</p>
                <h2>{user.login} <span style={{ color: '#ccc' }}></span></h2>
                <h2><span style={{ color: '#ccc' }}>  #{body}</span></h2>

                <a href ={user.url}>user url here</a>
            </div>
            </>
        )

    }
}
