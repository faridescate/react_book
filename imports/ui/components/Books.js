import React from 'react';

export default Books = React.createClass({
  getInitialState(){
    return{
      activeTab: 'read'
    }
  },
  isActiveTab( tab ){
    return this.state.activeTab === tab ? "active" : "";
  },
  setActiveTab( event ){
    this.setState({
      activeTab: event.target.getAttribute('data-tab')
    });
  },
  render() {
    return (
      <div className="Books">
        <h4>{`${this.props.firstName}'s`} Books </h4>

        <ul className="tabs clearfix">
          <li onClick={this.setActiveTab} className={`tab ${this.isActiveTab('read')}`} data-tab="read">Read</li>
          <li onClick={this.setActiveTab} className={`tab ${this.isActiveTab('unread')}`} data-tab="unread">Unread</li>
        </ul>

        <div className="tabs-data">

          <div id="read-books" className={`BooksList ${this.isActiveTab('read')}`}>
            <ul className="books">
              {this.props.readBooks.map((book) => {
                return (<li key={book.title} className="Book">{book.title} by {book.author} </li> );
              })}
            </ul>
          </div>

          <div id="read-books" className={`BooksList ${this.isActiveTab('unread')}`}>
            <ul className="books">
              {this.props.unreadBooks.map((book) => {
                return (<li key={book.title} className="Book">{book.title} by {book.author} </li> );
              })}
            </ul>
          </div>

        </div>
      </div>
    );
  }
});
