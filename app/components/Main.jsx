var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});
module.exports = Main;
/*{this.props.children} pozicionira children element, moze da stoji gde god postoji pozicija maina; To je od React-router-a*/

