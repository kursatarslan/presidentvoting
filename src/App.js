import React, { Component } from 'react';
import './App.css';
import List from './List'

const list = [
  {
    id: 0,
    name: 'Recep Tayyip Erdoğan',
    votes: 0
  },
  {
    id: 1,
    name: 'Mansur Yavas',
    votes: 0
  },
  {
    id: 2,
    name: 'Ekrem İmamoğlu',
    votes: 0
  },
  {
    id: 3,
    name: 'Burhan Kuzu',
    votes: 0
  },
  {
    id: 4,
    name: 'Yılmaz Vural',
    votes: 0
  }
]

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    this.setState({ members: list });
  }

  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        console.log(member.id);
        console.log(member.votes);
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
        
      } else {
        return member;
      }
    });
  
    this.setState({
      members: updatedList
    });
  };

  render() {
    return (
      this.state.members.map(member => 
        <List name={member.name} key={member.id} id={member.id} votes={member.votes} onVote={this.handleEvent}/>
    ));      
    };
}
