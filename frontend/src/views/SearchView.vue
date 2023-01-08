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
  </header>
  <main>
    <div class="search">
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
      <div class="search__inp">
        <input type="text" placeholder="Search manga...">
        <router-link to="/filter" class="search__inp__icon">
          <img src="../assets/img/icons/search-v2.svg" alt="">
        </router-link>
      </div>
      <div class="search__reco">
        <div class="search__reco_wrap">
          <div class="search__reco_title">
            Top search:
          </div>
          <router-link to="/filter" class="search__reco_item">Solo Leveling</router-link>
          <router-link to="/filter" class="search__reco_item">One-Punch Man</router-link>
          <router-link to="/filter" class="search__reco_item">One Piece</router-link>
          <router-link to="/filter" class="search__reco_item">Spy x Family</router-link>
        </div>
        <div class="search__reco_wrap">
          <router-link to="/filter" class="search__reco_item">Solo Leveling</router-link>
          <router-link to="/filter" class="search__reco_item">Solo Leveling</router-link>
          <router-link to="/filter" class="search__reco_item">One-Punch Man</router-link>
          <router-link to="/filter" class="search__reco_item">One Piece</router-link>
          <router-link to="/filter" class="search__reco_item">Spy x Family</router-link>
        </div>
        <div class="search__reco_wrap">
          <router-link to="/filter" class="search__reco_item">Jujutsu Kaisen</router-link>
          <router-link to="/filter" class="search__reco_item">Chainsaw Man (Colored Edition)</router-link>
        </div>
      </div>
      <div class="search__home">
        <router-link to="/">
          Go to homepage
          <div></div>
        </router-link>
      </div>

    </div>
    <div class="container">
      <div class="about">
        <div class="about__heading">
          <div class="about__heading_person">
            <img src="../assets/img/woman.png" alt="">
            <div class="about__heading_person_info">
              <span class="about__heading_person_info_v1">Share Mangareader</span> <br>
              <span class="about__heading_person_info_v2  ">to your friends</span>
            </div>
          </div>
          <div class="about__heading_social">
            <div class="about__heading_social_item facebook">
              <img src="../assets/img/icons/facebook.svg" alt="">
              <span>Facebook</span>
            </div>
            <div class="about__heading_social_item twitter">
              <img src="../assets/img/icons/twitter.svg" alt="">
              <span>Twitter</span>
            </div>
            <div class="about__heading_social_item reddit">
              <img src="../assets/img/icons/reddit.svg" alt="">
              <span>Reddit</span>
            </div>
            <div class="about__heading_social_item telegram">
              <img src="../assets/img/icons/telegram.svg" alt="">
              <span>Telegram</span>
            </div>
          </div>
        </div>
        <div class="about__texts">
          <div class="about__texts_v1">Mangareader.to - Read Manga Online Free</div>
          <div class="about__texts_v2">
            <p>Are you looking to read manga online at no cost? Or are you subscribing to a paid reading service already
              but
              in hopes of saving up? Or are you feeling unsafe on the current free manga site? If you can relate to any
              of
              these questions, you will find the solution here, on MangaReader.</p> <br>
            <p>If you search about Reading manga on Google, one of the first autocomplete predictions is “Why manga is
              so
              expensive?”. Yes, not everyone can afford to read their favorite manga online and MangaReader is created
              to
              change it. We are here to make sure all manga lovers can have access to their manga of interest. And that
              is
              why MangaReader is free and safe.</p>
          </div>

          <div class="about__texts_v1">How To Read Manga online?</div>
          <div class="about__texts_v2">
            <p>As manga originates from Japan, the easiest way to read it is to know the language. However, as you are
              here, we assume that Japanese might not be one of the languages you can read proficiently. But don't sweat
              it, all mangas on MangaReader are in English for your convenience.</p> <br>
            <p>Reading manga can be different from reading a comic, book, or magazine, especially when it is traditional
              Japanese manga. The main reason for this is that kanji, the Japanese writing, is read right to left. So
              when
              you pick up a manga volume to read, you need to start with the frame (a.k.a koma) in the upper right-hand
              corner and end a page with the koma in the bottom left-hand corner. Most publishers retain the original
              format of the manga; therefore, it is important to know this first rule.</p>
          </div>
          <div class="about__texts_v1">Where To Read Manga For Free?</div>
          <div class="about__texts_v2">
            <p>Despite growing demand, manga is not easily available outside of Japan and once they are, they are
              expensive. It makes total sense as they are copyrighted audiovisual products/translated works. In the US,
              mangas cost you from 8 to 20 USD, sometimes more. Not everyone can afford to pay such a large amount of
              money for a volume unless their hobby is to collect manga. But as we stated above, MangaReader is created
              in
              hopes that every manga fan can get to read manga without paying a dime, this site is completely free of
              charge. To read manga online for free, all you need to do is to visit MangaReader, search for the manga
              you
              want to watch, and enjoy reading it at no cost and with no risk.</p>
          </div>
          <div class="about__texts_v1">What Is MangaReader?</div>
          <div class="about__texts_v2">
            <p>MangaReader is an ad-free manga site that allows users to read and download thousands of manga for free.
              MangaReader has one of the largest databases of manga covering all genres and subgenres with numerous
              topics
              and themes. Apart from an extensive content library, MangaReader also provides free users with premium
              quality features that might be costly elsewhere.</p> <br>
            <p>Reading manga online for free on MangaReader is as easy as searching on Google. All you need to do is to
              visit the site link https://mangareader.to/, use the search bar to look for the manga of interest, click
              the
              Start Reading button and you are all set. There is no limit applied; therefore, you can enjoy as much
              manga
              as you wish without any worries. Here is a detailed list of the features provided for free on the
              site:</p>
          </div>

          <div class="about__texts_info">
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Free of charge.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Safe to use.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Various genres and subgenres.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>High-quality scans.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Anti-overload with back-up server.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Fast content updates.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Zero ads and pop-ups.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Surpass Geo-restrictions.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Easy and simple UI & UX.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>ESharable content on all your socials.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Syncs content across PCs and mobile devices.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Unlimited reading service available.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Themes changing as you wish between dark and light.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>No registration or account needed.</span>
            </div>
            <div class="about__texts_info_item">
              <img src="../assets/img/icons/check.svg" alt="">
              <span>Best customer service.</span>
            </div>
          </div>

          <div class="about__texts_v1">Is MangaReader Safe To Read Manga Online?</div>
          <div class="about__texts_v2">
            <p>Reading manga is a time-consuming hobby and it should only be done on a safe and secure site. While most
              free manga sites are filled with ads and pop-ups, MangaReader is completely ad-free. We are dedicated to
              bringing you a risk-free reading experience, therefore, no ads, pop-ups, or commercials are existent on
              the
              site. With no ad links, hackers have no way to pose a risk to your device and identity. By reading manga
              on
              MangaReader, you can avoid the risk of serious headaches such as data loss, identity theft, corrupted
              networks, etc.</p> <br>
            <p>MangaReader does not require any registration or signup, meaning that users are not obliged to provide
              their information such as full name, email address, credit card details, etc to have full access to the
              site’s content library and features. With no information shared, there will be no information leaked, and
              your identity will also be kept safe. To sum it up, MangaReader is the best and safest manga site that
              every
              manga lover should check out.</p>
          </div>

          <div class="about__texts_v1">Is MangaReader Has Manga App Version?</div>
          <div class="about__texts_v2">
            <p>A manga reader app for your convenience will be completed soon. Please follow us on Social Network
              accounts
              to be most updated about the app.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "SearchView",
  components: {
    Footer
  }
}
</script>

<style scoped lang="scss">
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
        background: #7B36CE;
        border: 1px solid #FFFFFF;
        border-radius: 4px;

        a {
          font-weight: 700;
          font-size: 38px;
          color: #fff;
        }
      }

      &_search {
        display: none;
        width: 322px;
        height: 53px;
        background: #fff;
        border-radius: 9px;
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

.search {
  background-image: url("../assets/img/bg/search_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding-top: 23px;
  padding-left: 46px;

  &__inp {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 128px;

    input {
      width: 620px;
      height: 69px;
      background: #F7F7F7;
      border-radius: 76px;
      font-weight: 600;
      font-size: 24px;
      color: #ADADAD;
      padding-left: 45px;
      border: none;
      outline: none;
    }

    &__icon {
      width: 69px;
      height: 69px;
      background: #DC4C4C;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
    }
  }

  &__reco {
    margin-top: 58px;
    margin-bottom: 46px;

    &_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }

    &_title {
      font-weight: 600;
      font-size: 24px;
      color: #FFFFFF;
    }

    &_item {
      padding: 10px 15px;
      border: 1px solid #E0C6FF;
      border-radius: 20px;
      font-weight: 500;
      font-size: 14px;
      color: #E0C6FF;
    }
  }

  &__home {
    width: 266px;
    height: 79px;
    background: #DC4B4B;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    a {
      font-weight: 500;
      font-size: 24px;
      color: #FFFFFF;
    }
  }
}

.about {

  &__heading {
    margin-top: 50px;
    display: flex;

    &_person {
      display: flex;
      align-items: center;
      gap: 7px;

      &_info {
        &_v1 {
          font-weight: 600;
          font-size: 18px;
          color: #000000;
        }

        &_v2 {
          font-weight: 400;
          font-size: 18px;
          color: #000000;
        }
      }
    }

    &_social {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 20px;

      &_item {
        width: 114px;
        height: 42px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
      }

      .facebook {
        background: #3B5998;
      }

      .twitter {
        background: #1DA1F2;
      }

      .reddit {
        background: #FF5700;
      }

      .telegram {
        background: #0088CC;
      }
    }
  }

  &__texts {
    margin-top: 35px;

    &_v1 {
      font-weight: 700;
      font-size: 34px;
      color: #000000;
      margin-top: 40px;
    }

    &_v2 {
      margin-top: 15px;
      font-weight: 400;
      font-size: 18px;
      color: #000000;
    }

    &_info {
      margin-top: 40px;

      &_item {
        display: flex;
        align-items: center;
        gap: 9px;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
