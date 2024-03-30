import "./group-component.css";

const GroupComponent = () => {
  return (
    <div className="graph-input-output-parent">
      <div className="graph-input-output" />
      <div className="payment-method-language2">
        <div className="wrapper-imageflagsicon-container">
          <div className="wrapper-imageflagsicon2">
            <img
              className="imageflagsicon5"
              type="text"
              alt=""
              src="/imageflagsicon-1@2x.png"
            />
          </div>
          <div className="english2">English</div>
          <img
            className="iconcontrolexpand-less2"
            alt=""
            src="/iconcontrolexpand-less1.svg"
          />
        </div>
        <div className="ecommerce2">{`© 2023 Ecommerce. `}</div>
      </div>
    </div>
  );
};

export default GroupComponent;
