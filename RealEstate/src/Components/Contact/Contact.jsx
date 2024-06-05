import React from "react";
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flextStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">765 980 1234 </span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flextStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">765 980 1234 </span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flextStart">
                  <div className="flexCenter icon">
                    <BiVideo size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">765 980 1234 </span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flextStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">765 980 1234 </span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="download.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
