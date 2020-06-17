import React, { Component } from 'react';
import Issue from './Issue';

class IssuesList extends Component {
    constructor() {
        super();

        this.state = {  //we set state to an empty array
            issues: []
        }
    }

    componentDidMount() { //method to fetch data
        fetch('https://api.github.com/repos/facebook/create-react-app/issues') //gets the detail from this url
            .then(res => res.json()) //pass the fetched information into json file
            .then(data => {         //then passes to the workable javascript
                this.setState({
                    issues: data ? data : [] // do we have data? if so set it to the data, if not set it to the empty array [] inline if else. 
                })
            })
    }

    render() {
        return (
            <div className="IssuesList"> 
                {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)} {/* we are only returning <Issue issue={issue} key={issue.id} /> 
                this is like doing the following 
                    {this.state.issues.map((issue) => {
                        return <Issue issue={issue} key={issue.id},
                but we only have 1 item for now, we don't need he return.
                
                ### we are using the id as the key instead of the key
                ### we are passing one prop straight to the issue component
                */}

            </div>
        )
    }
};
export default IssuesList;