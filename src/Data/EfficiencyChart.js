var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;

var date = [];
var data = [Math.random()];

//simulation for data populating
// for (var i = 1; i < 20000; i++) {
//   var now = new Date((base += oneDay));
//   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
//   var value = Math.round((Math.random() - 0.5) * 20 + data[i - 1]);
//   if (value < 0) {
//     value = value * -1;
//   }
//   data.push(value);
// }

 for (var i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  //var value = Math.round((Math.random() - 0.5) * 20 + data[i - 1]);
  var value = Math.round((Math.random()*100));
  if (value < 0) {
    value = value * -1;
  }
  data.push(value);
}

export const optionAreaEchart = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "",
    },
    grid: {
      top: 10,
      left: 45,
      right: 35,
    },
    toolbox: {
      show: false,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 80,
        end: 90,
      },
      {
        start: 0,
        end: 10,
        handleIcon:
          "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        handleSize: "80%",
        handleStyle: {
          color: "#fff",
          shadowBlur: 3,
          shadowColor: "rgba(0, 0, 0, 0.6)",
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
      },
    ],
    series: [
      {
        name: "efficiency",
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color:
            (0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(255, 158, 68,0.2)",
              },
              {
                offset: 1,
                color: "rgba(255, 70, 131)",
              },
            ]),
        },
        data: data,
      },
    ],
  };