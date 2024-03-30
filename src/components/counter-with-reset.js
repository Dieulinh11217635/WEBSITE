import "./counter-with-reset.css";

const CounterWithReset = ({ brandlogoSymbol }) => {
  return (
    <div className="counter-with-reset">
      <div className="timer-with-interval">
        <div className="brandlogo-colored-parent">
          <div className="brandlogo-colored">
            <img className="brand-icon" alt="" src="/brand-11.svg" />
            <img
              className="brandlogo-symbol-icon"
              alt=""
              src={brandlogoSymbol}
            />
          </div>
          <div className="best-information-about">
            Best information about the company gies here but now lorem ipsum is
          </div>
          <div className="icon-contactsocialfacebook3-parent">
            <img
              className="icon-contactsocialfacebook3"
              loading="lazy"
              alt=""
              src="/iconcontactsocialfacebook31.svg"
            />
            <img
              className="icon-contactsocialtwitter3"
              loading="lazy"
              alt=""
              src="/iconcontactsocialtwitter31.svg"
            />
            <img
              className="icon-contactsociallinkedin3"
              loading="lazy"
              alt=""
              src="/iconcontactsociallinkedin31.svg"
            />
            <img
              className="icon-contactsocialinstagram3"
              loading="lazy"
              alt=""
              src="/iconcontactsocialinstagram31.svg"
            />
            <img
              className="icon-contactsocialyoutube3"
              loading="lazy"
              alt=""
              src="/iconcontactsocialyoutube31.svg"
            />
          </div>
        </div>
        <div className="tree-with-balanced-heights">
          <div className="graph-with-connected-component">
            <div className="col6">
              <div className="link16">Hướng dẫn đăng ký thành viên</div>
              <div className="timer-with-elapsed-time">
                <div className="link17">Hướng dẫn đăng nhập</div>
                <div className="link18">Hướng dẫn mua hàng</div>
                <div className="link19">Hướng dân bán hàng</div>
                <div className="link20">Câu hỏi thường gặp</div>
              </div>
            </div>
            <div className="col7">
              <div className="link21">Chính sách và quy chế</div>
              <div className="link-parent">
                <div className="link22">Giới thiệu</div>
                <div className="link23">Quy chế hoạt động</div>
                <div className="link24">Điều khoản - quy định chung</div>
                <div className="link25">Giải quyết khiếu nại</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterWithReset;
