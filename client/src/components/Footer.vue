<template>
  <body class="bg-footer-blue">
    <div class="md:px-32">
      <div
        class="flex md:flex-row lg:flex-row xl:flex-row flex-col w-full justify-center md:justify-start"
      >
        <div
          class="py-10 pl-10 md:pr-10 md:pl-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div class="flex flex-col items-start justify-start">
            <div
              class="w-52 flex flex-col justify-center align-middle content-center"
            >
              <a href="https://hirelamp.co/" class="flex items-center">
                <img
                  src="../assets/hirelamp_logo_footer.svg"
                  alt=""
                  class="mb-4"
                />
              </a>

              <p
                class="text-sm md:text-sm lg:text-md xl:text-md pb-8 max-w-md text-white text-left bt-footer"
              >
                Get weekly update about our product on your email
              </p>

              <p
                class="text-sm md:text-sm lg:text-md xl:text-md pb-3 max-w-md text-white text-left bt-footer"
              >
                Follow us on social media:
              </p>

              <div class="flex flex-row justify-start items-start">
                <a
                  href="https://www.linkedin.com/company/hirelampco/"
                  target="_blank"
                  class="flex justify-start items-start"
                >
                  <img
                    src="../assets/linkedin.svg"
                    alt="linkedin"
                    class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2 fill-white"
                  />
                </a>
                <a
                  href="https://instagram.com/hirelampco?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  class="flex justify-start items-start"
                >
                  <img
                    src="../assets/instagram.svg"
                    alt="instagram"
                    class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
                /></a>
                <a
                  href="https://www.facebook.com/hirelampco/"
                  target="_blank"
                  class="flex justify-start items-start"
                >
                  <img
                    src="../assets/facebook.svg"
                    alt="facebook"
                    class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
                  />
                </a>
                <a
                  href="https://twitter.com/hirelampco/status/1515974250414604294"
                  target="_blank"
                  class="flex justify-start items-start"
                >
                  <img
                    src="../assets/twitter.svg"
                    alt="twitter"
                    class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-10 w-full md:w-1/2 lg:w-2/5 xl:w-2/5">
          <div class="flex flex-col items-start justify-start">
            <p
              class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-white text-left bt-footer"
            >
              Company
            </p>
            <img src="../assets/footerline.svg" alt="" class="pb-7" />

            <p
              class="cursor-not-allowed text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
            >
              About us
            </p>
            <router-link to="/howitworks">
              <p
                class="cursor-not-allowed text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
              >
                Steps
              </p>
            </router-link>

            <router-link to="/subscribe">
              <p
                class="cursor-not-allowed text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
              >
                FAQ
              </p>
            </router-link>
          </div>
        </div>

        <div class="p-10 w-full md:w-1/2 lg:w-1/5 xl:w-1/5">
          <div class="flex flex-col items-start justify-start">
            <p
              class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-white bt-footer"
            >
              Contact
            </p>
            <img src="../assets/footerline.svg" alt="" class="pb-7" />
            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
            >
              <a href="tel: +994554308506"> +994554308506 </a>
            </p>

            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
            >
              <a href="mailto:info@hirelamp.co"> info@hirelamp.co </a>
            </p>
            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-9 text-white bt-footer"
            >
              <a
                target="_blank"
                href="https://www.google.com/maps/place/SABAH.lab+Acceleration+Center/@40.3768262,49.8590704,18z/data=!3m1!4b1!4m5!3m4!1s0x40307def69a5210d:0xa677620af3c7e1f9!8m2!3d40.3768262!4d49.8599365"
              >
                U. Hajibeyov 57</a
              >
            </p>
          </div>
        </div>

        <div
          class="py-10 px-10 md:px-0 w-full md:w-1/2 lg:w-[200px] xl:w-[200px] xl:ml-16 2xl:ml-24"
        >
          <div class="flex flex-col items-start justify-start">
            <p
              class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-white bt-footer"
            >
              Subscribe to our newsletter
            </p>

            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-5 pt-3.5 text-white bt-footer text-left"
            >
              Get weekly update about our product on your email, no spam
              guaranteed we promise
            </p>
            <form action="" @submit.prevent="postNewsletter()">
              <div class="flex justify-start">
                <input
                  type="email"
                  class="w-full md:w-80 h-12 p-3 mr-4 border border-gray-400 rounded-full focus:outline-none bt-footer"
                  placeholder="Enter your email"
                  v-model="email"
                  required
                />
                <button
                  type="submit"
                  class="w-28 h-12 p-3 bg-custom-blue rounded-full text-white uppercase tracking-wide font-bold bt-footer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center items-center">
          <img src="../assets/footerline2.svg" alt="" />
        </div>

        <div class="sm:flex sm:items-center sm:justify-between pb-20 pt-3">
          <div class="flex space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="cursor-not-allowed text-gray-500 hover:text-gray-900 dark:hover:text-white bt-footer"
            >
              <span>Terms & conditions</span>
            </a>
            <a
              href="#"
              class="cursor-not-allowed text-gray-500 hover:text-gray-900 dark:hover:text-white bt-footer"
            >
              <span>Privacy policy</span>
            </a>
          </div>

          <span
            class="text-sm text-gray-500 sm:text-center dark:text-gray-400 bt-footer"
            >© 2022
            <a href="https://hirelamp.co/" class="hover:underline">Hirelamp™</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>

      <!-- <div class="bg-gray-400">
      <div
        class="md:w-auto xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row col-end-1"
      >
        <div class="flex flex-row justify-start items-center">
          <p class="text-sm md:text-base lg:text-md xl:text-md px-5">
            © 2022 Hirelamp. All rights reserved.
          </p>
        </div>
        <div class="p-3 flex justify-end px-5">
          <div class="flex flex-row justify-center items-center">
            <a
              href="https://www.linkedin.com/company/hirelampco/"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/linkedin.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
            <a
              href="https://instagram.com/hirelampco?igshid=YmMyMTA2M2Y="
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/instagram.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
            /></a>
            <a
              href="https://www.facebook.com/hirelampco/"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/facebook.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
            <a
              href="https://twitter.com/hirelampco/status/1515974250414604294"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/twitter.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
          </div>
        </div>
      </div>
    </div> -->
    </div>
  </body>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      email: "",
    };
  },

  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },

  methods: {
    showToast() {
      this.toast.success("Email saved successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    showErrorToast() {
      this.toast.error("Please enter a valid email address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    //post newsletter
    postNewsletter() {
      axios
        .post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/welcome/",
          {
            email: this.email,
          }
        )
        .then((response) => {
          console.log(response);
          this.showToast();
          this.email = "";
        })
        .catch((error) => {
          console.log(error);
          this.showErrorToast();
        });
    },
  },
};
</script>

<style></style>
