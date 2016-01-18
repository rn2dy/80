var _ = require('lodash');
var React = require('react');

var classNames = require('classnames');

var HeaderBar = React.createClass({
  getInitialState: function() {
    return {
      chatter: { id: 2, nickName: 'Solo', active: true },
      friends: [
        { id: 2, nickName: 'Solo', active: true },
        { id: 3, nickName: 'SkyWalker', active: true },
        { id: 4, nickName: 'Darth Vader', active: false }
      ],
      showFriends: false
    };
  },

  toggleFriends: function() {
    this.setState({showFriends: !this.state.showFriends});
  },

  render: function() {
    var friendList = _.map(this.state.friends, function(friend) {
      var statusClassNames = classNames({
        'status': true,
        'online': friend.active,
        'offline': !friend.active
      });
      return (
        <div key={friend.id} className="friend-item">
          <span className={statusClassNames}></span>
          <span className="name">{friend.nickName}</span>
        </div>
      );
    });

    var statusClassNames = classNames({
      'status': true,
      'online': this.state.chatter.active,
      'offline': !this.state.chatter.active
    });

    var friendsClassNames = classNames({
      'dropdown-list': true,
      'show': this.state.showFriends
    });

    return (
      <div className="header-bar">
        <div className="chatter">
          <span className={statusClassNames}></span>
          <span className="name">{this.state.chatter.nickName}</span>
        </div>
        <div className="friend-list dropdown">
          <div className="dropdown-header" onClick={this.toggleFriends}>
            <i className="fa fa-caret-down"></i>Friends
          </div>
          <div className={friendsClassNames}>{friendList}</div>
        </div>
      </div>
    );
  }
});

module.exports = HeaderBar;
