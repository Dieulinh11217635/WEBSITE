import "./frame-component3.css";

const FrameComponent3 = () => {
  return (
    <div className="frame-parent3">
      <div className="ng-nhp-ti-khon-wrapper">
        <h1 className="ng-nhp-ti">ĐĂNG NHẬP TÀI KHOẢN</h1>
      </div>
      <div className="frame-wrapper2">
        <div className="frame-parent4">
          <div className="rectangle-parent2">
            <input className="rectangle-input" type="text" />
            <input className="frame-child3" type="text" />
            <h1 className="email">Email</h1>
          </div>
          <h1 className="password">Password</h1>
        </div>
      </div>
      <div className="input-processor">
        <div className="output-generator">
          <div className="condition-checker" />
          <div className="sequence-controller">
            <h3 className="ghi-nh">Ghi nhớ</h3>
          </div>
        </div>
        <div className="function-caller">
          <div className="rectangle-parent3">
            <div className="frame-child4" />
            <h1 className="ng-nhp3">Đăng nhập</h1>
            <h3 className="qun-mt-khu">Quên mật khẩu?</h3>
          </div>
          <div className="data-merger">
            <h3 className="bn-cha-c-container">
              <span>{`Bạn chưa có tài khoản? `}</span>
              <span className="ng-k-ngay">Đăng kí ngay</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
