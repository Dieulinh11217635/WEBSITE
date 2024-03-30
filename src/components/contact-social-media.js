import { useMemo } from "react";
import "./contact-social-media.css";

const ContactSocialMedia = ({
  moreInfo,
  vChngTi,
  propDisplay,
  propMinWidth,
  propHeight,
}) => {
  const linKtStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propDisplay, propMinWidth, propHeight]);

  return (
    <div className="contact-social-media">
      <div className="frame-parent1">
        <div className="handshake-wrapper">
          <img
            className="handshake-icon"
            loading="lazy"
            alt=""
            src={moreInfo}
          />
        </div>
        <div className="lin-kt" style={linKtStyle}>
          {vChngTi}
        </div>
      </div>
    </div>
  );
};

export default ContactSocialMedia;
