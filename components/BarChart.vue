<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: {
    dataSet: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    scaleLabelText: {
      type: String,
      required: true
    },
    legendPosition: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      chartData: {
        // グラフの項目名
        labels: this.labels,
        // データ内容
        datasets: this.dataSet,
      },
      options: {
        // 凡例の設定
        legend: {
          position: this.legendPosition,
        },
        scales: {
          xAxes: [
            {
              // 横軸の説明
              scaleLabel: {
                display: true,
                labelString: this.scaleLabelText,
              },
              ticks: {
                max: 1.0, // 目盛りの最大値
                stepSize: 0.2, // 1目盛りのサイズ
              },
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
}
</script>
