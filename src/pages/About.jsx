export default function About() {
    return (
      <div>
        <h2 className='display-3 text-center'>About Me!</h2>
        <div className="card mx-5 p-3">
          <div className="row">
            <div className="col-md-2">
              <img className="mx-auto d-block rounded-circle" style={{maxWidth: '200px'}} src={`../../assets/images/profile_pic.jpg`} alt='Profile picture of myself'/>
            </div>
            <div className="col-md-10">
              <p>
                {/* Hiya! My name is James Waller Jr. but I also go by DistantDig online. My main passion is creating through code, and I work each day to grow in my skills. 
                I recently completed a bootcamp for learning how to write in HTML, CSS and JavaScript for the purpose of full stack web design. I also enjoy coding in my free time but that 
                looks more like modding games through Java. You can check out some of the things I've done so far in the Projects tab! */}
                
              </p>

              <h3>Who Am I?</h3>
              <p>
                Hi! My name is James and I'm a passionate Full-Stack Web Developer with a deep love for creating efficient and innovative solutions. 
                Currently located in Modesto, California, I am determined to transform businesses through automation and intelligent web solutions.
                I am a recent graduate of an online coding bootcamp where I honed my skills in both front-end and back-end development. I have developed 
                a deep desire to learn, adapt and solve real and tedious problems.
              </p>

              {/* 
              <h3>My Expertise</h3>
              <p>
                My promary focus is in workflow automation, where I continue to develop systems that streamline processes and increase operational efficiency. 
                I specialize in creating custom solutions tailored to the unique needs of businesses, striving for a seemless integration of new technologies into 
                their daily operations.
              </p> 
              */}

              <h3>What Sets Me Apart?</h3>
              <ul>
                <li>Innovative Problem Solver: I approach challenges with a creative mindset, always searching for new ways to innovate, solve problems and 
                  create more efficient workflows.
                </li>
                <li>Continuous Learner: The forever evolving nature of technology is exciting to me, and having a learner's mindset allows me to forever evolve 
                  with it to always bring the best of industry trends.
                </li>
                <li>Passion for User-Centric Design: Beyond code, I care deeply for the user experience. A positive and intuitive user experience should always 
                  be a high priority.
                </li>
              </ul>

              <h3>Why Work With Me?</h3>
              <p>
                Working with me is more than just hiring a developer, it's having someone committed to the highest standards and the most efficient process. 
                I am committed to delivering high-quality code and efficient solutions while maintaining clear communication and transparency.
              </p>

              <h3>Let's Connect</h3>
              <p>
                If you think I could be a great addition to your business then let's connect. You can head over to my Contact section or feel free to email me directly 
                at jameswaller711@gmail.com with your name and a message describing your interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}