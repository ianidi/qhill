import React from "react";
import Chart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        theme: {
          palette:
            props.type === "trade"
              ? "palette10"
              : props.type === "withdraw"
              ? "palette5"
              : "palette1",
        },
        fill: {
          type: "gradient",
          opacity: 0.3,
          gradient: {
            opacityFrom: 0,
            opacityTo: 0,
          },
        },
        chart: {
          //   events: {
          //     mounted: (chart) => {
          //       chart.windowResizeHandler();
          //     },
          //   },
          width: "100%",
          height: "250px",
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            blur: 7,
            opacity: 0.2,
            color: "#2fa8ec",
          },
          sparkline: {
            //enabled: true,
          },
        },
        dataLabels: {
          //enabled: false,
        },
        legend: {
          //show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
          type: "datetime",
          labels: {
            datetimeUTC: true,
          },
        },
        yaxis: {
          tickAmount: 4,
          min: 0,
          labels: {
            formatter: (value) => (Math.round(value * 100) / 100).toFixed(2),
          },
        },
        grid: {
          //show: false,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy HH:mm",
          },
          style: {
            fontSize: "15px",
            color: "#000",
            fontFamily: undefined,
          },
          fillSeriesColor: false,
        },
      },
    };
  }
  render() {
    if (false) {
      return null;
    }

    const testdata = [
      {
        datetime: "05/06/2014",
        rate: 100,
      },
      {
        datetime: "05/06/2015",
        rate: 200,
      },
      {
        datetime: "05/06/2016",
        rate: 230,
      },
      {
        datetime: "06/07/2016",
        rate: 120,
      },
    ];

    let data = testdata.map((row) => {
      return { x: row.datetime, y: row.rate };
    });

    let series = [
      {
        name: "title",
        data,
      },
    ];

    return (
      <Chart
        options={this.state.options}
        series={series}
        height="250px"
        width="100%"
        type="area"
        style={{ width: "100%" }}
      />
    );
  }
}

export default AreaChart;
