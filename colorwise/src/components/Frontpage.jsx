
import '../App.css';

const Frontpage = () => {
  return (
    <div className='outer-box'>
    <div className="inside-box">


    <div className="inner-left-side-box">
        
      <div className="inside-inner">
       
      <div className='inside-inner-inner'>
          <h1 className='height'>Personal Color Analysis</h1>
          <p className='para'>
            Our AI-powered color analysis tool helps you discover the <br />
            colors that enhance your natural beauty, match your unique <br />
            features, and fit your personal style. <br />
            <br />
            Upload your photo get instant recommendations for your <br /> perfect
            color palette.
          </p>
        </div>

      <div className='upload-photo'>
        <label htmlFor="file-upload" className="upload-box">
        <div className="upload-content">
          <i className="upload-icon">📁</i> 
          <p>Click to upload or drag and drop</p>
          <span>SVG, PNG, JPG or GIF</span>
        </div>
        <input type="file" id="file-upload" className="file-input" />
      </label>
        <button className='palette-button'>Create Your Palette</button>
      </div>


      </div>

    </div>


      <div className='inner-right-side-box'>
        <img src="./p12.png" alt="photo of design" />
      </div>


    </div>



    <div className='big-down-block'>
       
      <div className=' inner-big-down-block'>
        <div className='inner-inner-down-block'>
            <p>Our capabilities</p>
            <h3>Why Use Our Color Analysis Tool?</h3>
            <h5>
            Your personal color palette is more than just a range of shades; it’s a path to <br />
             feeling confident, radiant, and truly yourself. Our advanced color analysis tool <br />
             reveals colors that harmonize with your unique skin tone, eye color, and hair <br /> 
            color, making it easier to choose tones that enhance your natural beauty.
            </h5>
        </div>

      </div>


     <div className='down-inner-block'>
         

           <div className='outer-row'>

           <div className='small-box'>
           
                <img src="./s1.png" alt="" />
                <h4>Customized for Your Natural Beauty</h4>
                <p>Tailors recommendations based on your unique <br />
                skin tone, eye color, and hair color to create a <br />
                 harmonious look.</p>
            </div>


            <div className='small-box'>
            
                <img src="./s2.png" alt="" />
                <h4>Instantly Curated Palette</h4>
                <p>Quickly get a personalized palette with 25 colors <br />
                 to wear and 10 to avoid, complete with names, hex <br />
                  codes, and reasons for easy styling</p>
            </div>


            <div className='small-box'>
            
                <img src=" ./s3.png" alt="" />
                <h4>Flexible to Your Style Preferences</h4>
                <p> Choose from options like bold, neutral, minimalist, <br />
                or vibrant colors, so your <br />
                 palette truly reflects your personal style.</p>
            </div>

           </div>
              
           
              
             <div className='outer-row'>

            <div className='small-box'>
                <img src="./s4.png" alt="" />
                <h4>Enhances Shopping Confidence</h4>
                <p>Know exactly which colors to look for when <br />
                shopping, making it easier to find pieces you’ll <br />
                love.</p>
            </div>

            <div className='small-box'>
            
                <img src="./s5.png" alt="" />
                <h4>Built on Color Science</h4>
                <p>Utilizes principles of color theory to ensure each <br />
                color complements your natural tones and <br />
                undertones.</p>
            </div>

            <div className='small-box'>
            
                <img src="./s6.png" alt="" />
                <h4>Save Time and Eliminate Guesswork</h4>
                <p> No more trial and error with colors that don’t suit <br />
                 you. Get instant recommendations that are <br />
                 tailored for you, making shopping easier than ever.</p>
            </div>


              </div>




         </div>



    </div>
      

    </div>
  );
};

export default Frontpage;
