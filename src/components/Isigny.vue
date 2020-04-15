<template>
  <!-- this displays when Isigny pin is clicked on -->
  <div class="Isigny">
    <h1 class="vue-title">Isigny</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>Isigny was very important to the allies as Isigny was an important port town and industrial town before the war to the french. Isigny was more than 60% destroyed by two bombardments on 8 June 1944 and has since been almost entirely rebuilt.
            Isigny played its part in the D-Day landings with twenty small Dutch schuyts employed by the Americans to bring stores and equipment inland from the larger cargo ships that were moored off-shore. Charles de Gaulle paid its inhabitants visits on 14 June 1944 and 16 June 1946.
          </p>
        </td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Isigny'
}
</script>
<!-- styling code -->
<style scoped>
  .Isigny {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Isigny.jpg);
  <!-- sets image as background -->
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    color: deepskyblue;
  }
  .Isigny .info {
    color: deepskyblue;
    font-family: bold;
    font-size: 15pt;
  }
</style>
