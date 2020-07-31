const apiData = [
  {
    lp_id: 111,
    ratio: 50.0,
  },
  {
    lp_id: 222,
    ratio: 30.0,
  },
  {
    lp_id: 333,
    ratio: 20.0,
  },
];

const dataLabelColor = {
  color: 'white',
};
const backGroundColors = ['blue', 'red', 'green'];

const processApiData = _.map(apiData, (obj) => ({
  ...obj,
  datalabels: dataLabelColor,
  label: obj.lp_id.toString(),
  // FIXME: 色をオブジェクトごとに順番につける処理が必要
  backgroundColor: 'blue',
  data: [obj.ratio],
}));

const correctData = [
  {
    // グラフ内の文字色
    datalabels: dataLabelColor,
    label: '資料1',
    backgroundColor: 'blue',
    data: [25, 36],
  },
  {
    datalabels: dataLabelColor,
    label: '資料2',
    backgroundColor: 'red',
    data: [20, 18],
  },
  {
    datalabels: dataLabelColor,
    label: '資料3',
    backgroundColor: 'gold',
    data: [16, 29],
  },
  {
    datalabels: dataLabelColor,
    label: '資料4',
    backgroundColor: 'green',
    data: [22, 7],
  },
  {
    datalabels: dataLabelColor,
    label: 'その他',
    backgroundColor: 'orange',
    data: [17, 10],
  },
];

Vue.component('bar-chart', {
  extends: VueChartJs.HorizontalBar,
  data() {
    return {
      chartData: {
        // グラフの項目名
        labels: ['山田太郎', '田中花子'],
        // データ内容
        datasets: processApiData,
      },
      options: {
        title: {
          display: true,
          text: '資料利用時間内訳の比較',
        },
        // 凡例の設定
        legend: {
          position: 'right',
        },
        scales: {
          xAxes: [
            {
              stacked: true, //積み上げ棒グラフの設定
              // 横軸の説明
              scaleLabel: {
                display: true,
                labelString: '資料利用時間の内訳',
              },
              ticks: {
                max: 100, // 目盛りの最大値
                stepSize: 25, // 1目盛りのサイズ
              },
            },
          ],
          yAxes: [
            {
              stacked: true, //積み上げ棒グラフの設定
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              return value + '%';
            },
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});

var vm = new Vue({
  el: '#app',
});

[
  {
    datalabels: dataLabelColor,
    label: '資料2',
    backgroundColor: 'red',
    data: [20, 18],
  },
];
