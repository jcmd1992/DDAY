<template>
  <!-- this displays when Bayeux pin is clicked on -->
  <div class="Bayeux">
    <h1 class="vue-title">Bayeux</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>The soldiers of the SS left the town on 6 June 1944. Thanks to the actions of the Resistance and individuals, the Allies were informed that the Germans had left Bayeux, and that there was no point in bombing: the town was thus unharmed.
            Bayeux's proximity to the Landing beaches meant it became a transit hub for both soldiers and civilians. The town was strategically positioned for the Allies with thousands of soldiers and vehicles passing through on their way to the combat zones.
            Their machines could not get through the narrow streets of the medieval city. Allied engineering units built a road around the town, a Bypass, to facilitate the flow of traffic.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p> Since Bayeux had not been destroyed, its infrastructure and hospital were still operational and able to accommodate both Allied liberators and refugees fleeing from the fighting. The hospital took in large numbers of both civilian and military casualties,
            and additional hospital space was very soon needed. The seminary, which now houses the Bayeux Tapestry, and the schools were requisitioned.</p></td>
      </tr>
        </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Bayeux'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Bayeux {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Bayeux.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    color:deepskyblue;
  }
  .Bayeux .info {
    color: deepskyblue;
    font-family: bold;
    font-size: 15pt;
  }
</style>
