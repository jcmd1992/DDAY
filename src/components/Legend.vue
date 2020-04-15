<template>
  <!-- this displays when Legend tab is clicked on is clicked on -->
  <div style="width: 600px">
    <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'Legend',
  data () {
    return {
      params: {
        data: [
          ['Colour', 'Location', 'Description'],
          ['Yellow', 'Co. Mayo Ireland, Dover England, Calais France', 'Click on the pins for more information that played a part in DDAY'],
          ['Green', 'Invasion Beaches left to right - Utah, Omaha, Gold, Juno, Sword', 'ba045d', 'Click on the pins for information on that beach'],
          ['Blue', 'Pointe Du Hoc, cliffs between Utah and Omaha', 'Click for information on the assualt that was apart of DDAY but not on a beach'],
          ['Orange', 'Airborne drops - Contetin Peninsula and near Caen', 'Click for more information on the airborne landings'],
          ['Purple', 'Objectives - Caen, Carentan, Bayeux, Isigny', 'Click for more information on the invasion objectives']
        ],
        header: 'row',
        border: true,
        stripe: true
      }
    }
  },
  components: { VueTableDynamic }
}
</script>

<style scoped>

</style>
