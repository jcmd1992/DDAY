<template>
  <!-- this displays when Omaha beach pin is clicked on -->
  <div class="Omaha">
    <h1 class="vue-title">Omaha</h1>
    <table>
      <div class = "info">
      <tr>
        <td>
          <p>Omaha was the largest of the 5 beaches on DDAY and was assaulted by the U.S 29th infantry division and the 1st infantry division. The beach was 10km
          and had a seawall 3 metres high on the western third of the beach. There was also cliffs 30 metres high the whole way along the beach which meant that getting off the beach wouldn't be that easy especially since there were on 5 exits in total.</p>
        </td>
      </tr>
    <tr>
      <td>
          <p>The Germans had put defenses on all the beach which consisted of cliff top bunkers and barbed wire and tank traps on the beach. The tank traps and barbed wire had failed that day.
          The Germans had hoped that these would scrape the bottom of the higgins boats, which is the vehicle that was used to drop the men on the beach, if an invasion was to occur. The reason why this defenses failed
          was because on jun the 6th 1944 the tide was out and these defenses were exposed but this created another issue for the troops. The tide being out meant they were exposed to the Germans until they could reach cover of the embankment.</p></td>
    </tr>
      <tr>
        <td>
          <p>Omaha beach had the highest casualties out of all the beaches. The americans lost 2,000 men at this beach who were either dead, wounded or missing. The casualties started
          as soon as the ramp dropped on the higgins boat as they were all squashed in this boat and open to machine gun fire from MG42s sitting in the bunkers. This wasn't the only factor in deaths
          as because they were being mowed down before they managed to get off the higgins boats, soldiers decided to climb over the side of the boats with all their gear. This led to the drowning of
          many men because of the fact that their gear was too heavey, they were being shot as they were trying to get their head above water and a lot of men were getting sick before they even got to the
          beach because of the breakfast they had before they disembarked the big ships.</p></td>
        </tr>
    <tr>
      <td>
          <p>The men landing on the beaches had to fight past 352nd Division to get off the beach. The Germans had created a killzone on the beach with fire coming from bunkers machine gun nests
          which were all connected to an expansive trench system behind the cliff bunkers. The Germans were led by experienced German Field Marshall called Erwin Rommel. He was responsible for the
          construction of the defenses and it was his idea to build them even though no german knew where the invasion would take place.</p></td>
    </tr>
      <tr>
        <td>
          <p>The immediate objective of the American troops on this beach, who were led by Lieutenant General Omar Bradley, was to secure the entrances to the beach and the surrounding area. The rest of the
          objectives were to capture the villages of Vierville, Saint-Laurent, and Colleville, push to and cut the road between Bayeux and Isigny and link up with other beaches.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Omaha'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Omaha {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Omaha.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: deeppink;
  }
  .Omaha .info {
    color: deeppink;
    font-family: bold;
    font-size: 15pt;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
