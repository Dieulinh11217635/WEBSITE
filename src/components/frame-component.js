import EmailPasswordInput from "./email-password-input";
import "./frame-component.css";

const FrameComponent1 = () => {
  return (
    <div className="rectangle-parent4">
      <div className="frame-child2" />
      <div className="image-3-parent">
        <img
          className="image-3-icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="ng-k-ti-khon-wrapper">
          <h1 className="ng-k-ti">ĐĂNG KÝ TÀI KHOẢN</h1>
        </div>
      </div>
      <EmailPasswordInput emailCaBn="Email của bạn" />
      <EmailPasswordInput emailCaBn="Mật khẩu" />
      <div className="sign-up-link">
        <div className="reenter-password-input">
          <div className="rectangle-parent5">
            <div className="frame-child3" />
            <h1 className="nhp-li-mt">Nhập lại mật khẩu</h1>
          </div>
          <div className="frame-parent1">
            <div className="person-and-home-container-parent">
              <div className="person-and-home-container">
                <div className="email-field-with-label" />
              </div>
              <h3 className="bn-cam-kt-container">
                <span>Bạn cam kết đồng ý với các</span>
                <span className="quy-ch-hot"> Quy chế hoạt động</span>
                <span>{` và `}</span>
                <span className="chnh-sch-quyn">Chính sách quyền riêng tư</span>
                <span> của Sàn giao dịch TMĐT Hòa Bình.</span>
              </h3>
            </div>
            <button className="group-button">
              <div className="frame-child4" />
              <b className="to-ti-khon">Tạo tài khoản</b>
            </button>
          </div>
          <div className="bn-c-ti-khon-ng-nhp-wrapper">
            <h3 className="bn-c-container">
              <span>{`Bạn đã có tài khoản? `}</span>
              <span className="ng-nhp1">Đăng nhập</span>
              <span> ngay</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
