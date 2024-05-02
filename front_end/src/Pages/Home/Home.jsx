import React from 'react'
import "./Home.css"


const Home = () => {
  return (
    <>

<div>
  <section className="rev_slider_wrapper thm-banner-wrapper">
    <div id="slider1" className="rev_slider" data-version={5.0}>
      <ul>
        <li data-transition="parallaxvertical" data-ease="SlowMo.ease">
          <img src="images/slider/crop.jpg" alt="Crop Background" />
          <div className="tp-caption sfb tp-resizeme caption-h1" data-x="left" data-hoffset={0} data-y="top" data-voffset={188} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            ABES Solutions
          </div>
          <div className="tp-caption sfb tp-resizeme caption-p" data-x="left" data-hoffset={33} data-y="top" data-voffset={315} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1000}>
            <strong />
          </div>
        </li>
        <li data-transition="parallaxvertical" data-ease="SlowMo.ease">
          <img src="images/slider/11.jpeg" alt="Farms" />
          <div className="tp-caption sfb tp-resizeme caption-h1" data-x="left" data-hoffset={0} data-y="top" data-voffset={248} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            Our<br /> Vision
          </div>
          <div className="tp-caption sfb tp-resizeme caption-p" data-x="left" data-hoffset={0} data-y="top" data-voffset={375} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1000}>
            Is to create awareness related to Farming Technics and Technology in Farmers community.
          </div>
          <div className="tp-caption sfl tp-resizeme" data-x="left" data-hoffset={0} data-y="top" data-voffset={500} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1500}>
          </div>
        </li>
        <li data-transition="parallaxvertical" data-ease="SlowMo.ease">
          <img src="images/slider/bg2.jpg" alt="crop" />
          <div className="tp-caption sfb tp-resizeme caption-h1" data-x="left" data-hoffset={0} data-y="top" data-voffset={248} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
            ABES Solutions<br />VISION
          </div>
          <div className="tp-caption sfb tp-resizeme caption-p" data-x="left" data-hoffset={0} data-y="top" data-voffset={375} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1000}>
            Is to work for farmers problem and introduce them to various policies and Technology related to farming.
          </div>
          <div className="tp-caption sfl tp-resizeme" data-x="left" data-hoffset={0} data-y="top" data-voffset={500} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1500}>
            {/*<a href="about.html" class="thm-btn">About Us <i class="fa fa-arrow-right"></i></a>*/}
          </div>
        </li>
        <li data-transition="parallaxvertical" data-ease="SlowMo.ease">
          <img src="images/slider/12.jpeg" alt="farms" />
          <div className="tp-caption sfb tp-resizeme caption-h1" data-x="left" data-hoffset={0} data-y="bottom" data-voffset={0} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={500}>
          </div>
          <div className="tp-caption sfb tp-resizeme caption-h1" data-x="right" data-hoffset={0} data-y="bottom" data-voffset={0} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1700}>
          </div>
          <div className="tp-caption sfb tp-resizeme caption-p" data-x="right" data-hoffset={50} data-y="top" data-voffset={275} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1100}>
            "Farming looks mighty easy when your plow is a pencil,<br /> and you're a thousand miles from the corn field." <br /> - President Dwight D. Eisenhower			  </div>
          <div className="tp-caption sfl tp-resizeme" data-x="right" data-hoffset={460} data-y="top" data-voffset={360} data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="o:0" data-transform_out="o:0" data-start={1500}>
            {/*<a href="https://www.vitbhopal.ac.in/" class="thm-btn inverse">VIT Bhopal <i class="fa fa-arrow-right"></i></a>*/}
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section className="about-info-box sec-padding">
    <div className="thm-container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div className="sec-title">
            <h2><span>What is ABES Solutions</span></h2>
            <ul className="bulleted-list">
              <li><i className="fa fa-arrow-circle-right" /> ABES Solutions is a website particularly for the Indian Farmers to provide all information in one portal.</li> 
            </ul>
            {/* <h2><span>What does AYNA means?</span></h2>
					<ul class="bulleted-list">
						<li><i class="fa fa-arrow-circle-right"></i> AYNA - All You Need for Agronomy</li>
						<li><i class="fa fa-arrow-circle-right"></i> AYNA also stands for mirror in Hindi. Same as a mirror our website also reflects out all the info that's out there without misleading.</li>
					</ul> */}
            <h2><span>Reasons to Use ABES Sollutions</span></h2>
            <ul className="bulleted-list">
              <li><i className="fa fa-arrow-circle-right" /> A farmer will be able to get all relevant information on specific subjects around his state.</li>
              <li><i className="fa fa-arrow-circle-right" /> One Stop Solution for Farmers with most of the required Info available at one place.</li>
              <li><i className="fa fa-arrow-circle-right" /> Consist of features like weather report, government schemes, seed price etc.</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="welcome-services home-one">
    <div className="thm-container">
      <div className="sec-title">
        <h2><span>Features</span></h2>
        <p>All the features that are provided by this website.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/18.jpg" alt="weather" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Weather Report</h3>
                <p>Get all information needed on the weather of your current location or by searching for the location.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/2.jpg" alt="seed" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Seed Price &amp; Info</h3>
                <p>Realtime Seed Price along with all the Knowledge you need about different types of seeds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/19.png" alt="Govt Schemes" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Goverment Schemes</h3>
                <p>Latest Government Schemes for maximizing the benefits and minimizing the loss.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/3.jpg" alt="Tech" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Technological Knowledge</h3>
                <p>The knowledge you need to enhance your crop production: Solar Panel, etc.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/5.jpg" alt="Internet" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Low Internet Consumption</h3>
                <p>Even with poor internet connectivity, you can access this website.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-single-services">
            <div className="img-box">
              <img src="images/welcome-services/7.jpg" alt="Ui Ux" />
            </div>
            <div className="text-box">
              <div className="content">
                <h3>Easy to Use</h3>
                <p>Simple visuals are used making it easy to understand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    
    </>

  )
}

export default Home