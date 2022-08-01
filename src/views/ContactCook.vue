<template>
  <div>
    <div class="header">
      <header class="container-fluid fixed-top p-0">

        <nav class="navbar navbar-expand-lg navbar-light bg-light py-lg-4">

          <a class="p-sm-3" href="#"><img alt="" class="img-fluid" src="@/assets/img/navi/Foodieland..png"></a>

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

        <hr>

      </header>
    </div>

    <div class="content">

      <section class="contact ">

        <div class="contact-block container-fluid p-0 form">

          <div class="contact-block-title row">

            <div class="col-12">

              <span>Contact us</span>

            </div>

          </div>

          <div class="contact-block-content row">

            <div class="contact-block-content-img col-md-4 col-sm-12">

              <img src="@/assets/img/z/Group 13936.png">

            </div>

            <div class="contact-block-content-input col-8">

              <div class="input-name row">

                <div class="block-name col-md-6 col-sm-12 ">
                  <label>NAME</label>
                  <input type="string" class="form-control" placeholder="Enter your name..." v-model="name">
                </div>

                <div class="block-mail col-md-6 col-sm-12">
                  <label>EMAIL ADDRESS</label>
                  <input type="string" class="form-control" placeholder="Your email address..." v-model="mail">
                </div>

              </div>

              <div class="input-subject row">

                <div class="block-sub col-md-6 col-sm-12">
                  <label>SUBJECT</label>
                  <input type="string" class="form-control" placeholder="Enter subject..." v-model="subject">
                </div>

                <div class="block-type col-md-6 col-sm-12">
                  <label>ENQUIRY TYPE</label>
                  <select class="form-select" placeholder="Your state here" required v-model="state">
                    <option selected disabled value="">Advertising</option>
                    <option>Fresh</option>
                    <option>Cook</option>
                  </select>
                </div>

              </div>

              <div class="input-mess row">

                <div class="col-12">
                  <label>MESSAGES</label>
                  <input type="string" class="input-mess-block form-control" placeholder="Enter your messages..." v-model="message">
                </div>

              </div>

            </div>

          </div>

          <div class="contact-block-button row">
            <div class="col-12">
              <button @click="send()" type="button">Submit</button>
            </div>
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
            <el-popconfirm title="Are you sure to subscribe now?">
            <button slot="reference">Subscribe</button>
            </el-popconfirm>
          </div>

        </div>

      </section>

      <section class="recommend">

        <div class="recommend-block container-fluid p-0">

          <div class="recommend-block-head row">

            <div class="head-name">

              <span @click="show = !show">You may like these recipes too</span>

            </div>

          </div>

          <div class="recommend-block-item row">

            <div class="recommend-block-item__container container-fluid">

              <div class="recommend-item__container--list row">

                <transition name="el-zoom-in-top">
                  <div v-show="show" class="recommend-item__container--list-block p-0 col-3">

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
                      Superfood Boosts
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
                </transition>

                <transition name="el-zoom-in-top">
                  <div v-show="show" class="recommend-item__container--list-block p-0 col-3">

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
                </transition>

                <transition name="el-zoom-in-top">
                  <div v-show="show" class="recommend-item__container--list-block p-0 col-3">

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
                </transition>

                <transition name="el-zoom-in-top">
                  <div v-show="show" class="recommend-item__container--list-block p-0 col-3">

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
                </transition>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div class="footer">

        <div class="footer-block container-fluid p-0">

          <div class="footer-block-navigation row">

            <div class="footer-block-navigation-content col-6 ">

              <div class="footer-block-navigation-content__logo">
                <img alt="" class="head-logo" src="@/assets/img/navi/Foodieland..png">
              </div>

              <div class="footer-block-navigation-content__info">

                <span>Lorem ipsum dolor sit amet, consectetuipisicing elit,</span>

              </div>

            </div>

            <div class="footer-block-navigation-button col-6 d-flex justify-content-end p-0">

              <div><a>Recipes</a></div>
              <div><a>Blog</a></div>
              <div><a>Contact</a></div>
              <div><a>About us</a></div>

            </div>

          </div>

          <hr>

          <div class="footer-block-item row">

            <div class="footer-block-item-copyright col-8">

              <span class="footer-block-item-copyright-text">© 2020 Flowbase. Powered by </span>

              <span class="footer-block-item-copyright-name">Webflow</span>

            </div>

            <div class="footer-block-item-icon col-12 d-flex justify-content-end">

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
import axios from "axios";
export default {
  name: "ContactCook",
  data: () => ({
    name: '',
    mail: '',
    subject: '',
    state: '',
    message: '',
    error: null,
    success: false,
    info: null,
    loading: true,
    errored: false,
    show: true
  }),
  methods: {
    send() {
      const content = {name: this.name, mail: this.mail, subject:this.subject, state:this.state, message:this.message};

      axios.post('http://localhost:8080/', {content})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      this.$notify({
        title: 'Success',
        message: 'Your form is submitted successfully!',
        type: 'success'
      })
    },
  }
}
</script>

<style scoped>
</style>