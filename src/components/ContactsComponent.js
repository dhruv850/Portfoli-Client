import React from 'react';
import "../css/index.css";

import facebook from '../images/ic_black_facebook.png';
import twitter from '../images/ic_black_twitter.png';
import linkedin from '../images/ic_black_linkedin.png';
import github from '../images/ic_black_github.png';
import techtypers from '../images/Logo_Favicon1.png';
import email from '../images/ic_email.png';
class ContactsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={'contacts-contents-container'}>
                <div className={'contacts-social-container'}>
                  
                    <a href="mailto:dhruv850.dpgmail.com?subject=Opportunity" target="_blank"><img src={email} className={'contact-social-img'}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100001700571611" target="_blank"><img src={facebook} className={'contact-social-img'}/></a>
                    <a href="https://twitter.com/dhruv1451998" target="_blank"><img src={twitter} className={'contact-social-img'}/></a>
                    <a href="https://www.linkedin.com/in/dhruv850/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                    <a href="https://github.com/dhruv850" target="_blank"><img src={github} className={'contact-social-img'}/></a>
                    <a href="https://www.techtypers.com" target="_blank"><img src={techtypers} className={'contact-social-img'}/></a>
                </div>
                <div className={'contacts-footer-div'}></div>
                <p className={'contacts-footer-text'}>© 2020 Dhruv Patel. ALL RIGHTS RESERVED.</p>
            </div>
        );
    }
}

export default ContactsComponent;