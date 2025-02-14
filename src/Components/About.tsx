import meimg from "../assets/me.jpg";
function About() {
  return (
      <><header className="jumbotron text-center mt-4">
          <h1 className="display-4"> About Me</h1>
          <p className="lead"> I am a software developer with a passion for building scalable and efficient software solutions.</p>
      </header><div className="container">
              <div className="row">
              </div>
              <div className="row mt-4">
                  <div className="col-lg-4">
                      <img src={meimg} className="img-fluid rounded-circle" alt="Mohammed Arshad" />
                  </div>
                  <div className="col-lg-8">
                      <h2>Mohammed Arshad</h2>
                      <p>Hi, I'm Mohammed Arshad. I'm passionate about technology and innovation. I strive to create solutions that make a difference in people's lives. Welcome to our website, and feel free to reach out if you have any questions!</p>
                  </div>
              </div>
          </div></>
  );
}
export default About;