var React = require('react');
var {Link, IndexLink}=require('react-router'); /*stvara varijablu Link koja dodaje linkkove*/

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Nav component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
            </div>
        );
    }
});
module.exports = Nav;