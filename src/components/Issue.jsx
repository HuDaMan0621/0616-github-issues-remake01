import React from 'react';
import moment from 'moment';

import Label from './Label';

import './Issue.css';


//abstract code is beneficial when used more than once. ie, getUserLink used 3 times here.
function getUserLink(user) {
    return <a href={user.url}>{user.login}</a>  //the userlink function returns a link with user.url and user.login.
};

function getRelativeTime(time) {   //whatever time we get, it will pass it into moment.utc, 
    return moment.utc(time).fromNow(); //whatever time it is, the fromNow function will calculate that.  15 sec ago/3 hours ago. 
}

function getMetaFragment(issue) {
    const { number, state, created_at, closed_at, user } = issue
};

function Issue(props) {
    const { issue } = props;

    return (   //takes the issue data off the props and returns jsx
        <div className="Issue">
            <div className="Issue__icon">

            </div>
            <div className="Issue__details">
                <a href={issue.html_url} className="Issue__link"> {issue.title} </a>
                <div className="Issue__labels">
                    {issue.labels.map(label => <Label label={label} key={label.id} />)} 
                </div>
                <div className="Issue_meta">
                    {getMetaFragment(issue)} 
                    {/* it pulls all the information from line 16 umber, state, 
                    created_at, closed_at, user , it first checks the if statement, 
                    if it's open, it returns the first if statement, else, returns the 2nd, 
                    this is the way to get around the "only 1 parent element returns from the JSX function"
                    we can then later add childrens to the function. 
                    */}
                </div>
            </div>
        </div>
    )
};

export default Issue;