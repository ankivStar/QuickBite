// // ContactUs.js

// import React, { useState } from 'react';
// // import './ContactUs.css'; // Import your styles

// const Contact = () => {
//   const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFeedbackSubmitted(true);
//   };

  
//   const backgroundImageStyle = {
//     backgroundImage:
//       "url('https://img.freepik.com/free-vector/realistic-handset-concept_1284-34781.jpg?size=626&ext=jpg&ga=GA1.1.1651881561.1696657168&semt=ais')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return (
//     <div className='h-[84.6vh] flex justify-center items-center' style={backgroundImageStyle}>
//     <div className={`align-middle max-w-[500px] m-auto p-[40px] text-center bg-slate-500 rounded-lg ${feedbackSubmitted ? 'feedback-submitted' : ''}`}>
//       {feedbackSubmitted ? (
//         <div className="thanks-message">
//           <h2>Thanks for your valuable feedback!</h2>
//         </div>
//       ) : (
//         <div>
//           <h2>Contact Us</h2>
//           <p>We value your feedback. Reach out to us using the contact information below:</p>

//           <div className="contact-info">
//             <div>
//               <h3>Email:</h3>
//               <p>mohitsinghkpsc@gmail.com</p>
//             </div>
//             <div>
//               <h3>Phone:</h3>
//               <p>+1 (123) 456-7890</p>
//             </div>
//           </div>

//           <div className="contact-form">
//             <h3>Send us a Message</h3>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="email">Your Email:</label>
//               <input type="email" id="email" name="email" required />

//               <label htmlFor="message">Message:</label>
//               <textarea id="message" name="message" rows="4" required></textarea>

//               <button className='contactUsButton' type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Contact;