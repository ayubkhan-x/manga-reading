<template>
  <Header/>
  <main>
    <section class="first">
      <div class="container">
        <div class="first_about">
          <div class="first__card">
            <div class="first__title_df">
              <div class="first__title">
                CATEGORIES
              </div>
            </div>
            <div class="first__act">
              <router-link to="/filter" class="first__act_item">
                Latest
              </router-link>
              <router-link to="/filter" class="first__act_item">
                A-Z
              </router-link>
              <router-link to="/filter" class="first__act_item">
                Rainting
              </router-link>
              <router-link to="/filter" class="first__act_item">
                Tranding
              </router-link>
              <router-link to="/filter" class="first__act_item">
                Most Views
              </router-link>
              <router-link to="/filter" class="first__act_item">
                New
              </router-link>
            </div>
            <MangaCard
              image-url="categories1.png"
            />
            <MangaCard
                image-url="categories2.png"
            />
            <MangaCard
                image-url="categories3.png"
            />
            <MangaCard
                image-url="categories4.png"
            />
          </div>
          <div class="first__genres">
            <div class="first__genres_heading">
              <div class="first__title">
                GENRES
              </div>
              <div class="first__genres_line"></div>
            </div>
            <div class="first__genres_info">
              <div class="first__genres_info_wrap">
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">4 koma</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Adult</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Artbook</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Comedy</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Doujinshi</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Ecchi</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Gender Bender</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Harem</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Horror</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Josei</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Manhua</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Martial Arts</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Medical</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Mystery</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Reincarnation</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">School Life</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Seinen</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shota</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shoujo Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shoujo Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shounen Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Smut</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Super power</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
              </div>
              <div class="first__genres_info_wrap">
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">4 koma</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Adult</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Artbook</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Comedy</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Doujinshi</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Ecchi</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Gender Bender</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Harem</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Horror</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Josei</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Manhua</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Martial Arts</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Medical</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Mystery</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Reincarnation</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">School Life</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Seinen</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shota</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shoujo Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shoujo Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Shounen Ai</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Smut</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
                <div class="first__genres_info_item">
                  <span class="first__genres_info_item_v1">Super power</span>
                  <span class="first__genres_info_item_v2">(226)</span>
                </div>
              </div>
            </div>
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
  name: "CategoriesView",
  components: {
    Header,
    Footer,
    MangaCard
  },
}
</script>

<style lang="scss" scoped>
.first {
  margin-top: 82px;

  &__title {
    font-weight: 800;
    font-size: 40px;
    color: #000000;
    margin-bottom: 20px;

    &_df {
      display: flex;
      justify-content: space-between;
    }
  }

  &__act {
    display: flex;
    align-items: center;
    gap: 5px;

    &_item {
      padding: 10px 15px 10px 15px;
      border: 1px solid #5F25A6;
      border-radius: 4px;
      color: #5F25A6;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.8s all;
      cursor: pointer;

      &:hover {
        background: #5F25A6;
        color: #fff;
      }
    }
  }

  &_about {
    display: flex;
    justify-content: space-between;
  }

  &__card {
    &_item {
      width: 727px;
      height: 477px;
      background: #F8F8F8;
      border-radius: 10px;
      display: flex;
      gap: 20px;
      padding: 27px 20px;
      margin-top: 20px;

      &_info {
        &_title {
          max-width: 213px;
          font-weight: 700;
          font-size: 32px;
          color: #000000;
        }

        &_time {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-weight: 500;
          font-size: 18px;
          color: #000000;
        }

        &_act {
          &_wrap {
            display: flex;
            gap: 5px;
          }

          &_item {
            padding: 10px 15px;
            border: 1px solid #5F25A6;
            border-radius: 4px;
            margin-top: 5px;
          }
        }

        &_text {
          font-weight: 500;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin-top: 13px;
        }

        &_btn {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 9px;

          &_read {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            width: 168px;
            height: 46px;
            background: #FCE155;
            border-radius: 4px;
            font-weight: 500;
            font-size: 18px;
            color: #000000;
            cursor: pointer;
          }

          &_save {
            padding: 13px 15px;
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            cursor: pointer;
          }
        }

        &_chapter {
          margin-top: 33px;

          &_item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;

            &_v1 {
              font-weight: 500;
              font-size: 14px;
              color: #308BDE;
            }

            &_v2 {
              font-weight: 500;
              font-size: 14px;
              color: #ACACAC;
            }
          }
        }
      }
    }
  }

  &__genres {
    width: 513px;
    height: 1043px;
    padding-top: 22px;
    padding-left: 20px;
    background: #F8F8F8;
    border-radius: 10px;
    &_info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_item {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 10px;
        cursor: pointer;
        &_v1 {
          font-weight: 400;
          font-size: 24px;
          color: #000000;
        }
        &_v2 {
          font-weight: 500;
          font-size: 24px;
          color: #9A9A9A;
        }
      }
    }
  }
}
</style>
