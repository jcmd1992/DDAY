<template>
  <!-- this displays when the wethear pin is clicked on -->
  <div class="Weather">
    <h1 class="vue-title">Weather</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>A lighthouse, at Blacksod Co.Mayo, is the reason why the invasion occurred on june the 6th. The invasion was originally planned for the 4th of june but a storm in the english channel was putting a spanner in the works. The invasion was delayed by 24 hours.
          The allies were about to postpone again for an unknown period of time as they did not see a break in the storm coming were the weather and sea would be settled enough for planes to fly and ships to sail safely across the channel. If it wasnt for the lighthouse in mayo that
          was also a weather station may never had happened as the station showed the be a break in the storm the morning of june the 6th and even though the weather report wasnt 100% accurate the allies gambled which paid off.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Never-mind the location of the invasion being a surprise to the Germans, the day of the invasion was also a bit of a surprise because right upm till june the 6th the weather was too poor for an invasion so the Germans wouldn't of expected it on june the 6th and the reason is
          the Germans didn't know about the break in the weather. The Germans had better equipment for detecting weather and predicting patterns but they couldnt see past the English channel which means they could't see what was coming from the Atlantic sea. If the Germans had seen the
            break in the storm, the invasion of Normandy might of had an different outcome.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Weather'
}
</script>
<!-- Styling Code -->
<style scoped>
  .Weather {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Weather.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: lightgreen;
    height: 100vh;
  }
  .Weather .info {
    color: lightgreen;
    font-family: bold;
    font-size: 15pt;
  }
</style>
