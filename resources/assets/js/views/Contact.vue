<template>
  <main-layout>
    <div class="container ">
      <div class="row h-100 align-items-center">
        <div class="col ">
          <div id="address" class="row justify-content-center" ref="address">
            <div class="col-12 text-center p-5">
              <p class="text-default">info (at) isabellafornasiero.com</p>
              <p class="text-default">Milan, Italy</p>
            </div>
          </div>
          <div id="show-contact" class="row justify-content-center" ref="show_contact_btn">
            <div class="col-12 pb-5">
              <div class="d-flex justify-content-around">
                <a @click="showContact" href="#" class="btn btn-primary">Send a message</a>
              </div>
            </div>
          </div>
          <form id="contact-form" action="" method="" ref="contact_form">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <a id="close" @click="closeContact" href="#" class="close" ref="close">
                  <span aria-hidden="true">&times;</span>
                </a>
                <div id="name" class="form-group pb-3">
                  <label for="name" class="text-default">Name</label>
                  <input type="text" name="name" value="" class="form-control" >
                </div>
                <div id="email" class="form-group pb-3">
                  <label for="email" class="text-default">E-mail</label>
                  <input type="text" name="email" value="" class="form-control">
                </div>
                <div id="message" class="form-group pb-3">
                  <label for="message" class="text-default">Message</label>
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

      this.formGroups = document.getElementsByClassName('form-group');
  },
  methods: {
      showContact(e) {
          e.preventDefault();
          var vue = this;

          var hide_contacts = new TimelineMax();
          hide_contacts.to([this.$refs.address, this.$refs.show_contact_btn], .4, {
              opacity: 0,
              ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
              display: 'none',
              onComplete: function(){
                  vue.$refs.contact_form.style.display = 'inherit';
              }
          })
          .staggerFromTo(this.formGroups, .6, {
              y: '+=100',
              scale: 0.8,
              opacity: 0
          }, {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
          }, .2);

          var master = new TimelineMax();
          master.add(hide_contacts);
          master.add(
            TweenMax.fromTo(this.$refs.close, 1, {
              opacity: 0,
              scale: 0,
              x: 100,
            }, {
              opacity: 1,
              scale: 1,
              x: 0,
              rotation: -180,
              ease: CustomEase.create("custom", "M0,0,C0,0.500,0.500,1,1,1"),
            }), .4
          )
      },
      closeContact(e) {
          e.preventDefault();
          var vue = this;

          var hide_form = new TimelineMax();

          hide_form
          .to(this.formGroups, .1, {
            scale: 1.1,
          })
          .to(this.formGroups, .4, {
            y: 0,
            opacity: 0,
            scale: 0.8,
            ease: Power4.easeInOut
          });

          var master = new TimelineMax();

          master.add(hide_form);
          master.add(
            TweenMax.to(this.$refs.close, .6, {
              opacity: 0,
              scale: 0,
              rotation: 180,
              ease: Power4.easeInOut,
              onComplete: function () {
                vue.$refs.contact_form.style.display = 'none';
              }
            }), .1
          );
          master.add(
            TweenMax.to([this.$refs.address, this.$refs.show_contact_btn], .4, {
              opacity: 1,
              display: 'inherit',
              ease: Power4.easeInOut
            }), .6
          );
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
