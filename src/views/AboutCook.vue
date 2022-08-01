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
            <a class="nav-link" >
              <router-link :to="{name: 'about'}">About</router-link>
            </a>
          </li>
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'contact'}">Contact</router-link></a>
          </li>
          <li class="nav-item px-md-3">
            <a class="nav-link">
              <router-link :to="{name: 'blog'}">Blog</router-link></a>
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

    <div class="content container-fluid">
      <section class="info container-fluid p-0">
        <div class="info-user col 10">
          <div class="user-content row">
        <span>
          Health Japanese Fried Rice
        </span>
          </div>
          <div class="user-button row">
            <div class="user-img col-2">
              <img src="@/assets/img/featured/Ellipse 2.png">
              <span class="user-img-name">John Smith</span>
              <span class="user-img-date">15 March 2022</span>
            </div>
            <div class="user-prep col-2">
              <button class="prep"><i class="fa-solid fa-stopwatch px-md-2"></i></button>
              <span class="user-prep-name">PREP TIME</span>
              <span class="user-prep-time">15 Minutes</span>
            </div>
            <div class="user-cook col-2">
              <button class="cook"><i class="fa-solid fa-stopwatch px-md-2"></i></button>
              <span class="user-cook-name">COOK TIME</span>
              <span class="user-cook-time">15 Minutes</span>
            </div>
            <div class="user-use col-2">
              <button class="use"><i class="fa-solid fa-utensils px-md-2"></i></button>
              <span class="user-use-name">Chicken</span>
            </div>
          </div>
        </div>
        <div class="info-button col-2">
          <button class="button-print">
            <img src="@/assets/img/banner/Print.png">
          </button>
          <button class="button-share">
            <img src="@/assets/img/banner/Share.png">
          </button>
        </div>
      </section>

      <section class="banner container-fluid p-0">
        <div class="banner-head row">
          <div class="head-img-slide col-9">
            <img src="@/assets/img/banner/image 26.png">
          </div>
          <div class="head-img-info col-3">
            <img src="@/assets/img/banner/Nutrition Card.png">
          </div>
        </div>
        <div class="banner-content row">
          <p class="col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section class="ingredient container-fluid p-0">
        <div class="ingredient-title row">
          <div class="title-main col-8">
            <span>Ingredients</span>
          </div>
          <div class="title-other col-4">
            <span>Other Recipe</span>
          </div>
        </div>
        <div class="ingredient-content row">
          <div class="content-point col-8">
            <div class="point-main row">
              <span>For main dish</span>
              <div class="main">
                <label>
                  <input type="radio" class="option-input radio" name="example" checked />
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example" />
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example" />
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example" />
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example" />
                  Lorem ipsum dolor sit amet
                </label>
              </div>
            </div>
            <div class="point-sauce row">
              <span>For the sauce</span>
              <div class="sauce">
                <label>
                  <input type="radio" class="" checked />
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class=""/>
                  Lorem ipsum dolor sit amet
                </label>
                <label>
                  <input type="radio" class=""/>
                  Lorem ipsum dolor sit amet
                </label>
              </div>
            </div>
          </div>
          <div class="content-ads col-4">
            <div class="ads-chicken row">
              <img src="@/assets/img/recipes/meatball.png">
              <span class="name-dish">Chicken Meatball with Creamy Cheese...</span>
              <span class="name-cooker">By Andreas Paula</span>
            </div>
            <div class="ads-cream row">
              <img src="@/assets/img/recipes/pasta.png">
              <span class="name-dish">The Creamiest Creamy Chicken an...</span>
              <span class="name-cooker">By Andreas Paula</span>
            </div>
            <div class="ads-pasta row">
              <img src="@/assets/img/recipes/pot.png">
              <span class="name-dish">The Best Easy One Pot Chicken and Rice</span>
              <span class="name-cooker">By Andreas Paula</span>
            </div>
            <div class="ads-img row">
              <img src="@/assets/img/recipes/Ads.png">
            </div>
          </div>
        </div>
      </section>

      <section class="direction container-fluid p-0">
        <div class="direction-title row">
          <div class="col-12">
        <span>
          Directions
        </span>
          </div>
        </div>
        <div class="direction-content row">
          <div class="col-8">
            <label>
              <input type="radio" class=""/>
              1. Lorem ipsum dolor sit amet
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <img src="@/assets/img/z/Rectangle 23.png">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </label>
            <label>
              <input type="radio" class=""/>
              2. Lorem ipsum dolor sit amet
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </label>
            <label>
              <input type="radio" class=""/>
              3. Lorem ipsum dolor sit amet
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </label>
          </div>
        </div>
      </section>

      <section class="subscribe">

        <div class="subscribe-block container container-fluid p-0">

          <div class="subscribe-block-head text-center">

      <span class="subscribe-block-head-name">
        Deliciousness to your inbox
      </span>

            <p class="subscribe-block-head-paragraph m-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>

          </div>

          <div class="subscribe-block-input text-center">

            <input placeholder="Your email address..." type="text" class="form-check">

            <button>Subscribe</button>

          </div>

        </div>

      </section>

      <section class="recommend container-fluid p-0">
        <div class="recommend-head row">
          <div class="head-name">
        <span>
        You may like these recipe too
      </span>
          </div>
        </div>

        <div class="recommend-item row">
          <div class="recommend-item__container container-fluid">
            <div class="recommend-item__container--list row">

              <div class="recommend-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group1.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Mixed Tropical Fruit Salad with
                      Superfood Boosts </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Healthy</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommend-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group2.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Big and Juicy Wagyu Beef
                      Cheeseburger
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Western</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommend-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group3.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Healthy Japanese Fried Rice with
                      Asparagus
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Healthy</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommend-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group4.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Cauliflower Walnut Vegetarian Taco
                      Meat
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Eastern</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <div class="footer container-fluid p-0">

        <div class="footer-navi row">

          <div class="navi-content col-6 ">

            <div class="content__logo">
              <img alt="" class="head-logo" src="@/assets/img/navi/Foodieland..png">
            </div>

            <div class="content__info">
              <span>Lorem ipsum dolor sit amet, consectetuipisicing elit,</span>
            </div>

          </div>

          <div class="navi-button col-6 d-flex justify-content-end p-0">

            <div class="button__item">
              <a href="">Recipes</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <a href="">About us</a>
            </div>

          </div>
        </div>

        <hr style="width:100%; color: black"/>

        <div class="footer-item row">

          <div class="item-copyright col-8">
        <span class="copyright-text">
          © 2020 Flowbase. Powered by
        </span>
            <span class="copyright-textname">
          Webflow
        </span>
          </div>

          <div class="item-icon col-12 d-flex justify-content-end">
            <a><i class="fa-brands fa-facebook-f fa-lg"></i></a>
            <a><i class="fa-brands fa-twitter fa-xl"></i></a>
            <a><i class="fa-brands fa-instagram fa-xl"></i></a>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "AboutCook"
}
</script>

<style lang="scss" scoped>
.content .footer-navi {
  justify-content: space-between;
  display: flex;
  margin: 1rem 1rem 0 0!important;
}
</style>