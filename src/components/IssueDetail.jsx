import React, { Component } from 'react'

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
                this.setState({
                    detail: data,
                    loading: false,
                });    //lastly, set the data into this State. 
            })
    }

    render() {
        if (this.state.loading) {
            return <span> Loading Issue...</span> //we can make a component.. when it's loading, it displays a loading icon.. 
        }

        const { title, number } = this.state.detail; //we can deconst it
        
        return (
            <div>
                <h1>{title} <span style={{ color: '#ccc' }}> #{number}</span></h1> {/* so it looks nicer here */}

            </div>
        )

    }
}
