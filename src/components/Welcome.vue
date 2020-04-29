<template>
  <!-- Welcome code that displays on welcome page -->
  <div class="Welcome">
    <h1 class="vue-title">Welcome</h1>
    <table>
      <div class="info">
      <tr>
        <td>
          <p>Welcome to Normandy. This is web application about the Normandy Landings on june the 6th 1944. The application looks at everything from beaches
          to objectives and what role they served in the invasion.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>In this application, you can use the map and click on a pin to get information about what happened there and if you register you can use the live chat room and
          send private messages to me if you have questions or suggestions.</p></td>
      </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
<!-- styling code -->
<style scoped>
  .Welcome {
    margin-top: 30px;
    justify-content: left;
    background-image: url(../assets/Welcome.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    color:deeppink;
  }
  .Welcome .info {
    color: deeppink;
    font-family: bold;
    font-size: 15pt;
  }
</style>
