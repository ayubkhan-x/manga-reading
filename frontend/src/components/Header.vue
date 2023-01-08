<template>
  <header class="header" id="header">
      <div class="header__df top ">
        <div class="header__left ">
          <div class="header__left_items">
            <div class="header__left_item">
              <img src="../assets/img/icons/glasses.svg">
              <span>Read Now</span>
            </div>
            <div class="header__left_item">
              <img src="../assets/img/icons/play.svg">
              <span>Anime Online</span>
            </div>
          </div>
        </div>
        <div class="header__right">
          <div class="header__right_title">
            Follow Us:
          </div>
          <div class="header__right_items">
            <div class="header__right_item">
              <img src="../assets/img/icons/reddit.svg">
              <span>Reddit</span>
            </div>
            <div class="header__right_item">
              <img src="../assets/img/icons/twitter.svg">
              <span>Twitter</span>
            </div>
            <div class="header__right_item">
              <img src="../assets/img/icons/discord.svg">
              <span>Discord</span>
            </div>
          </div>

        </div>
      </div>
      <div class="header__df bottom">
        <div class="header__wrap_one">
          <div class="header__wrap_one_logo">
            <router-link to="/">logo</router-link>
          </div>
          <div class="header__wrap_one_search">
            <div class="header__wrap_one_search_filter">
              <router-link to="/filter">filter</router-link>
            </div>
            <router-link to="/search" class="header__wrap_one_search_inp">
              <button>Search manga...</button>
            </router-link>
            <router-link to="/search" class="header__wrap_one_search_icon">
              <img src="../assets/img/icons/search.svg">
            </router-link>
          </div>
        </div>
        <div class="header__wrap_two">
          <ul class="header__wrap_two_menu">
            <li><a href="#" class="header__wrap_two_menu_link">Completed</a></li>
            <li>
              <router-link to="/categories" class="header__wrap_two_menu_link">Categories</router-link>
            </li>
            <li><a href="#" class="header__wrap_two_menu_link">A-Z List</a></li>
            <li><a href="#" class="header__wrap_two_menu_link">News</a></li>
          </ul>
        </div>
        <div class="header__wrap_three">
          <div class="header__wrap_three_item">
            <img src="../assets/img/icons/moon.svg">
            <span>Dark Mode</span>
          </div>
          <div class="header__wrap_three_item">
            <img src="../assets/img/icons/account.svg">
            <span>Member</span>
          </div>
        </div>
      </div>
    <div class="mob">
      <div class="mob__df">
        <div class="mob__df_item">
          <div v-if="menuOpen">
            hello
          </div>
        <div class="mob__menu" @click="menuOpen = !menuOpen">
          <div class="mob__menu_item"></div>
          <div class="mob__menu_item"></div>
          <div class="mob__menu_item"></div>
        </div>

        <div class="mob__logo">
          <router-link to="/">logo</router-link>
        </div>
        </div>
        <div class="mob__df_item">
        <div class="mob__icons">
          <div class="mob__icons_item">
            <img src="../assets/img/icons/mob-search.svg">
          </div>
          <div class="mob__icons_item">
            <img src="../assets/img/icons/mob-account.png">
          </div>
        </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "v-Header",
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style lang="scss">
.header {
  .top {
    background-color: #5F25A6;
    padding: 22px 70px 19px 70px;
  }

  .bottom {
    background: #7B36CE;
    padding: 23px 70px 24px 70px;
  }

  &__df {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
    &_items {
      display: flex;
      align-items: center;
      gap: 59px;
    }

    &_item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  &__right {
    display: flex;
    align-items: center;

    &_title {
      color: #fff;
      font-weight: 700;
      margin-right: 27px;
      font-size: 20px;
    }

    &_items {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &_item {
      display: flex;
      align-items: center;
      gap: 7.5px;
      color: #fff;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
    }
  }

  &__wrap {
    &_one {
      display: flex;
      align-items: center;
      gap: 29px;

      &_logo {
        padding: 14px 37px 12px 38px;
        background: transparent;
        border: 1px solid #FFFFFF;
        border-radius: 4px;

        a {
          font-weight: 700;
          font-size: 38px;
          color: #fff;
        }
      }

      &_search {
        width: 322px;
        height: 53px;
        background: #fff;
        border-radius: 9px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_filter {
          padding: 10px 6px 8px 6px;
          background: #E9DAFF;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          color: #5F25A6;
          text-transform: uppercase;
          margin-left: 7px;
          cursor: pointer;
        }

        &_inp {
          button {
            background: none;
            outline: none;
            border: none;
            font-weight: 500;
            font-size: 14px;
            color: #6C757D;
            cursor: pointer;
          }
        }

        &_icon {
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }

    &_two {
      &_menu {
        display: flex;
        align-items: center;
        gap: 35px;

        &_link {
          font-weight: 600;
          font-size: 18px;
          color: #fff;
        }
      }
    }

    &_three {
      display: flex;
      align-items: center;
      gap: 66px;

      &_item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}

.mob {
  display: none;
}

@media screen and (max-width: 320px) {
  .header {
    &__df {
      display: none;
    }
  }
  .mob {
    display: block;
    width: 320px;
    height: 103px;
    background: #7B36CE;
    padding-top: 42px;
    padding-bottom: 24px;

    &__df {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_item {
        display: flex;
        align-items: center;
        gap: 18px;
        padding-right: 15px;
        padding-left: 15px;
      }
    }
    &__menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      &_item {
        width: 22px;
        height: 3px;
        background: #FFFFFF;
        border-radius: 1px;
      }
    }
    &__logo {
      width: 86px;
      height: 37px;
      background: #7B36CE;
      border: 1px solid #FFFFFF;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
      }
    }
    &__icons {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  .dropdown-after {
    transition: height 0.2s ease;
  }
}
</style>
