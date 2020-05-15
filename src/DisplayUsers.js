import React, { Component } from 'react';
import UserAndGames from './UserAndGames';

class DisplayUsers extends Component{
  
  	 state = {
    	showgames: true,
  	};

  	toggleGamesPlayed = () => {
      	this.setState((prevstate)=>({
        	showgames: !prevstate  
        }))
      	console.log("toggleGamesPlayed "+this.state.showgames);
    }
	render(){
      	//const {user}=this.props
      	//const {gamesPlayed}=this.props;
    	return(
        	<div>
             	<div>
                    <button className="smallButton" onClick={this.toggleGamesPlayed}>
                                Show Number of Games Played
                    </button>
      			</div>
          		<ol style={{listStyleType: "square", float:'left', color:"#3692bc", fontfamily: "sans-serif", fontSize:" 2em"} }
				>
        			{this.props.users.map((user)=>(
						<UserAndGames key={user.username} user={user} showGamesPlayed={this.state.showgames}/>
        			))}
          		</ol>
          	</div>
        );
    }
}

export default DisplayUsers