import React from 'react';
import "../css/index.css";

import profile from "../images/ic_profile_img.jpg";
import facebook from "../images/ic_facebook.png";
import twitter from "../images/ic_twitter.png";
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
import youtube from "../images/ic_youtube.png";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-overlay'}></div>
                <div className={'dashboard-profile-div'}>
                    <div className={'dashboard-profile-img-container'}>
                        <img src={profile} className={'dashboard-profile-img'} />
                        <div className={'social-profile-container'}>
                            <a href="https://www.facebook.com/hackbotone/" target="_blank"><img src={facebook} className={'social-profile-icon'} /></a>
                            <a href="https://twitter.com/anspattnaik" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a>
                            <a href="https://www.linkedin.com/in/anshuman123/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://github.com/anshumanpattnaik" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            <a href="https://www.youtube.com/anshumanpattnaik" target="_blank"><img src={youtube} className={'social-profile-icon'} /></a>
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Dhruv Patel</span></p>
                        <p className={'dashboard-profile-deatils'}>
                            I am a full stack developer specialized in Web Development, having sufficient knowledge in JavaScript frameworks and Cloud Technologies. I am currently working as MERN stack developer at <a className="anchor" href="https://www.tazwiz.com/">Tazwiz</a>, My roles over their includes developing full fledged API and Front-End components as well as creating automation for testing.
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            I am AWS certified Solutions Architect - Associate which makes me familiar with more than 80 AWS cloud services. I use my weekend to write technical how-to-do's for <a className="anchor" href="https://contentlab.io/how-to-test-and-secure-your-api-using-postman-test-scripts/">DeveloperMedia</a> 
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            I make use of my extra bandwidth to share my knowledge via my blog site <a className="anchor" href="https://techtypers.com/">TechTypers</a> 
                        </p>
                    </div>
                </div>
                <img className={'dashboard-banner-img'} />
            </div>
        );
    }
}

export default ProfileComponent;