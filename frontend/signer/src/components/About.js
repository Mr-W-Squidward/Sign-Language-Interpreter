import React from "react";
// finish the rest later

function About() {
  return (
    <div>
      <h1>-- About --</h1>

      <h3>
        Inspiration
      </h3>
      <p>
        <b>Communication</b> is the cornerstone of human connection. Everyone should be able to understand and communicate effectively with each 
        other though there are many barriers preventing this. When considering the deaf community, we see how marginalized and separated they are due to the lack of education 
        in the understanding of sign language. Our project hopes to address this issue and at least slightly affect or inspire other creators to help change the lives of 
        those who are deaf and those who aren't.
      </p>

      <h3>
      What it does

      </h3>
      <p>
        Our 'Sign Language Interpreter' detects hand gestures and recognizes them based on landmarks mainly using OpenCV and Mediapipe in Python 3. It then
        displays in text what it believes the sign to be with a high level of accuracy
      </p>

      <h3>
        How we built it
      </h3>
      <p>
        We built this project in Python 3 at first using OpenCV and Mediapipe and utilized Mediapipe's base gesture recognizer model and adjusted it based on our 
        training data/signs and tweaks. We then converted this into a full-stack project by using the JS version of Mediapipe and OpenCV alongside React.js for our frontend.
      </p>

    </div>
  );
}

export default About;