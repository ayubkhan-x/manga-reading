<template>
<footer class="footer">
  <div class="container">
    <div class="footer__df">
      <div class="footer__logo">
        <router-link to="/">logo</router-link>
      </div>
      <div class="footer_link">
        <div class="footer_link_item">
          Terms of service
        </div>
        <div class="footer_link_item">
          News
        </div>
        <div class="footer_link_item">
          Contacts
        </div>
      </div>
      <div class="footer_subtitle">
        ©All rights reserved
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "v-Footer"
}
</script>

<style lang="scss">
.footer {
  margin-top: 60px;
  background: #5F25A6;
  height: 246px;
  &__df {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__logo {
    width: 154px;
    height: 73px;
    background: #5F25A6;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    a {
      font-weight: 700;
      font-size: 38px;
      color: #fff;
    }
  }
  &_link {
    margin-top: 35px;
    display: flex;
    gap: 35px;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  }
  &_subtitle {
    margin-top: 35px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
  }
}

</style>
