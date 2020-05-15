import React from 'react';

const UserAndGames = props =>{
	return(
        	<li className="user">
                <p>Username: {props.user.username}</p>
                <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    		</li>
    );   

}

export default UserAndGames;