<template>
  <!-- this displays when Caen pin is clicked on -->
  <div class="Caen">
    <h1 class="vue-title">Caen</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>On D-Day Caen was an important Allied objective as it was an essential road hub, strategically astride the Orne River and Caen Canal. The Germans defended this stronghold with all their power.
            It took six weeks of fighting and heavy shelling to capture the capital of Normandy. 30,000 Anglo-Canadian soldiers and 3,000 civilians lost their lives.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>On 6 June 1944 Caen was the main objective for the British 3rd Infantry Division, that had landed on Sword Beach. Firmly positioned to the north and west of the city, two Panzer Divisions prevented the Allies from
            capturing the city in the first two days. The next few days General Montgomery attempted to take Caen by a pincer movement and attacked the city from the northeast and southwest. On 13 June the offensive was stalled in
            Villers-Bocage by German Tiger tanks.</p></td>
      </tr>
      <tr>
        <td>
          <p>A further attack was planned with the British 8th Corps. The so called Epsom Operation brought together 60,000 men with the intention of getting around Caen across the Odon River. Within a few days the offensive was
            stopped at the foot of hill 112. A few weeks later Montgomery decided to capture Caen in a frontal attack, that became known as Operation Charnwood. In the morning of 8 July, 115,000 men and 500 tanks of the British 1st Corps
            attacked. The previous day the town had been bombarded by 450 bombers of the Royal Air Force and 2,600 tons of bombs had been dropped, killing 300 civilians. During Operation Charnwood the British and Canadian troops reached
            the bridges of the Orne on 9th July. The left-bank was liberated, together with the Ilot Sanitaire, an emergency hospital and refuge, which sheltered some 20,000 civilians.</p></td>
      </tr>
      <tr>
        <td>
          <p>Montgomery launched Operation Goodwood to capture the right-bank. At dawn on 18 July 6,000 tons of bombs were dropped over eastern Caen. With the simultaneous Operation Atlantic, entrusted to the Canadians, the town was entirely
            liberated on 19 July 1944. Instead of one day, it took the Allies six weeks to capture the city. It was a Pyrrhic victory, with a devastating toll. 30,000 Anglo-Canadian soldiers were killed. 80% of the town was destroyed and it
            lost 3,000 of its inhabitants.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Caen'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Caen {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Caen.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: deepskyblue;
  }
  .Caen .info {
    color: deepskyblue;
    font-family: bold;
    font-size: 15pt;
  }
</style>
