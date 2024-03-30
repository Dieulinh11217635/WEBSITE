import "./frame-component6.css";

const FrameComponent6 = ({ brandlogoSymbol }) => {
  return (
    <header className="layoutheader-alibaba-group">
      <div className="layoutheader-alibaba1">
        <img className="bg-icon3" alt="" src="/bg1.svg" />
        <div className="actions1">
          <div className="cart1">
            <img className="vector-icon8" alt="" src="/vector1.svg" />
            <div className="my-cart1">My cart</div>
          </div>
          <div className="orders2">
            <img className="vector-icon9" alt="" src="/vector-1.svg" />
            <div className="orders3">Orders</div>
          </div>
          <div className="message2">
            <div className="message3">Message</div>
            <img className="vector-icon10" alt="" src="/vector-2.svg" />
          </div>
          <div className="profile2">
            <div className="profile3">Profile</div>
            <img className="vector-icon11" alt="" src="/vector-3.svg" />
          </div>
        </div>
        <form className="search-form1">
          <div className="search-form-item" />
          <div className="forminput-groupinput-left-group">
            <div className="forminput-groupinput-left1">
              <img
                className="background-icon3"
                alt=""
                src="/-background1.svg"
              />
              <img className="icon01" alt="" src="/icon01.svg" />
              <div className="text3">Tìm kiếm</div>
            </div>
            <div className="forminput-groupinput-midle1">
              <img
                className="background-icon4"
                alt=""
                src="/-background-1.svg"
              />
              <div className="text-container">
                <div className="text4">Danh mục</div>
              </div>
              <img
                className="iconcontrolexpand-more7"
                alt=""
                src="/iconcontrolexpand-more1.svg"
              />
            </div>
          </div>
          <div className="buttonbtn-group1">
            <img className="background-icon5" alt="" src="/-background-2.svg" />
            <button className="buttonbasetext-md1">
              <div className="text5">Search</div>
            </button>
          </div>
        </form>
        <div className="brandlogo-colored3">
          <img className="brand-icon3" alt="" src="/brand1.svg" />
          <img
            className="brandlogo-symbol-icon3"
            alt=""
            src={brandlogoSymbol}
          />
        </div>
      </div>
      <div className="ng-nhp3">Đăng nhập</div>
      <img
        className="image-127-icon2"
        loading="lazy"
        alt=""
        src="/image-127@2x.png"
      />
      <div className="ng-k2">Đăng ký</div>
    </header>
  );
};

export default FrameComponent6;
