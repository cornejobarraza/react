import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import data from "./data.json";

export default function Expenses() {
  useEffect(() => {
    document.title = "Expenses chart";
  }, []);

  return (
    <div className="Expenses">
      <div id="wrapper">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <CurrentBalance></CurrentBalance>
        <ExpensesChart></ExpensesChart>
      </div>
    </div>
  );
}

function CurrentBalance() {
  return (
    <div className="Current-Balance">
      <div className="Balance-Amount">
        <span>My balance</span>
        <h3 style={{ marginTop: "0.5rem", marginBottom: "0" }}>$921.48</h3>
      </div>
      <svg width="60" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
}

function ExpensesChart() {
  const [items] = useState(data);
  const [week, setWeek] = useState(0);

  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const d = new Date();
  let day = weekday[d.getDay()];

  const max = data[week].spendings.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const listData = data[week].spendings.map((spending, index) => (
    <div
      className="Bar"
      key={index}
      style={{
        height: (spending.amount / max.amount) * 100 + "%",
        backgroundColor: spending.day === day ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
        position: "relative",
      }}
    >
      <span className="Tooltip">${spending.amount}</span>
    </div>
  ));
  const listTotal = data[week].spendings
    .map((spending) => spending.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <div className="Chart">
      <div className="Graph-Header">
        <h3 className="dark-brown" style={{ margin: "0" }}>
          Spending - Last 7 days
        </h3>
        <div className="dark-brown">
          <span style={{ fontSize: "0.9rem" }}>Week </span>
          <select id="Week-Selector" onChange={(e) => setWeek(e.currentTarget.value - 1)}>
            {items.map((item) => (
              <option key={item.week}>{item.week}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="Bars">{listData}</div>
      <div className="Days brown">
        <span>mon</span>
        <span>tue</span>
        <span>wed</span>
        <span>thu</span>
        <span>fri</span>
        <span>sat</span>
        <span>sun</span>
      </div>
      <hr className="divider"></hr>
      <div className="Data-Summary">
        <div>
          <span className="brown">Total this week</span>
          <h3 className="dark-brown" style={{ margin: "0.15rem 0 0 0" }}>
            ${listTotal}
          </h3>
        </div>
        <div style={{ textAlign: "end" }}>
          <h4 className="dark-brown" style={{ fontSize: "1em", fontWeight: "bold", margin: "0" }}>
            +2.4%
          </h4>
          <span className="brown">from last month</span>
        </div>
      </div>
    </div>
  );
}
