import ContactSocialMedia from "./contact-social-media";
import "./copyright-footer.css";

const CopyrightFooter = () => {
  return (
    <footer className="copyright-footer">
      <div className="copyright-footer-child" />
      <div className="s-cng-thng1">2024 © Sở Công Thương tỉnh Hòa Bình</div>
      <div className="headquarter-details">
        <div className="more-info-handshake">
          <div className="a-ch-227b1">
            Địa chỉ: 227B, đường Đà Giang, phường Phương Lâm, tp Hoà Bình, tỉnh
            Hoà Bình
          </div>
          <div className="in-thoi-021838520581">
            Điện thoại: 02183.852058     Fax: (0218) 3853439 
          </div>
          <div className="email-santmdthoabinhgmailco2">
            <p className="email-santmdthoabinhgmailco3">
              Email: santmdthoabinh@gmail.com
            </p>
          </div>
          <div className="quyt-nh-thnh-container1">
            <p className="quyt-nh-thnh1">
              Quyết định thành lập: Số 577/QĐ-UBND ngày 17/3/2008
            </p>
          </div>
          <div className="chu-trch-nhim1">
            Chịu trách nhiệm: Ông Dương Quốc Thắng - Phó Giám đốc Sở Công Thương
          </div>
        </div>
        <div className="contact-social-media-parent">
          <div className="contact-social-media1" />
          <ContactSocialMedia
            moreInfo="/more-info@2x.png"
            vChngTi="Về chúng tôi"
            propDisplay="inline-block"
            propMinWidth="107px"
            propHeight="unset"
          />
          <div className="schedule-link">
            <div className="handshake-more-info" />
          </div>
          <ContactSocialMedia moreInfo="/handshake@2x.png" vChngTi="Liên kết" />
          <div className="contact-social-media2" />
          <ContactSocialMedia
            moreInfo="/schedule@2x.png"
            vChngTi="Sự kiên"
            propDisplay="flex"
            propMinWidth="unset"
            propHeight="28px"
          />
          <div className="contact-social-media3" />
        </div>
      </div>
    </footer>
  );
};

export default CopyrightFooter;
