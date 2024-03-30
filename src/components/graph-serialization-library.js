import { useMemo } from "react";
import "./graph-serialization-library.css";

const GraphSerializationLibrary = ({
  moreInfo,
  vChngTi,
  propDisplay,
  propHeight,
}) => {
  const vChngTiStyle = useMemo(() => {
    return {
      display: propDisplay,
      height: propHeight,
    };
  }, [propDisplay, propHeight]);

  return (
    <div className="graph-serialization-library">
      <div className="graph-deserialization-library">
        <div className="graph-data-processing-library">
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

export default GraphSerializationLibrary;
