import React, { Component } from 'react';
import LatestPost from '../modules/LatestPost.js';
// import ProfilePicture from '../../public/corgi.jpg';

class Profile extends Component {
	constructor(props) {
        super(props);

        this.state = {
            name: null,
            latestPost: null,
            id: null,
        };
    }

    componentDidMount() {
        this.getProfile(this.props.match.params.user);
        document.title = "Profile Page";
    }


    render() {
        // this.props.userInfo ? this.props.userInfo.name : ""
        // const profilePic = require('../../public/corgi.jpg');
        console.log(this.state.latestPost);
        return (
            <div className="container text-center">
                <div className="large-profile-container text-center my-4">
                    <div className="circle-avatar"></div>
                </div>
                <h1>{this.state.name ? this.state.name : ""}</h1>
                <hr/>
                <div className="row mt-4">
                    <div className="col-4">
                        <h4>About Me</h4>
                        <br/>
                        <div className="text" id="profile-description">
                            I am really allergic to cats i don't know why i have a catbook
                        </div>
                    </div>
                    <div className="col-4">
                        <h4>My Latest Post</h4>
                        <br/>
                        <LatestPost
                            name={this.state.name}
                            latestPost={this.state.latestPost}
                        />
                    </div>
                    <div className="col-4">
                        <h4>My Favorite Type of Cat</h4>
                        <br/>
                        <h3 id="favorite-cat">corgi</h3>
                    </div>
                </div>
            </div>
        );
    }

    getProfile = (id) => {
    fetch("/api/user?_id=" + id)
        .then(res => res.json())
        .then(
            userObj => {
                this.setState({ 
                    name: userObj.name,
                    latestPost: userObj.last_post,
                    id: id
                });
            }
        );
} 
}

export default Profile;