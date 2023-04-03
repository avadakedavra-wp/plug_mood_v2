import React, { useEffect, useState, useMemo } from "react";
import ReactECharts from "@echarts-wrapper/react";
import axios from "../../model/axios";
let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 20000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}
export default function LineCharts({ name, datafiller }) {
  const [sales, setSales] = useState([]);
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    async function getSales() {
      try {
        const response = await axios.get("plug_mood/get-sales");
        setSales(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getSales();
  }, []);

  useEffect(() => {
    const saleData = sales.results?.map((item) => [
      new Date(item.sales_datetime),
      item.price,
    ]);
    setSaleData(saleData);
  }, [sales.results]);

  const monthlySales = saleData?.reduce((acc, cur) => {
    const [year, month] = [cur[0].getFullYear(), cur[0].getMonth() + 1];
    const key = `${year}-${month}`;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += cur[1];
    return acc;
  }, {});

  const monthlyIncome = saleData?.reduce((result, item) => {
    const date = item[0];
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    if (!result[key]) {
      result[key] = {
        date: new Date(year, month, 1),
        income: 0,
      };
    }
    result[key].income += item[1];
    return result;
  }, {});
  

  const income = useMemo(() => {
    if (typeof monthlyIncome !== 'undefined' && monthlyIncome !== null) {
      return Object.entries(monthlyIncome)
        .map(([key, value]) => {
          const { date, income } = value;
          return [date, income];
        })
        .sort((a, b) => b[0] - a[0]);
    } else {
      return [];
    }
  }, [monthlyIncome]);
  
  const sortedProfits = useMemo(() => {
    if (typeof monthlySales !== 'undefined' && monthlySales !== null) {
      return Object.entries(monthlySales).map(([key, value]) => {
        const [year, month] = key.split("-");
        const date = new Date(year, month - 1, 1);
        const profit = value - 5000; // Assuming a fixed cost of 5000 per month
        return [date, parseInt(profit)];
      }).sort((a, b) => b[0] - a[0]); ///  [date: [], price: []]
    } else {
      return [];
    }
  }, [monthlySales]);

  const sortedSalesData = useMemo(() => {
    if (typeof saleData !== 'undefined' && saleData !== null) {
      return saleData.sort((a, b) => b[0] - a[0]);
    } else {
      return [];
    }
  }, [saleData])

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "left",
      text: `${datafiller}`,
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 50,
        end: 70,
      },
      {
        start: 50,
        end: 70,
      },
    ],
    series: [
      {
        name: `${datafiller}`,
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: datafiller === 'กำไรรายเดือน' ? sortedProfits :  datafiller === 'ยอดขายทั้งหมด' ? sortedSalesData : income,
      },
    ],
  };
  return (
    <>
      <ReactECharts option={option} notMerge={false} lazyUpdate={true} />
    </>
  );
}