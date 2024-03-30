import { useMemo } from "react";
import "./frame-component2.css";

const FrameComponent = ({
  moreInfo,
  vChngTi,
  propDisplay,
  propMinWidth,
  propHeight,
}) => {
  const vChngTi1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propDisplay, propMinWidth, propHeight]);

  return (
    <div className="logic-gate-inner1">
      <div className="frame-parent6">
        <div className="more-info-wrapper">
          <img
            className="more-info-icon1"
            loading="lazy"
            alt=""
            src={moreInfo}
          />
        </div>
        <div className="v-chng-ti1" style={vChngTi1Style}>
          {vChngTi}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
