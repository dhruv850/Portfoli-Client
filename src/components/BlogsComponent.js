import React from 'react';
import "../css/index.css";

import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchBlogs } from '../actions';

class BlogsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    render() {
        var results = JSON.parse(JSON.stringify(this.props.blogs)).data;

        return (
            !this.props.blogs.loading?
            <div className={'blogs-parent-contents-container'}>
                <p className={'blogs-text'}>
                    Here are some of my articles and blogs posted, for more blogs please follow my <a href="https://techtypers.com/" className={'blogs-details-link'} target="_blank">website</a>.
                </p>
                <div className={'blogs-contents-container'}>
                    {results.length > 0 ? results.map(item =>
                        <div key={item} className={'blogs-poster-container'}>
                            <a href={item.blog_link} className={'blogs-details-link'} target="_blank"><img src={item.thumbnail} className={'blogs-poster-img'} /></a>
                        </div>
                    ) : null}
                </div>
                <div className={'projects-mobile-items-gap'}></div>
            </div>
            :
            <div className="m-3">
            <CircularProgress />
            </div>
        );
    }
}

const stateProps = state => ({
    blogs: state.blogs
});

const dispatchProps = dispatch => ({
    fetchBlogs: () => dispatch(fetchBlogs()),
});

export default connect(stateProps, dispatchProps)(BlogsComponent);