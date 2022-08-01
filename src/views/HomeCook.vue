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
      <section class="banner container-fluid">
        <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">
          <div class="carousel-inner custom-carousel">
            <div class="carousel-item active w-100">
              <img alt="..." class="img-banner d-block img-fluid" src="@/assets/img/featured/Featured Recipe.png">
              <button class="bt-recipe">
                <img src="@/assets/img/featured/image 14.png">
                Hot Recipes
              </button>
              <h1 class="hd-recipe">Spicy delicious <br>chicken wings</h1>
              <div class="pr-recipe">
            <span class="pr-recipe">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
              <br>
              tempor incididunt ut labore et dolore magna aliqut enim ad minim
            </span>
              </div>
              <button class="time-recipe"><i class="fa-solid fa-stopwatch px-md-2"></i>30 Minutes</button>
              <button class="indi-recipe"><i class="fa-solid fa-utensils px-md-2"></i>Chicken</button>
              <button class="user-recipe">
                <img alt="" class="img-user img-fluid" src="@/assets/img/featured/Ellipse 2.png">
              </button>
              <div class="info-recipe">
                <span class="info-name-recipe">John Smith</span>
                <span class="info-time-recipe">15 March 2022</span>
              </div>
              <button class="view-recipe">View Recipes <i class="fa-solid fa-circle-play px-md-2"></i></button>
            </div>
          </div>
        </div>
      </section>

      <section class="categories container-fluid">
        <div class="categories-head row">
      <span class=" head-name">
        Categories
      </span>
          <button class="head-view">View All Categorries</button>
        </div>

        <div class="categories-item row">
          <div class="categories-item__container container-fluid">
            <div class="categories-item__container--list row text-center">
              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block text-center" id="itemBlockBreakfast">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class=" py-3" src="@/assets/img/featured/breakfast1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name">
                      <span>Breakfast</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block" id="itemBlockVegan">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class=" py-3" src="@/assets/img/featured/vegan1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name text-center">
                      <span>Vegan</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block" id="itemBlockMeat">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class=" py-3" src="@/assets/img/featured/meat1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name">
                      <span>Meat</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block" id="itemBlockDessert">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="py-3" src="@/assets/img/featured/dessert1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name">
                      <span>Dessert</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block" id="itemBlockLunch">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class=" py-3" src="@/assets/img/featured/lunch1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name">
                      <span>Lunch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories-item__container--list-block col-2 text-center p-0">
                <div class="item-block text-center" id="itemBlockChocolate">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="py-3" src="@/assets/img/featured/chocolate1.png">
                      </div>
                    </div>
                    <div class="item-block__container-name">
                      <span>Chocolate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section class="recipes container-fluid p-md-4">
        <div class="recipes-head text-center">
      <span class=" head-name">
        Simple and tasty recipes
      </span>
          <p class="head-paragraph m-0">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div class="recipes-item row">
          <div class="recipes-item__container container-fluid">
            <div class="recipes-item__container--list row">

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/chiken.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Big and Juicy Wagyu Beef Cheeseburger</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Snack</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/salmon.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Fresh Lime Roasted Salmon with Ginger Sauce</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Fish</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/pancake.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Strawberry Oatmeal Pancake with Honey Syrup</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Breakfast</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/mix.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Fresh and Healthy Mixed Mayonnaise Salad</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Healthy</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/meatball.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Chicken Meatballs with Cream Cheese</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Meat</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="img-fluid" src="@/assets/img/recipes/Ads.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/pancake1.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>Fruity Pancake with Orange & Blueberry</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Sweet</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/pot.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>The Best Easy One Pot Chicken and Rice</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Snack</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="recipes-item__container--list-block p-0 col-xs-12 col-md-4">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/recipes/pasta.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                        <span>The Creamiest Creamy Chicken and Bacon Pasta</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Noodles</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="learn-more container-fluid p-0">
        <div class="learn-more__block">
          <div class="learn-more__block-content">
            <div class="item-head">
            <span>Everyone can be a
              chef in their own kitchen</span>
            </div>
            <p class="item-content p-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              ad minim
            </p>
            <button class="item-button">Learn More</button>
          </div>
          <div class="learn-more__block-img">
            <img alt="" src="@/assets/img/learn more/chief.png">
          </div>
        </div>
      </section>

      <section class="insta container-fluid p-0">
        <div class="insta-head text-center">
      <span class=" head-name">
        Check out @foodieland on Instagram
      </span>
          <p class="head-paragraph m-0">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqut enim ad minim </p>
        </div>

        <div class="insta-item row text-center">
          <div class="insta-item__container container-fluid">
            <div class="insta-item__container--list row">

              <div class="insta-item__container--list-block p-0 col-3 ">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/insta/Post1.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="insta-item__container--list-block p-0 col-3 ">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/insta/Post2.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recipes-item__container--list-block p-0 col-3 ">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/insta/Post3.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="insta-item__container--list-block p-0 col-3 ">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/insta/Post4.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="insta-button text-center">
          <button>
            Visit Our Instagram
            <i class="fa-brands fa-instagram"></i>
          </button>
        </div>
      </section>

      <section class="more-recipes container-fluid">
        <div class="more-recipes-head row">
          <div class="head-name">
        <span>
        Try this delicious recipe
        to make your day
      </span>
          </div>
          <div class="head-content">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
          </div>
        </div>

        <div class="more-recipes-item row">
          <div class="more-recipes-item__container container-fluid">
            <div class="more-recipes-item__container--list row">

              <div class="more-recipes-item__container--list-block p-0 col-3">
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

              <div class="more-recipes-item__container--list-block p-0 col-3">
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

              <div class="more-recipes-item__container--list-block p-0 col-3">
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

              <div class="more-recipes-item__container--list-block p-0 col-3">
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

              <div class="more-recipes-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group5.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Rainbow Chicken Salad with
                      Honey</span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Healthy</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="more-recipes-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group6.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Barbeque Spicy Sandwiches with
                      Chips
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Snack</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="more-recipes-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group7.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Firecracker Vegan Lettuce Wraps -
                      Spicy!
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Seafood</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="more-recipes-item__container--list-block p-0 col-3">
                <div class="item-block">
                  <div class="item-block__container">
                    <div class="item-block__container-image">
                      <div class="item-block__container-image--link">
                        <img alt="" class="item-img img-fluid" src="@/assets/img/more recipes/Mask Group8.png">
                        <img alt="" class="item-icon img-fluid" src="@/assets/img/recipes/Group 852.png">
                        <img alt="" class="item-icon-hover img-fluid" src="@/assets/img/recipes/Group 851.png">
                      </div>
                      <div class="item-block__container-name">
                    <span>
                      Chicken Ramen Soup with
                      Mushroom
                    </span>
                      </div>
                      <div class="item-block__container-button">
                        <button><i class="fa-solid fa-stopwatch"></i><span class="mx-1">30 Minutes</span></button>
                        <button><i class="fa-solid fa-utensils"></i><span class="mx-1">Japanese</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section class="subcribe container-fluid ">
        <div class="subcribe-block container ">
          <img alt="" class="subcribe-block-img" src="@/assets/img/subcribe/MaskGroup.png">
          <div class="subcribe-block-head text-center">
      <span class=" head-name">
        Deliciousness to your inbox
      </span>
            <p class="head-paragraph m-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqut enim ad minim </p>
          </div>

          <div class="subcribe-block-input text-center">
            <input placeholder="Your email address..." type="text">
            <button>Subscribe</button>
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
  name: 'HomeCook',

}
</script>

<!--<style lang="scss" scoped>-->
<!--header {-->
<!--  width: 100%;-->
<!--  nav {-->
<!--    &.navbar {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      align-items: center;-->
<!--      background-color: whitesmoke;-->

<!--      a {-->
<!--        img {-->
<!--          width: 9.375rem;-->
<!--        }-->
<!--      }-->

<!--      ul {-->
<!--        color: black!important;-->

<!--        li.nav-item {-->
<!--          a.nav-link {-->
<!--            font-style: normal;-->
<!--            font-weight: 600;-->
<!--            font-size: 17px;-->
<!--            line-height: 19px;-->
<!--            letter-spacing: -0.02em;-->
<!--            cursor: pointer;-->
<!--          }-->
<!--        }-->

<!--        li.icon {-->
<!--          a {-->
<!--            cursor: pointer;-->
<!--            height: 1.5rem;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--hr {-->
<!--  border: 1px solid rgba(0, 0, 0, 0.1);-->
<!--  margin: 0 0;-->
<!--}-->

<!--.content {-->
<!--  padding: 10rem 4.5rem 3.5rem 4.5rem;-->

<!--  section {-->
<!--    &.banner {-->
<!--      width: 100%;-->

<!--      .img-banner {-->
<!--        height: 41rem;-->
<!--        width: 110rem;-->
<!--        position: relative;-->
<!--      }-->

<!--      button, h1, p, span {-->
<!--        position: absolute;-->
<!--        border: none;-->
<!--      }-->

<!--      .bt-recipe {-->
<!--        top: 2.5rem;-->
<!--        border-radius: 0.938rem;-->
<!--        left: 2.5rem;-->
<!--        height: 2.813rem;-->
<!--        width: 9.75rem;-->
<!--        color: #000000;-->
<!--        background-color: white;-->
<!--        font-weight: 600;-->
<!--        font-size: 1rem;-->
<!--        border: none;-->

<!--        img {-->
<!--          height: 1.5rem;-->
<!--          width: 1.5rem-->
<!--        }-->
<!--      }-->

<!--      .hd-recipe {-->
<!--        top: 7.938rem;-->
<!--        left: 3.125rem;-->
<!--        color: #000000;-->
<!--        font-weight: 600;-->
<!--        font-size: 4rem;-->
<!--        border: none;-->
<!--      }-->

<!--      .pr-recipe {-->
<!--        top: 19.063rem;-->
<!--        left: 3.125rem;-->
<!--        color: #000000;-->
<!--        font-weight: 600;-->
<!--        font-size: 1rem;-->
<!--        opacity: 60%;-->
<!--        border: none;-->
<!--      }-->

<!--      .time-recipe {-->
<!--        top: 24.438rem;-->
<!--        border-radius: 0.938rem;-->
<!--        left: 3.125rem;-->
<!--        height: 2.5rem;-->
<!--        width: 8.688rem;-->
<!--        color: #000000;-->
<!--        font-weight: 600;-->
<!--        font-size: 0.875rem;-->
<!--        border: none;-->
<!--      }-->

<!--      .indi-recipe {-->
<!--        top: 24.438rem;-->
<!--        border-radius: 0.938rem;-->
<!--        left: 12.813rem;-->
<!--        height: 2.5rem;-->
<!--        width: 8.688rem;-->
<!--        color: #000000;-->
<!--        font-weight: 600;-->
<!--        font-size: 0.875rem;-->
<!--        border: none;-->
<!--      }-->

<!--      .user-recipe {-->
<!--        width: 3.125rem;-->
<!--        height: 3.125rem;-->
<!--        left: 3.125rem;-->
<!--        top: 33.438rem;-->
<!--        border-radius: 0.938rem;-->
<!--        background-color: #E7FAFE;-->
<!--        border: none;-->

<!--      }-->

<!--      .view-recipe {-->
<!--        width: 12.5rem;-->
<!--        height: 3.75rem;-->
<!--        left: 32.125rem;-->
<!--        top: 33.125rem;-->
<!--        background: #000000;-->
<!--        border-radius: 1rem;-->
<!--        color: #ffffff;-->
<!--        font-weight: 600;-->
<!--        font-size: 1rem;-->
<!--        border: none;-->
<!--      }-->

<!--      .info {-->
<!--        &-name-recipe {-->
<!--          left: 7.25rem;-->
<!--          top: 33.625rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 1rem;-->
<!--          color: black;-->
<!--        }-->

<!--        &-time-recipe {-->
<!--          line-height: 1.063rem;-->
<!--          color: black;-->
<!--          left: 7.25rem;-->
<!--          top: 35.313rem;-->
<!--          letter-spacing: -0.02em;-->
<!--          background: whitesmoke;-->
<!--          border-radius: 1rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 0.875rem;-->
<!--          border: none;-->
<!--        }-->


<!--      }-->
<!--    }-->

<!--    .recipes {-->
<!--      position: relative;-->
<!--      margin: 11.25rem 0 11.25rem 0;-->

<!--      &-head {-->
<!--        text-align: center;-->
<!--        justify-content: center;-->
<!--        justify-items: center;-->
<!--        padding: 24px 0;-->

<!--        .head-name {-->
<!--          width: 32.875rem;-->
<!--          height: 3.625rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 3rem;-->
<!--          line-height: 3.625rem;-->
<!--          letter-spacing: -0.04em;-->
<!--          color: #000000;-->
<!--        }-->

<!--        .head-paragraph {-->
<!--          padding-top: 1.5rem;-->
<!--          font-weight: 400;-->
<!--          font-size: 1rem;-->
<!--          line-height: 1.75rem;-->
<!--          color: rgba(0, 0, 0, 0.6);-->
<!--          white-space: break-spaces;-->
<!--        }-->
<!--      }-->

<!--      &-item {-->
<!--        &__container {-->
<!--          padding: 5rem 0 5rem 0;-->

<!--          .item-block {-->
<!--            margin: 1.5rem 5.947rem 1.5rem 5.947rem;-->
<!--            color: black;-->
<!--            width: 25rem;-->
<!--            height: 27.125rem;-->
<!--            background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);-->
<!--            border-radius: 1.875rem;-->
<!--            letter-spacing: -0.04em;-->

<!--            &__container-name {-->
<!--              font-weight: 600;-->
<!--              font-size: 1.5rem;-->
<!--              line-height: 2rem;-->
<!--            }-->

<!--            .item-img {-->
<!--              border-radius: 1.875rem;-->
<!--              display: block;-->
<!--              margin-left: auto;-->
<!--              margin-right: auto;-->
<!--            }-->

<!--            .item-icon, .item-icon-hover {-->
<!--              position: absolute;-->
<!--              top: 3.125rem;-->
<!--              right: 8.125rem;-->
<!--              width: 3rem;-->
<!--              height: 3rem;-->
<!--              cursor: pointer;-->
<!--            }-->

<!--            .item-icon-hover:hover {-->
<!--              opacity: 20%;-->
<!--            }-->

<!--            &__container-name {-->
<!--              padding: 0.938rem;-->
<!--            }-->

<!--            &__container-button {-->
<!--              padding: 0.938rem 0.938rem 0 0.938rem;-->
<!--              margin: 0 0.938rem 0 0;-->

<!--              button {-->
<!--                border-radius: 1.875rem;-->
<!--                width: 7.1rem;-->
<!--                height: 1.5rem;-->
<!--                background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);-->
<!--                border: none;-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .learn-more {-->
<!--      &__block {-->
<!--        display: flex;-->
<!--        position: relative;-->

<!--        &-content {;-->
<!--          width: 1000px;-->

<!--          .item-head {-->
<!--            position: absolute;-->
<!--            width: 32.875rem;-->
<!--            height: 7.25rem;-->
<!--            font-weight: 600;-->
<!--            font-size: 3rem;-->
<!--            line-height: 3.625rem;-->
<!--            letter-spacing: -0.04em;-->
<!--            color: #000000;-->
<!--            left: 1.563rem;-->
<!--            white-space: pre-line;-->
<!--          }-->

<!--          .item-content {-->
<!--            position: absolute;-->
<!--            top: 10rem;-->
<!--            margin: 1.5rem 0 1.5rem 0;-->
<!--            width: 31.75rem;-->
<!--            height: 5.25rem;-->
<!--            left: 1.563rem;-->
<!--            font-weight: 400;-->
<!--            font-size: 1rem;-->
<!--            line-height: 1.75rem;-->
<!--            color: rgba(0, 0, 0, 0.6);-->
<!--            white-space: pre-line;-->
<!--          }-->

<!--          .item-button {-->
<!--            position: absolute;-->
<!--            display: block;-->
<!--            border-radius: 0.938rem;-->
<!--            width: 11.25rem;-->
<!--            height: 3.75rem;-->
<!--            color: white;-->
<!--            background-color: black;-->
<!--            font-weight: 600;-->
<!--            font-size: 0.875rem;-->
<!--            line-height: 1.063rem;-->
<!--            letter-spacing: -0.02em;-->
<!--            left: 1.563rem;-->
<!--            top: 22.5rem;-->
<!--          }-->
<!--        }-->

<!--        &-img {-->
<!--          img {-->
<!--            width: 46.875rem;-->
<!--          }-->

<!--        }-->
<!--      }-->
<!--    }-->

<!--    .insta {-->
<!--      position: relative;-->

<!--      &-head {-->
<!--        margin: 15rem 0 0 0;-->
<!--        text-align: center;-->
<!--        justify-content: center;-->
<!--        justify-items: center;-->
<!--        padding: 24px 0;-->

<!--        .head-name {-->
<!--          width: 32.875rem;-->
<!--          height: 3.625rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 3rem;-->
<!--          line-height: 3.625rem;-->
<!--          letter-spacing: -0.04em;-->
<!--          color: #000000;-->
<!--        }-->

<!--        .head-paragraph {-->
<!--          font-weight: 400;-->
<!--          font-size: 1rem;-->
<!--          line-height: 1.75rem;-->
<!--          text-align: center;-->
<!--          color: rgba(0, 0, 0, 0.6);-->
<!--          white-space: pre-line;-->
<!--        }-->
<!--      }-->

<!--      &-item {-->
<!--        &__container {-->
<!--          padding: 5rem 0 5rem 0;-->

<!--          .item-block {-->
<!--            margin: auto;-->
<!--            width: 25rem;-->
<!--            height: 27.125rem;-->
<!--            letter-spacing: -0.04em;-->
<!--          }-->
<!--        }-->
<!--      }-->

<!--      &-button {-->
<!--        padding-bottom: 5rem;-->

<!--        button {-->
<!--          border-radius: 0.938rem;-->
<!--          width: 11.25rem;-->
<!--          height: 3.75rem;-->
<!--          color: white;-->
<!--          background-color: black;-->
<!--          font-weight: 600;-->
<!--          font-size: 0.875rem;-->
<!--          line-height: 1.063rem;-->
<!--          letter-spacing: -0.02em;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .more-recipes {-->
<!--      position: relative;-->

<!--      &-head {-->
<!--        .head-name {-->
<!--          span {-->
<!--            position: absolute;-->
<!--            width: 507px;-->
<!--            height: 116px;-->
<!--            left: 45rem;-->
<!--            font-weight: 600;-->
<!--            font-size: 48px;-->
<!--            line-height: 58px;-->
<!--            letter-spacing: -0.04em;-->
<!--            color: #000000;-->
<!--          }-->
<!--        }-->

<!--        .head-content {-->
<!--          position: absolute;-->
<!--          width: 620px;-->
<!--          right: 38rem;-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          line-height: 28px;-->
<!--          color: rgba(0, 0, 0, 0.6);-->
<!--          margin-top: 8rem;-->
<!--        }-->
<!--      }-->

<!--      &-item {-->
<!--        margin-top: 250px;-->

<!--        &__container {-->
<!--          .item-block {-->
<!--            margin: auto;-->
<!--            width: 290px;-->
<!--            height: 420px;-->
<!--            background: white;-->
<!--            letter-spacing: -0.04em;-->

<!--            &__container-name {-->
<!--              margin-top: 10px;-->
<!--              font-weight: 600;-->
<!--              font-size: 18px;-->
<!--              line-height: 26px;-->
<!--              letter-spacing: -0.04em;-->
<!--              color: #000000;-->
<!--              width: 250px;-->
<!--              display: -webkit-box;-->
<!--              -webkit-line-clamp: 2;-->
<!--              -webkit-box-orient: vertical;-->
<!--              overflow: hidden;-->
<!--              margin-left: 1rem;-->
<!--            }-->

<!--            .item-icon, .item-icon-hover {-->
<!--              cursor: pointer;-->
<!--              position: absolute;-->
<!--              top: 1.125rem;-->
<!--              right: 5.125rem;-->
<!--              width: 3rem;-->
<!--              height: 3rem;-->
<!--            }-->

<!--            .item-icon-hover:hover {-->
<!--              opacity: 20%;-->
<!--            }-->

<!--            &__container-button {-->
<!--              position: absolute;-->
<!--              margin-left: 3rem;-->

<!--              button {-->
<!--                margin-top: 10px;-->
<!--                border-radius: 1.875rem;-->
<!--                height: 1.5rem;-->
<!--                background: white;-->
<!--                padding: 0 10px 0 0;-->
<!--                border: none;-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .subcribe {-->
<!--      margin-bottom: 200px;-->

<!--      &-block {-->
<!--        position: relative;-->

<!--        &-img {-->
<!--          position: absolute;-->
<!--          width: 100%;-->
<!--          left: 0;-->
<!--        }-->

<!--        &-head {-->
<!--          margin-top: 100px;-->
<!--          position: absolute;-->
<!--          left: 50%;-->
<!--          transform: translate(-50%, -50%);-->

<!--          .head-name {-->
<!--            font-weight: 600;-->
<!--            font-size: 3rem;-->
<!--            line-height: 3.625rem;-->
<!--            letter-spacing: -0.04em;-->
<!--            color: #000000;-->

<!--          }-->

<!--          .head-paragraph {-->
<!--            font-weight: 400;-->
<!--            font-size: 1rem;-->
<!--            line-height: 1.75rem;-->
<!--            text-align: center;-->
<!--            color: rgba(0, 0, 0, 0.6);-->
<!--            white-space: pre-line;-->
<!--          }-->
<!--        }-->

<!--        &-input {-->
<!--          position: absolute;-->
<!--          margin-top: 270px;-->
<!--          left: 50%;-->
<!--          transform: translate(-50%, -50%);-->
<!--          width: 380px;-->
<!--          height: 60px;-->
<!--          background: #FFFFFF;-->
<!--          border-radius: 24px;-->
<!--          font-weight: 500;-->
<!--          font-size: 1rem;-->
<!--          line-height: 1.75rem;-->
<!--          letter-spacing: -0.02em;-->
<!--          color: rgba(0, 0, 0, 0.4);-->
<!--          border: none;-->

<!--          button {-->
<!--            width: 160px;-->
<!--            height: 50px;-->
<!--            margin-top: 5px;-->
<!--            left: 1000px;-->
<!--            background: #000000;-->
<!--            border-radius: 16px;-->
<!--            font-weight: 400;-->
<!--            font-size: 1rem;-->
<!--            line-height: 1.75rem;-->
<!--            letter-spacing: -0.02em;-->
<!--            color: #FFFFFF;-->
<!--            margin-right: 0;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .categories {-->
<!--      margin: 8rem 0.5rem 0 0;-->
<!--      position: relative;-->

<!--      &-head {-->
<!--        margin: 8rem 0.5rem 0 0;-->
<!--        padding-bottom: 5rem;-->

<!--        .head-name {-->
<!--          display: block;-->
<!--          position: absolute;-->
<!--          color: black;-->
<!--          width: 14.875rem;-->
<!--          height: 3.625rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 3rem;-->
<!--          line-height: 3.625rem;-->

<!--          .head-paragraph {-->
<!--            white-space: initial;-->
<!--          }-->
<!--        }-->

<!--        .head-view {-->
<!--          display: block;-->
<!--          position: absolute;-->
<!--          color: black;-->
<!--          width: 12.5rem;-->
<!--          height: 3.75rem;-->
<!--          font-weight: 600;-->
<!--          font-size: 1rem;-->
<!--          line-height: 1.188rem;-->
<!--          border-radius: 0.938rem;-->
<!--          background-color: #E7FAFE;-->
<!--          right: 5.55rem;-->
<!--          border: none;-->
<!--        }-->
<!--      }-->

<!--      &-item {-->
<!--        &__container {-->
<!--          padding: 5rem 0 5rem 0;-->

<!--          .item-block {-->
<!--            margin: auto;-->
<!--            justify-content: center;-->
<!--            text-align: center;-->
<!--            width: 11.25rem;-->
<!--            height: 12.625rem;-->
<!--            border-radius: 1.875rem;-->
<!--            font-weight: 600;-->
<!--            font-size: 1.125rem;-->
<!--            line-height: 1.375rem;-->
<!--            color: black;-->
<!--            letter-spacing: -0.02em;-->
<!--          }-->

<!--          #itemBlockBreakfast {-->
<!--            background: linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);-->

<!--          }-->

<!--          #itemBlockVegan {-->
<!--            background: linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);-->

<!--          }-->

<!--          #itemBlockMeat {-->
<!--            background: linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);-->

<!--          }-->

<!--          #itemBlockDessert {-->
<!--            background: linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);-->

<!--          }-->

<!--          #itemBlockLunch {-->
<!--            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);-->

<!--          }-->

<!--          #itemBlockChocolate {-->
<!--            background: linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);-->

<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .footer {-->
<!--    position: relative;-->

<!--    &-navi {-->
<!--      justify-content: space-between;-->
<!--      display: flex;-->
<!--      margin: 500px 0 0 0;-->

<!--      .navi-content {-->
<!--        .content__logo {-->
<!--          position: absolute;-->
<!--          top: -2rem;-->
<!--          .head-logo {-->
<!--            margin-bottom: 15px;-->
<!--          }-->
<!--        }-->

<!--        .content__info {-->
<!--          position: absolute;-->
<!--          left: 1rem;-->
<!--          top: -0.5rem;-->
<!--          font-weight: 400;-->
<!--          font-size: 16px;-->
<!--          color: rgba(0, 0, 0, 0.6);-->
<!--        }-->
<!--      }-->

<!--      .navi-button {-->
<!--        right: 0;-->
<!--        font-weight: 500;-->
<!--        font-size: 16px;-->
<!--        letter-spacing: -0.02em;-->
<!--        top: -1.5rem;-->

<!--        a {-->
<!--          padding: 0 0 0 15px;-->
<!--          color: #000000;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    hr {-->
<!--      border: 1px solid rgba(0, 0, 0, 0.1);-->
<!--      margin: 0 0;-->
<!--    }-->

<!--    &-item {-->
<!--      .item-copyright {-->
<!--        margin-top: 2rem;-->
<!--        position: absolute;-->
<!--        left: 50%;-->
<!--        transform: translate(-50%, -50%);-->

<!--        .copyright-text {-->
<!--          font-weight: 500;-->
<!--          font-size: 18px;-->
<!--          line-height: 23px;-->
<!--          letter-spacing: -0.02em;-->
<!--          color: rgba(0, 0, 0, 0.6);-->
<!--        }-->

<!--        .copyright-textname {-->
<!--          font-weight: 500;-->
<!--          font-size: 18px;-->
<!--          line-height: 23px;-->
<!--          color: orange;-->
<!--        }-->
<!--      }-->

<!--      .item-icon {-->
<!--        margin-top: 15px;-->

<!--        a {-->
<!--          padding: 0 0 0 15px;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--  }-->
<!--}-->

<!--</style>-->
