
const Footer = () => {
  return (
        <div className="footer-big-box">
         <footer>

      <div className="footer-box1">
       <div>
      <h4>Join the waitlist</h4> 
      <h5>We’ll send you an email once we officially launch</h5>
       </div>
       <div>

        <input  style={{"border-radius":"5px"}} type="text" placeholder="enter your mail"/> 
        <button style={{"border-radius":"5px"}}>Subscribe</button>
       </div>

      </div>


      <div className="footer-box2">

       <div className="secondbox-footer">
      <img src="./logo.png" alt="" className="logo" />
      <h3 className="text" >Reach out to us on info@attyre.app</h3>
      <ul className="foot-list">
        <ul>Explore</ul>
        <ul>Creators</ul>
        <ul>Curations</ul>
        <ul>Find the Fit</ul>
        <ul>terms</ul>
        <ul>Privacy</ul>
      </ul>
       </div>
         
         <div className="play-google">
            <h4>Get the app</h4>
            <img src="./App store.png" alt="" /><br />
            <img src="./google-play.png" alt="" />
         </div>   
      </div>

      <div className="footer-box3">
       <div className="h4">
       <h4>© 2024 Attyre India Pvt. Ltd. All rights reserved.</h4> <br />
       </div>
       <div>
        <img src="./insta.png" alt="" />
        <img src="./link.png" alt="" />
       </div>
      </div>


      </footer>
    </div>
  )
}

export default Footer
