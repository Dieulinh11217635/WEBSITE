import { useMemo } from "react";
import "./graph-serialization-library.css";

const GraphSerializationLibrary = ({
  moreInfo,
  vChngTi,
  propDisplay,
  propHeight,
}) => {
  const vChngTi1Style = useMemo(() => {
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

export default GraphSerializationLibrary;
