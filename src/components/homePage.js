var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Blog Administration</h1>
                <p>React, react router, and Flux for ultra-responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;