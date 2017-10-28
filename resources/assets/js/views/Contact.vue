<template>
  <main-layout>
    <div class="container ">
      <div class="row h-100 align-items-center">
        <div class="col ">
          <div id="address" class="row justify-content-center">
            <div class="col-12 text-center p-5">
              <p>info (at) isabellafornasiero.com</p>
              <p>Milan, Italy</p>
            </div>
          </div>
          <div id="show-contact" class="row justify-content-center">
            <div class="col-12 pb-5">
              <div class="d-flex justify-content-around">
                <a @click="showContact" href="#" class="btn btn-primary">Send a message</a>
              </div>
            </div>
          </div>
          <form id="contact-form" action="" method="">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <a id="close" @click="closeContact" href="#" class="close">
                  <span aria-hidden="true">&times;</span>
                </a>
                <div id="name" class="form-group pb-3">
                  <label for="name">Name</label>
                  <input type="text" name="name" value="" class="form-control" >
                </div>
                <div id="email" class="form-group pb-3">
                  <label for="email">E-mail</label>
                  <input type="text" name="email" value="" class="form-control">
                </div>
                <div id="message" class="form-group pb-3">
                  <label for="message">Message</label>
                  <textarea name="message" class="form-control"></textarea>
                </div>
                <div id="send-btn" class="form-group d-flex justify-content-around">
                  <button type="submit" name="button" class="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue';
import {TweenMax, TimelineLite} from 'gsap'
import CustomEase from 'gsap/CustomEase'

export default {
  name: "",
  data: () => ({

  }),
  mounted() {
      //do something after mounting vue instance
      this.address = document.getElementById('address');
      this.show_contact = document.getElementById('show-contact');
      this.contactForm = document.getElementById('contact-form');
      this.formGroups = document.getElementsByClassName('form-group');
      this.close = document.getElementById('close');

      this.hideContacts = new TimelineMax();
      this.showForm = new TimelineMax();
      this.hideForm = new TimelineMax();

  },
  methods: {
      showContact(e) {
          e.preventDefault();
          var vue = this;

          this.hideContacts.to([this.address, this.show_contact], .4, {
              opacity: 0,
              ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
              display: 'none',
              onComplete: function(){
                  vue.hideForm.pause(0)
                  vue.contactForm.style.display = 'inherit';
                  // TweenMax.set(vue.contactForm, {clearProps: 'all'} )
              }
          }).restart();


          this.showForm.staggerFromTo(this.formGroups, .6, {
              y: '+=100',
              scale: 0.8,
          }, {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
          }, .2)
          .fromTo(this.close, .6, {
            opacity: 0,
            scale: 0,
            x: 100,
          }, {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: -180,
            ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
          }).restart();
      },
      closeContact(e) {
          e.preventDefault();
          var vue = this;
          this.hideForm.to(this.contactForm, .1, {
            scale: 1.1,
          })
          .to(this.contactForm, .4, {
            scale: 0,
            opacity: 0,
            y: 100,
            ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
            onComplete: function() {
              vue.contactForm.style.display = 'none';
              vue.hideContacts.reverse();
              vue.showForm.pause(0);
            }
          }).play();
      }
  },
  components: {
    MainLayout
  }
}
</script>
<style lang="scss" scoped>

  .container {
    height: calc(100vh - 92px)
  }

  input, textarea {
    border-left: none !important;
    border-right: none !important;
    border-top: none !important;
    border-bottom: 2px solid #1e1f1c;
  }

  #contact-form {
    // opacity: 0;
    display: none;
  }

  .form-group {
    opacity: 0;
    // display: none;
  }

  #close {
    top: -20px;
    position: relative;
  }

</style>
