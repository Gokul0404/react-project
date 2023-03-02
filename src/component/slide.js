import { Carousel } from "antd";
import data from "./content";

const App1 = () => (
  <Carousel autoplay>
    <div className="mainslide">
      <div className="contentStyle">
        <div className="ggg">
          <div className="slideinside">
            {data.map((data) => {
              return <p>{data.message2}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="contentStyle">
        <div className="ggg">
          <div className="slideinside">
            {" "}
            {data.map((data) => {
              return <p>{data.message2}</p>;
            })}
          </div>
        </div>
      </h3>
    </div>

    <div>
      <h3 className="contentStyle">
        <div className="ggg">
          <div className="slideinside">
            {" "}
            {data.map((data) => {
              return <p>{data.message2}</p>;
            })}
          </div>
        </div>
      </h3>
    </div>
    <div>
      <h3 className="contentStyle">
        <div className="ggg">
          <div className="slideinside">
            {data.map((data) => {
              return <p>{data.message2}</p>;
            })}
          </div>
        </div>
      </h3>
    </div>
  </Carousel>
);
export default App1;
