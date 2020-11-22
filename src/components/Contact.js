import React, { useState, } from 'react';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:dhruv850.dp@gmail.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');



    const handleClick = (e) => {

      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }

    return (
      <section id="contact">

        

         <div className="row mt-4 d-flex justify-content-center">
            <div className="col-xl-5">

               <form id="contactForm" name="contactForm">
					   <  fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input required value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                         <p>{name.error}</p>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input required value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea required value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type='submit' onClick={handleClick} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="col-xl-4 footer-widgets">
               <div className="widget widget_contact">

					   <h4 className="address">Address and Phone</h4>
					   <p className="address">
						  <br />
						 <br />
						<br />
						   <span></span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
