import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/topBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import { chartBoxRevenue } from "./../../data";
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import PieChartBox from "../../components/PieChartBox/PieChartBox";
import BigChartBox from "../../components/BigChartBox/BigChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox></PieChartBox>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">{<BigChartBox />}</div>
      <div className="box box9">
        {/* <BarChartBox title={""} color={""} datakey={""} chartData={[]} />{" "} */}
        {/* or */}

        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
