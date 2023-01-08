<template>
<Header/>
<main>
  <section class="manga-view">
    <div class="manga-view__title">
      Trapped in a Webnovel as a Good-for-Nothing
    </div>
    {{image}}
    <div class="manga-view__screen">
      <div class="manga-view__screen_btn">
        <div class="manga-view__screen_btn_prev">
          <img src="../assets/img/icons/prev.svg" alt="">
          Prev
        </div>
        <div class="manga-view__screen_btn_chapters">
          Chapter
        </div>
        <div class="manga-view__screen_btn_next">
          Next
          <img src="../assets/img/icons/next.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</main>
</template>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "MangaView",
  data() {
    return {
      manga: [],
      image: ''
    }
  },
  components: {
    Header
  },
  async created() {
    const { data } = await axios.get("http://localhost:3000/manga");
    this.manga = data;
  },
  methods: {
    async addBook() {
      const { data } = await axios.post("http://localhost:3000/manga", {
        image: this.title,
      });

      this.manga = [...this.image, data];
      this.image = '';
    }
  }
}
</script>

<style scoped lang="scss">
.manga-view {
  &__title {
    margin-top: 60px;
    margin-bottom: 60px;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #000000;
  }
  &__screen {
    text-align: center;
    margin-bottom: 60px;
    &_btn {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      &_prev,
      &_next{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        width: 129px;
        height: 53px;
        background: #FCE155;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        cursor: pointer;
      }
      &_chapters {
        padding: 10px 389px 9px 35px;
        background: #FFFFFF;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.22);
        border-radius: 7px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #000000;
      }
    }
  }
}
</style>
