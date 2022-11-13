<template>
  <div>

      <div class="content">
        <h1 class="header">{{ msg }}</h1>
        <div class="links">
          <img class="logo-1" alt="sambat logo" src="../assets/sambat.png">
        <div>
          <h2 class="social-network-text">Мессенджеры и соц. сети</h2>
          <div>

            <img class="social-network-icon" alt="sambat logo" src="../assets/viber.png">
            <img class="social-network-icon" alt="sambat logo" src="../assets/whatsapp.png">
            <img class="social-network-icon" alt="sambat logo" src="../assets/vk.png">
          </div>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'GroupLinks',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
}
.group {
  display: block;

}

.logo-1 {
  margin-right: 48px;
}

.header {
  margin-bottom: 48px;
}

.content {
  display: block;
  margin-bottom: 72px;
}
.links {
  display: flex;
  justify-content: center;
}

.social-network-icon {
  width: 100px;
  height: 100px;
  margin-right: 48px;
}
.social-network-text {
  margin-bottom: 36px;

}
</style>
