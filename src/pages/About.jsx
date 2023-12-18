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
                Hiya! My name is James Waller Jr. but I also go by DistantDig online. My main passion is creating through code, and I work each day to grow in my skills. 
                I recently completed a bootcamp for learning how to write in HTML, CSS and JavaScript for the purpose of full stack web design. I also enjoy coding in my free time but that 
                looks more like modding games through Java. You can check out some of the things I've done so far in the Projects tab!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}