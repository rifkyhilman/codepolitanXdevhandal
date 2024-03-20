<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h3>Oops! Page not found</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  #notfound {
    position: relative;
    height: 100vh;
  }

  #notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound-404 {
    position: relative;
    height: 240px;
  }

  .notfound-404 h3 {
    font-family: cabin, sans-serif;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #262626;
    margin: 0;
    letter-spacing: 3px;
    padding-left: 6px;
  }

  .notfound-404 h1 {
    font-family: montserrat, sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 252px;
    font-weight: 900;
    margin: 0;
    color: #262626;
    text-transform: uppercase;
    letter-spacing: -40px;
    margin-left: -20px;
  }
  
  .notfound .notfound-404 h1>span {
    text-shadow: -8px 0 0 #fff;
   }

</style>