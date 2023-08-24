import "./chartBox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="{props.icon}" alt="" />
          <span>{props.title}</span>
          <h1>{props.number}</h1>
        </div>
        <div className="chartInfo">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 60 }}
                />
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div><div className="boxInfo">
            <div className="texts">
              <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}%</span>
              <span className="duration">this month</span>
              <div>
                <Link to="/" style={{ color: props.color }}>View all</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;