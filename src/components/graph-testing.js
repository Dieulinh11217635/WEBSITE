import GraphSerializationLibrary from "./graph-serialization-library";
import "./graph-testing.css";

const GraphTesting = () => {
  return (
    <footer className="frame-footer">
      <div className="frame-child8" />
      <div className="s-cng-thng2">2024 © Sở Công Thương tỉnh Hòa Bình</div>
      <div className="test-result-analysis">
        <div className="graph-layout-library">
          <div className="a-ch-227b2">
            Địa chỉ: 227B, đường Đà Giang, phường Phương Lâm, tp Hoà Bình, tỉnh
            Hoà Bình
          </div>
          <div className="in-thoi-021838520582">
            Điện thoại: 02183.852058     Fax: (0218) 3853439 
          </div>
          <div className="email-santmdthoabinhgmailco4">
            <p className="email-santmdthoabinhgmailco5">
              Email: santmdthoabinh@gmail.com
            </p>
          </div>
          <div className="quyt-nh-thnh-container2">
            <p className="quyt-nh-thnh2">
              Quyết định thành lập: Số 577/QĐ-UBND ngày 17/3/2008
            </p>
          </div>
          <div className="chu-trch-nhim2">
            Chịu trách nhiệm: Ông Dương Quốc Thắng - Phó Giám đốc Sở Công Thương
          </div>
        </div>
        <div className="test-execution-monitoring">
          <div className="graph-serialization-library1" />
          <GraphSerializationLibrary
            moreInfo="/more-info@2x.png"
            vChngTi="Về chúng tôi"
          />
          <div className="graph-testing-library-wrapper">
            <div className="graph-testing-library" />
          </div>
          <GraphSerializationLibrary
            moreInfo="/handshake@2x.png"
            vChngTi="Liên kết"
            propDisplay="flex"
            propHeight="28px"
          />
          <div className="graph-serialization-library2" />
          <GraphSerializationLibrary
            moreInfo="/schedule@2x.png"
            vChngTi="Sự kiên"
            propDisplay="flex"
            propHeight="28px"
          />
          <div className="graph-serialization-library3" />
        </div>
      </div>
    </footer>
  );
};

export default GraphTesting;
