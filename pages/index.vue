<template>
  <div>
    <StackBarChart
      :data-set="usedDocumentMetrics"
      :labels="['山田太郎', '田中花子']"
      scaleLabelText="資料利用時間内訳の比較"
    />
    <StackBarChart
      :data-set="usedDocumentMetrics"
      :labels="['山田太郎', '田中花子']"
      scaleLabelText="資料利用時間内訳の比較"
      legendPosition="right"
    />
  </div>
</template>

<script>
import StackBarChart from '@/components/StackBarChart.vue';
import { PERSON_1_ACTION_INDICES, PERSON_2_ACTION_INDICES } from '@/mock/data-mock.js'
import { CHART_COLOR_SETS } from '@/config/const.js'

import _min from 'lodash/min'

export default {
  components: {
    StackBarChart: StackBarChart
  },
  computed: {
    usedDocumentMetrics() {
      const { used_document_metrics:usedDocumentMetricsP1 } = PERSON_1_ACTION_INDICES;
      const { used_document_metrics:usedDocumentMetricsP2 } = PERSON_2_ACTION_INDICES;

      const items = _min([usedDocumentMetricsP1.length, usedDocumentMetricsP2.length]);

      return [...Array(items)].map((v, i) => {
          const { backgroundColor, datalabels } = CHART_COLOR_SETS[i];
          const lpName = usedDocumentMetricsP1[i].lp_name;
          const p1Ratio = usedDocumentMetricsP1[i].ratio;
          const p2Ratio = usedDocumentMetricsP2[i].ratio;

          return {
            datalabels: datalabels,
            label: lpName,
            backgroundColor: backgroundColor,
            data: [
              p1Ratio,
              p2Ratio
            ],
          };
      });
    }
  },
}
</script>

<style>

</style>
