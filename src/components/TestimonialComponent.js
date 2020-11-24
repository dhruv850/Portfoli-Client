import React from 'react';
import "../css/index.css";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTestimonials } from '../actions';
class TestimonialComponent extends React.Component {

componentDidMount() {
    this.props.fetchTestimonials();
}
  render() {
    return (
    
    <div className="background-testimonials">
      
      {!this.props.testimonial.loading? this.props.testimonial.data.map(testimonial =>
              <figure class="snip1574">
              <img src={testimonial.src} alt="profile-sample2" />
              <figcaption>
                <blockquote>
      <p className="testimonial-text">{testimonial.testimonial}</p>
                </blockquote>
      <h3>{testimonial.author}</h3>
      <h5>{testimonial.position}</h5>
              </figcaption>
            </figure>
            
        ) :
        null} 
    </div>
    );
  }
}

const stateProps = state => ({
  testimonial: state.testimonial
});

const dispatchProps = dispatch => ({
  fetchTestimonials: () => dispatch(fetchTestimonials()),
});

export default connect(stateProps, dispatchProps)(TestimonialComponent);


// <figure class="snip1574">
//         <img src="https://portfoliodhruvpatel.s3.us-east-2.amazonaws.com/pexels-rahul-716398.jpg" alt="profile-sample2" />
//         <figcaption>
//           <blockquote>
//             <p className="testimonial-text">Which is worse, that everyone has his price, or that the price is always so low.</p>
//           </blockquote>
//           <h3>Sue Shei</h3>
//           <h5>Founder</h5>
//         </figcaption>
//       </figure>
//       <figure class="snip1574"><img src="https://portfoliodhruvpatel.s3.us-east-2.amazonaws.com/pexels-cliford-mervil-2469122.jpg" alt="profile-sample7" />
//         <figcaption>
//           <blockquote>
//             <p className="testimonial-text">Dhruv is very eager to learn and works well with others. He's been a valuable part of the team from the beginning.</p>
//           </blockquote>
//           <h3>Orlandson Asturiano</h3>
//           <h5>Chief Technology Officer</h5>
//         </figcaption>
//       </figure>
//       <figure class="snip1574"><img src="https://portfoliodhruvpatel.s3.us-east-2.amazonaws.com/pexels-aleksandar-pasaric-2603464.jpg" alt="profile-sample6" />
//         <figcaption>
//           <blockquote>
//             <p className="testimonial-text">The only skills I have the patience to learn are those that have no real application in life. </p>
//           </blockquote>
//           <h3>Indigo Violet</h3>
//           <h5>Public Relations</h5>
//         </figcaption>
//       </figure>