<template>
  <Header/>
  <main>
    <section class="filter">
      <div class="container">
        <div class="filter__heading">
          <div class="filter__title">
            FILTER
          </div>
          <div class="filter__act">
            <div class="filter__act_wrap">
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
            </div>
            <div class="filter__act_wrap">
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
              <div class="filter__act_item">
                <span class="filter__act_item_v1">Type</span>
                <span class="filter__act_item_v2">All</span>
              </div>
            </div>
          </div>
        </div>
        <div class="filter__heading">
          <div class="filter__title">
            GENRES
          </div>
          <div class="filter__genr">
            <div class="filter__genr_wrap">
              <div class="filter__genr_item">Action</div>
              <div class="filter__genr_item">Adventure</div>
              <div class="filter__genr_item">Cars</div>
              <div class="filter__genr_item">Comedy</div>
              <div class="filter__genr_item">Dementia</div>
              <div class="filter__genr_item">Demons</div>
              <div class="filter__genr_item">Doujinshi</div>
              <div class="filter__genr_item">Drama</div>
              <div class="filter__genr_item">Ecchi</div>
            </div>
            <div class="filter__genr_wrap">
              <div class="filter__genr_item">Action</div>
              <div class="filter__genr_item">Adventure</div>
              <div class="filter__genr_item">Cars</div>
              <div class="filter__genr_item">Comedy</div>
              <div class="filter__genr_item">Dementia</div>
              <div class="filter__genr_item">Demons</div>
              <div class="filter__genr_item">Doujinshi</div>
              <div class="filter__genr_item">Drama</div>
              <div class="filter__genr_item">Ecchi</div>
            </div>
          </div>
        </div>
        <div class="filter__title">
          FILTER RESULTS
        </div>
        <div class="filter__card">
          <div class="filter__card_wrap">
            <MangaCard
                image-url="categories1.png"
            />
            <MangaCard
                image-url="filter2.png"
            />
            <MangaCard
                image-url="filter3.png"
            />
            <MangaCard
                image-url="filter4.png"
            />
            <MangaCard
                image-url="filter5.png"
            />
            <MangaCard
                image-url="filter6.png"
            />
          </div>
          <div class="filter__card_wrap">
            <MangaCard
                image-url="filter7.png"
            />
            <MangaCard
                image-url="filter8.png"
            />
            <MangaCard
                image-url="filter9.png"
            />
            <MangaCard
                image-url="filter10.png"
            />
            <MangaCard
                image-url="filter11.png"
            />
            <MangaCard
                image-url="filter12.png"
            />
          </div>
        </div>
      </div>

    </section>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MangaCard from "@/components/MangaCard.vue";

export default {
  name: "FilterView",
  components: {
    Header,
    Footer,
    MangaCard
  },
}
</script>

<style scoped lang="scss">
.filter {
  &__title {
    margin-top: 60px;
    font-weight: 800;
    font-size: 36px;
    color: #000000;
  }

  &__act {
    &_wrap {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 15px;
    }

    &_item {
      width: 159px;
      height: 50px;
      border: 1px solid #5F25A6;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      &_v1 {
        font-weight: 500;
        font-size: 18px;
        color: #000000;
      }

      &_v2 {
        font-weight: 500;
        font-size: 18px;
        color: #5F25A6;
      }
    }
  }

  &__genr {
    &_wrap {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }

    &_item {
      padding: 10px 15px;
      background: #E0C6FF;
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      color: #5F25A6;
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;
  }
}
</style>
