<template>
  <div>
    <header class="container-fluid fixed-top p-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-lg-4">
        <a class="p-sm-3"><img class="img-fluid" src="@/assets/img/navi/Foodieland..png"></a>
        <ul class="nav button navbar-nav ">
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'home'}">Home</router-link>
            </a>
          </li>
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'about'}">About</router-link>
            </a>
          </li>
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'contact'}">Contact</router-link>
            </a>
          </li>
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'blog'}">Blog</router-link>
            </a>
          </li>
        </ul>
        <ul class="nav icon p-sm-3 navbar-nav">
          <li class="icon nav-item px-md-4">
            <a>
              <i class="fa-brands fa-facebook-f fa-lg"></i>
            </a>
          </li>
          <li class="icon nav-item px-md-4">
            <a>
              <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
          </li>
          <li class="icon nav-item px-md-4">
            <a>
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
        </ul>

      </nav>
      <hr style="width:100%; color: black"/>
    </header>

    <div class="content">
      <section class="share">
        <div class="share-container container-fluid p-0">
          <div class="share-container-content col-12 text-center">
            <div class="share-container-content__title row"><span>Blog & Article</span></div>
            <div class="share-container-content__paragraph row">
            <span class="col-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod temporincididunt ut labore et dolore
            </span>
            </div>
          </div>
          <div class="share-container-input col-12 text-center">
            <div class="share-container-input__content row">
              <input placeholder="Search article, news or recipe..." type="text" class="col-12 col-sm-6">
              <button class="col-4 col-sm-2">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section class="recommendation">
        <div class="recommendation-container container-fluid p-0 row">
          <div class="recommendation-container-content col-8">
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group1.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>Crochet Projects for Noodle Lovers</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 904.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group2.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>10 Vegetarian Recipes To Eat This Month</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 905.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group3.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>Full Guide to Becoming a Professional Chef</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 906.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group4.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>Simple & Delicious Vegetarian Lasagna</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 907.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group5.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>Plantain and Pinto Stew with Aji Verde</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 908.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-content__item row">
              <div class="recommendation-container-content__item__img col-4">
                <img src="@/assets/img/blog/Mask Group6.png">
              </div>
              <div class="recommendation-container-content__item__info col-8">
                <div class="recommendation-container-content__item__info__name row">
                  <span>We’re Hiring a Communications Assistant!</span>
                </div>
                <div class="recommendation-container-content__item__info__intro row">
                  <span>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </span>
                </div>
                <div class="recommendation-container-content__item__info_user row">
                  <img class="user-img" src="@/assets/img/blog/Group 909.png">
                  <span class="user-time">12 November 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div class="recommendation-container-ads col-4">
            <div class="recommendation-container-ads__title row">
              <span>Tasty Recipes</span>
            </div>
            <div class="recommendation-container-ads__item row">
              <div class="recommendation-container-ads__item__img col-4 col-sm-4">
                <img src="@/assets/img/blog/Mask Group7.png">
              </div>
              <div class="recommendation-container-ads__item__info col-8 col-sm-8">
                <div class="info-name row">
                  <span>Chicken Meatballs with Cream Cheese </span>
                </div>
                <div class="info-user row">
                  <span>By Andreas Paula</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-ads__item row">
              <div class="recommendation-container-ads__item__img col-4 col-sm-4">
                <img src="@/assets/img/blog/Mask Group8.png">
              </div>
              <div class="recommendation-container-ads__item__info col-8 col-sm-8">
                <div class="info-name row">
                  <span>Traditional Bolognaise Ragu</span>
                </div>
                <div class="info-user row">
                  <span>By Andreas Paula</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-ads__item row">
              <div class="recommendation-container-ads__item__img col-4 col-sm-4">
                <img src="@/assets/img/blog/Mask Group9.png">
              </div>
              <div class="recommendation-container-ads__item__info col-8 col-sm-8">
                <div class="info-name row">
                  <span>Pork and Chive Chinese Dumplings</span>
                </div>
                <div class="info-user row">
                  <span>By Andreas Paula</span>
                </div>
              </div>
            </div>
            <div class="recommendation-container-ads__img row">
              <img src="@/assets/img/blog/Ads.png">
            </div>
          </div>
        </div>
      </section>

      <section class="index">
        <div class="index-container container-fluid p-0">
          <div class="index-container-items row">
            <div class="index-container-items-item col-1 text-center">
              <div id="item-black" class="text-center">
                <a>1</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>2</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>3</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>4</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>5</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>...</a>
              </div>
            </div>
            <div class="index-container-items-item col-1 text-center">
              <div class="text-center">
                <a>></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="subscribe">
        <div class="subscribe-container container container-fluid p-0">
          <div class="subscribe-container-head text-center">
            <span class="subscribe-container-head-name">
              Deliciousness to your inbox
            </span>
            <p class="subscribe-container-head-paragraph m-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
          </div>
          <div class="subscribe-container-input text-center">
            <input placeholder="Your email address..." type="text" class="form-check">
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <div class="footer">
        <div class="footer-container container-fluid p-0">
          <div class="footer-container-navigation row">
            <div class="footer-container-navigation-content col-6 ">
              <div class="footer-container-navigation-content__logo">
                <img alt="" class="head-logo" src="@/assets/img/navi/Foodieland..png">
              </div>
              <div class="footer-container-navigation-content__info">
                <span>Lorem ipsum dolor sit amet, consectetuipisicing elit,</span>
              </div>
            </div>
            <div class="footer-container-navigation-button col-6 d-flex justify-content-end p-0">
              <div><a>Recipes</a></div>
              <div><a>Blog</a></div>
              <div><a>Contact</a></div>
              <div><a>About us</a></div>
            </div>
          </div>
          <hr>
          <div class="footer-container-item row">
            <div class="footer-container-item-copyright col-8">
              <span class="footer-container-item-copyright-text">© 2020 Flowbase. Powered by </span>
              <span class="footer-container-item-copyright-name">Webflow</span>
            </div>
            <div class="footer-container-item-icon col-12 d-flex justify-content-end">
              <a><i class="fa-brands fa-facebook-f fa-lg"></i></a>
              <a><i class="fa-brands fa-twitter fa-xl"></i></a>
              <a><i class="fa-brands fa-instagram fa-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: "BlogCook"
}
</script>

<style scoped>
</style>