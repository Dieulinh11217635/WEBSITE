import { useMemo } from "react";
import "./frame-component2.css";

const FrameComponent = ({
  moreInfo,
  vChngTi,
  propDisplay,
  propMinWidth,
  propHeight,
}) => {
  const vChngTiStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propDisplay, propMinWidth, propHeight]);

  return (
    <div className="logic-gate-inner1">
      <div className="frame-parent2">
        <div className="more-info-wrapper">
          <img
            className="more-info-icon"
            loading="lazy"
            alt=""
            src={moreInfo}
          />
        </div>
        <div className="v-chng-ti" style={vChngTiStyle}>
          {vChngTi}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
