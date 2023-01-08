<template>
  <router-link to="/manga">
    <div class="first__card_item">
      <div class="first__card_item_img">
        <img :src="require(`../assets/img/${imageUrl}`)">
      </div>
      <div class="first__card_item_info">
        <div class="first__card_item_info_title">
          Kaguya Sama Love Is War
        </div>
        <div class="first__card_item_info_time">
          <img src="../assets/img/icons/clock.svg">
          <span>4 hours ago</span>
        </div>
        <div class="first__card_item_info_act">
          <div class="first__card_item_info_act_wrap">
            <div class="first__card_item_info_act_item">
              Actions
            </div>
            <div class="first__card_item_info_act_item">
              Actions
            </div>
            <div class="first__card_item_info_act_item">
              Actions
            </div>
          </div>
          <div class="first__card_item_info_act_wrap">
            <div class="first__card_item_info_act_item">
              Actions
            </div>
            <div class="first__card_item_info_act_item">
              Actions
            </div>
          </div>
        </div>
        <div class="first__card_item_info_text">
          In this world, there exists monsters called Kajiki. They are huge and scary, for they were created to
          be
          eaten by gods. However, they are also very delicious…! Let the battles between monstrous food and a
          young chef begin!
        </div>
        <div class="first__card_item_info_btn">
          <router-link to="/manga" class="first__card_item_info_btn_read">
            <img src="../assets/img/icons/eye.svg">
            <span>Read Now</span>
          </router-link>
          <div class="first__card_item_info_btn_save">
            <img src="../assets/img/icons/save.svg">
          </div>
        </div>
        <div class="first__card_item_info_chapter">
          <div class="first__card_item_info_chapter_item">
            <span class="first__card_item_info_chapter_item_v1">Chapter 22</span>
            <span class="first__card_item_info_chapter_item_v2">13 hours ago</span>
          </div>
          <div class="first__card_item_info_chapter_item">
            <span class="first__card_item_info_chapter_item_v1">Chapter 22</span>
            <span class="first__card_item_info_chapter_item_v2">13 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "MangaCard",
  props: {
    imageUrl: String
  }

}
</script>

<style scoped lang="scss">
.first {
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
}

</style>
