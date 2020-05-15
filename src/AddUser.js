import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
     state = {
        user: {
          firstName: '',
          lastName: '',
          username: '',
        },
    };
	clearInput = () =>{
      	console.log(document.getElementById("fName").value);
      	//document.getElementById("fName").value='';
      	//document.getElementById("fName").setAttribute('value','');
    }
	checkUser = (currentuser) =>{
    	let flagy=true;
      	this.props.users.map((user)=>{
        	if(user.username===currentuser.username)flagy=false;
          	return false
        })
      	return flagy;
    }
	submitUser = event =>{
      	event.preventDefault();
      	//console.log("zovem metodu "+this.checkUser(this.state.user)) ;
      	if(this.checkUser(this.state.user)===false){
          	window.alert("Username already exsists !!! ");
          	this.clearInput();
        	return;
        }
    	this.props.createNewUser(this.state.user);
      	this.clearInput();
    }
		
	updateText = event => {
      	const { name, value } = event.target;
    	this.setState(currState => ({
      		...currState,
      		user: {
        		...currState.user,
        		[name]: value,
      		},
    	}));
    }
 
	isDisabled = () => {
    	const { firstName, lastName, username } = this.state.user;
      	return firstName === '' || lastName === '' || username === '';
    }

	render(){
      	const { firstName, lastName, username } = this.state.user;
  		return(
    		<div>
            <h1>New User</h1>
            <form onSubmit={this.submitUser} id="userForm">
              <div>
                <input
                  type="text"
				  id="fName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={this.updateText}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={this.updateText}
                />
               <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={this.updateText}
                />
              </div>
              <button disabled={this.isDisabled()}>Add</button>
            </form>
			</div>
    	);
	}    
}
AddUser.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;