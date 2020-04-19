<template>
  <!-- this displays when Utah beach pin is clicked on -->
  <div class="Utah">
    <h1 class="vue-title">Utah</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>Utah was the western beach that was invaded. It was 5km wide adn had the same defences as Omaha but they were more sparse as the beach was full of dunes and
          the immediate area behind the beach was flooded. The beach defences were based on fixed infantry positions. The most heavily defended part of the beach was Les Dunes de Varreville.
          There were 4 causeways that exited the beach and they were defended by strongpoints equipped with automatic weapons. There were also field artillery batteries some 3km inland and
            the soliders defending it were the German 709th, 243rd and the 91st infantry divisions.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Utah beach itself was not originally one of the beaches to be invaded but General Dwight D. Eisenhower, Supreme Commander of Allied Forces, decided to add it to facilitate the early capture
          of the port of Cherbourg at the end of the Contetin Peninsula. This port would prove important for the allies push inland away from the beaches. This beach was invaded by the U.S 4th infantry division
          and were backed up by 32 special amphibious sherman tanks.</p></td>
      </tr>
      <tr>
        <td>
          <p>The landings went wrong right from the beginning because the landing craft got confused heading to the beach and also because of strong currents made them drift of course. They got confused because of the fact there was
          a lot of smoke from the offshore bombardment ofthe defences that occured befire the landings begun. This put soldiers on a lightly defended part of the beach as some were supposed to land directly in front of the
          heavily fortified part of the beach. This did however benefit the allies in the long run. Another huige blow to the landing plan was that 3 of the four control craft were destroyed by sea mines. The last one control craft
            managed to managed to round up other landing craft and guide them to the beach by using a bullhorn for communication. The landing force landed 1,800 metres away from the designated area. When the assistant division Commander,
            Brigadier General Theodore Roosevelt, Jr., realized the error he made a famous remark which is "We’ll start the war from here!". He ordered the division to advance and within 3 hours exits 1, 2 and 3 were secure and by noon they
          had made contact with the paratroopers that were dropped in the area 5 hours before the landing had started. The soldiers had pushed 6km inland by the end of the day.</p></td>
      </tr>
      <tr>
        <td>
          <p>20,000 soldiers and 1,700 motorized vehicles landed on the beach and only suffered 300 casualties which was below the most optimistic expectations. The invasion of this beach was a huge success because of the confusion uin the beginning.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Utah'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Utah {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Utah.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: darkgoldenrod;
  }
  .Utah .info {
    color: darkgoldenrod;
    font-family: bold;
    font-size: 15pt;
  }

  .Utah .image {
height: 1vh;
    width: 1vw;
  }

  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
