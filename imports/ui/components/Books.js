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
              <li>Liminal Thinking by Dave Gray</li>
              <li>Personal History by Katharine Graham</li>
              <li>Bonr Standing Up by Steve Martin</li>
            </ul>
          </div>

          <div id="read-books" className={`BooksList ${this.isActiveTab('unread')}`}>
            <ul className="books">
              <li className="book">The Course of Love by Alain De Botton</li>
              <li className="book">Too Soon Old, Too Late Smart by Gordon Livingston</li>
              <li className="book">Servant Leadership by Robert K. Greenleaf</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
});
