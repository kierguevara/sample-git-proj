import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    // Set default state
    this.state = {
      userList: [
        {
          name: 'Edubells',
          age: 25,
          occupation: 'Gardener'
        },
        {
          name:'Thomasito',
          age: 24,
          occupation: 'Sky Diver'
        }
      ],
      user: {
        name:'',
        age:'',
        occupation: ''
      }
    };
    // Add function bindings

  }

  // Add event handlers
  handleChangeInfo = e => {
    console.log('EVENT');

    const {name,value} = e.target;

    this.setState( (prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }) );
  }

  handleAddUser = e => {
    
    console.log('PASSED HANDLE ADD USER');
    let user = this.state.user;
    let userList = [...this.state.userList];

    console.log(this.state.userList);
    userList.push(user);
    console.log(this.state.userList);

    this.setState({
      userList:userList
    });

    e.preventDefault();
    
  }

  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index,1);
    this.setState({
      userList:userList
    });
  }

  render() {
    let userList = this.state.userList;
    let user = this.state.user;

    console.log('USER LIST');
    console.log(this.state.userList);
    console.log('USER');
    console.log(user)

    return (
      <div className='App'>
        <div className='forms-panel'>
          <forms>
            Name: <br/> <input type='text' name='name' placeholder='Name' onChange={this.handleChangeInfo} /> <br/>
            Age: <br/> <input type='text' name='age' placeholder='age' onChange={this.handleChangeInfo}/> <br/>
            Occupation: <br/> <input type='text' name='occupation' placeholder='occupation' onChange={this.handleChangeInfo}/> <br/>
            <button type="button" onClick={this.handleAddUser} > Add User</button>
            <br/> <br/>
          </forms>
        </div>
        <div className='table-panel'>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th className='user-table-cell'>NAME</th>
                <th className='user-table-cell'>AGE</th>
                <th className='user-table-cell'>OCCUPATION</th>
                <th></th>
              </tr>        
              {
                userList.map((user,index) => {
                  return(
                    <tr className='user-table-row'>
                      <td className='user-table-cell'>
                        {user.name}
                      </td>
                      <td className='user-table-cell'>
                        {user.age}
                      </td>
                      <td className='user-table-cell'>
                        {user.occupation}
                      </td>
                      <td className='user-table-cell'>
                        <button type="button"
                          onClick={() => this.deleteUser(index)}>DELETE USER
                        </button>
                      </td>
                    </tr>
                  )
                })
              }    
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default App;
