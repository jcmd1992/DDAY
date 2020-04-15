<template>
  <!-- this displays when Cliffs pin is clicked on -->
  <div class="Cliffs">
  <h1 class="vue-title">Pointe Du Hoc</h1>
  <table>
    <div class="info">
    <tr>
      <td>
        <p>This peice of land, jutting out in the english channel, was between Omaha and Utah beach. Pointe du Hoc provided an elevated vantage point which made it a good location for huge German guns with a range of 25 km could deliver fire upon both Omaha Beach which was 7 km to the east and Utah Beach
          which was 11 km to the west.Allied intelligence and photoreconnaissance had identified five 155-mm guns emplaced in reinforced-concrete casemates on the Pointe, and Allied commanders had determined that the neutralization of these guns was the key to the fate of the Omaha and Utah landings.
          The area of the Pointe was defended by elements of the German 352nd Infantry Division. </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>The task of neutralizing the guns, and of cutting the road running behind the Pointe from Saint-Pierre-du-Mont to Grandcamp, fell to the 2nd and 5th ranger battalions, commanded by Lieutenant Colonel James Rudder. The scheme was to land Companies D, E, and F of the 2nd Battalion in a cliff-scaling attack
          on the Pointe while Company C landed to the east to destroy gun positions on the western end of Omaha Beach. Companies D, E, and F landed at the Pointe at 0710 hours, 40 minutes later than their planned landing time. They were the victims of heavy seas and winds, one of their landing craft having sunk on the way in.
          Once landed, the rangers engaged the Germans on top of the cliffs in a heavy firefight and within minutes the first man was up. The rangers fought their way to the casemates in small groups, only to find them empty of the big guns. They moved forward and cut the road behind the Pointe, and then a two-man patrol went
          down a narrow road leading south and discovered the guns some 500 metres from the casemates. The guns were zeroed in on Utah Beach and a German force, totaling some 100 men, was assembled a short distance away. The Rangers used thermite grenades to melt and destroy the guns’ elevating and traversing mechanisms, rendering the pieces immovable.
          They then returned to their positions.</p></td>
    </tr>
    <tr>
      <td>
        <p>Although early reports characterized the attack on the Pointe as a wasted effort because the German guns were not there, the attack was in fact highly successful. At 9 am the rangers on the Pointe had cut the road behind the Pointe and had put the guns out of action. They were thus the first American unit to accomplish its mission on D-Day
          at a cost of half of their fighting force. At the end of the day they were holding onto a small pocket on the heights of the Pointe, and the Germans were counterattacking. The rangers held out for two days until help arrived.</p></td>
    </tr>
    </div>
  </table>
  </div>
</template>

<script>
export default {
  name: 'Cliffs'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Cliffs {
    margin-top: 30px;
    justify-content: left;
  <!-- Sets image as background -->
    background-image: url(../assets/Cliffs.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: deepskyblue;
  }
  .Cliffs .info {
    color: deepskyblue;
    font-family: bold;
    font-size: 15pt;
  }
</style>
