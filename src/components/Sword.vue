<template>
  <!-- this displays when Sword beach pin is clicked on -->
  <div class="Sword">
    <h1 class="vue-title">Sword</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>Sword Beach was the easternmost beach of the five landing areas. It was the invasion beach for units of the British 3rd Division, with French and British commandos attached.
            The area code-named Sword Beach occupied an 8-km stretch of the French coastline from Lion-sur-Mer on the west to the city of Ouistreham, at the mouth of the Orne River, on the east.
            The area was dotted with vacation homes and tourist establishments located behind a seawall. It was also approximately 15 km north of the hub city of Caen. All major roads in this sector
            of the Norman countryside ran through Caen which made it a key city to both the Allies and the Germans for transportation and maneuver purposes.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>The Germans had fortified the area with relatively light defenses consisting of beach obstacles and fortified emplacements in the sand dunes. However, the defense of
            the beach was layecd iin the hands of 75-mm guns located at the coastal town of Merville, some 8 km to the east across the Orne River estuary and bigger 155-mm guns located some 32 km
            farther east at Le Havre. A few miles inland from the beach were 88-mm guns capable of supporting the machine guns and mortars that were placed in the dunes and villas and that
            constituted the Germans first line of defenses. There were also antitank ditches and mines as well as huge concrete walls blocking the streets of the towns. The German 716th Infantry
            Division specifically the 736th and 125th regiments along with forces of the 21st Panzer Division were in the vicinity and were capable of participating in defensive or offensive operations with
            711th Division which lay across the Dives River to the east.</p></td>
      </tr>
      <tr>
        <td>
          <p>Sword beach was also assigned to the British 2nd army under Lieutenant General Miles Dempsey. The objective of the 3rd Division was to push across Sword Beach and pass through Ouistreham to capture
            Caen and the important Carpiquet airfield nearby. Commandos, under Simon Fraser, had the mission of fighting their way off the beach and pushing some 5 km  inland toward the Orne River and
            Caen Canal bridges, where they were to link up with the airborne forces.</p></td>
      </tr>
      <tr>
        <td>
          <p>The invading forces landed at half 7 in the morning and were greeted with moderate fire. They were able to put out suppressing fire and by 8 am the fighting was mostly inland. The commandos
            had achieved their most important objective by 1 pm which meant they had linked up with airborne troops at the bridges over the Orne waterways. On the right flank the British had been unable
            to link up with Canadian forces from Juno Beach and at 4 pm tank forces and mechanized infantry units from the 21st Panzer Division launched the only serious German counterattack of the whole invasion.
            The 192nd Panzer Grenadier Regiment actually reached the beach at 8 pm but the division’s 98 panzers were halted by antitank weapons, air strikes, and Allied tanks themselves and the counterattack was stopped</p></td>
      </tr>
      <tr>
        <td>
          <p>At the end of the day, the British had landed 29,000 men and had taken 630 casualties. German casualties were much higher and many Germans had been taken prisoner. However, for the Allies the optimistic objectives of Caen
            and the Carpiquet aerodrome were still a long 5 km away.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Sword'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Sword {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Sword.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: deepskyblue;
  }
  .Sword .info {
    color: deepskyblue;
    font-family: bold;
    font-size: 15pt;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
