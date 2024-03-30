import "./counter-with-reset.css";

const CounterWithReset = ({ brandlogoSymbol }) => {
  return (
    <div className="counter-with-reset">
      <div className="timer-with-interval">
        <div className="brandlogo-colored-group">
          <div className="brandlogo-colored4">
            <img className="brand-icon4" alt="" src="/brand-11.svg" />
            <img
              className="brandlogo-symbol-icon4"
              alt=""
              src={brandlogoSymbol}
            />
          </div>
          <div className="best-information-about1">
            Best information about the company gies here but now lorem ipsum is
          </div>
          <div className="icon-contactsocialfacebook3-group">
            <img
              className="icon-contactsocialfacebook31"
              loading="lazy"
              alt=""
              src="/iconcontactsocialfacebook31.svg"
            />
            <img
              className="icon-contactsocialtwitter31"
              loading="lazy"
              alt=""
              src="/iconcontactsocialtwitter31.svg"
            />
            <img
              className="icon-contactsociallinkedin31"
              loading="lazy"
              alt=""
              src="/iconcontactsociallinkedin31.svg"
            />
            <img
              className="icon-contactsocialinstagram31"
              loading="lazy"
              alt=""
              src="/iconcontactsocialinstagram31.svg"
            />
            <img
              className="icon-contactsocialyoutube31"
              loading="lazy"
              alt=""
              src="/iconcontactsocialyoutube31.svg"
            />
          </div>
        </div>
        <div className="tree-with-balanced-heights">
          <div className="graph-with-connected-component">
            <div className="col11">
              <div className="link34">Hướng dẫn đăng ký thành viên</div>
              <div className="timer-with-elapsed-time">
                <div className="link35">Hướng dẫn đăng nhập</div>
                <div className="link36">Hướng dẫn mua hàng</div>
                <div className="link37">Hướng dân bán hàng</div>
                <div className="link38">Câu hỏi thường gặp</div>
              </div>
            </div>
            <div className="col12">
              <div className="link39">Chính sách và quy chế</div>
              <div className="link-container">
                <div className="link40">Giới thiệu</div>
                <div className="link41">Quy chế hoạt động</div>
                <div className="link42">Điều khoản - quy định chung</div>
                <div className="link43">Giải quyết khiếu nại</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterWithReset;
