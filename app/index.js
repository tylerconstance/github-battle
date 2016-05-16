var USER_DATA = {
  name: 'Tyler Constance',
  username: 'tylerconstance',
  image: 'https://avatars2.githubusercontent.com/u/10621773?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

// Think FIRST
/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href="{'https://www.github.com/'">{this.props.username}</a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

// Note that the return value must be wrapped in a single element
var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
