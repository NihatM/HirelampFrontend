<template>
  <body style="font-family: 'Lato', sans-serif" class="overflow-x-hidden">
    <div class="">
      <Search />

      <div class="px-6 lg:px-32 pt-16 lg:pt-44">
        <div class="pb-16">
          <img src="../assets/line.svg" alt="" class="pb-2" />
          <p class="text-4xl text-left bt-fontonly font-medium pb-3">
            How do we help you?
          </p>
          <p class="text-4xl text-left bt-book">
            We offer a platform to connect you with industry and role specific
            mentors so that
            <br />
            you can be a step closer to the dream job!
          </p>
        </div>

        <div class="flex md:flex-nowrap flex-wrap justify-center gap-x-4">
          <div class="flex flex-col items-center pb-8 lg:pb-0 max-w-sm">
            <div
              class="border-1 border-border-gray rounded-xl md:shadow-2xl xl:w-96 h-72 px-8 pt-8 pb-24"
            >
              <img class="w-12 h-12 mb-6" src="../assets/howdowehelp1.png" />

              <p class="text-left bt-smalltitle font-bold pb-3.5">
                Mock interviews
              </p>
              <p class="text-left bt-smalltext">
                Have an interview next week but not prepared yet? The best way
                of learning is practicing. Book a session with a mentor and
                simulate the interview experience.
              </p>
            </div>

            <div
              class="bg-custom-gray hover:bg-custom-blue duration-300 h-9 w-11 relative rounded-xl -mt-6"
            >
              <button class="z-50">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>

          <div class="flex flex-col items-center pb-8 lg:pb-0 max-w-sm">
            <div
              class="border-1 border-border-gray rounded-xl md:shadow-2xl w-96 h-72 border-1 px-8 pt-8 pb-24"
            >
              <img class="w-12 h-12 mb-6" src="../assets/howdowehelp2.png" />

              <p class="text-left bt-smalltitle font-bold pb-3.5">
                Career coaching
              </p>
              <p class="text-left bt-smalltext">
                Need advice on how to develop you career? Talk to our mentors to
                learn where to start, how to head or even specifics such as
                salary negotiation and career shifts.
              </p>
            </div>

            <div
              class="bg-custom-gray hover:bg-custom-blue duration-300 h-9 w-11 relative rounded-xl -mt-6"
            >
              <button class="z-50">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>
          <!-- <div class="w-72 h-80 flex flex-col items-center"> -->

          <div class="flex flex-col items-center pb-8 lg:pb-0 max-w-sm">
            <div
              class="border-1 border-border-gray rounded-xl md:shadow-2xl w-96 h-72 border-1 px-8 pt-8 pb-24"
            >
              <img class="w-12 h-12 mb-6" src="../assets/howdowehelp3.png" />

              <p class="text-left bt-smalltitle font-bold pb-3.5 truncate">
                Job search consultation
              </p>
              <p class="text-left bt-smalltext">
                Are you tired of application rejections? Discover how to find
                the best job and role suiting your needs, both local and
                international.
              </p>
            </div>

            <div
              class="bg-custom-gray hover:bg-custom-blue duration-300 h-9 w-11 relative rounded-xl -mt-6"
            >
              <button class="z-50">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 lg:px-32 pt-16 lg:pt-44">
        <div class="pb-16">
          <img src="../assets/line.svg" alt="" class="pb-2" />

          <p class="text-4xl text-left bt-medium pb-3">
            How do these all work?
          </p>
          <p class="text-4xl text-left bt-book">
            Landing the dream job is easier than you think. Here is how Hirelamp
            works
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="pb-14 md:pb-0">
            <div class="w-72 h-80 flex flex-col items-center">
              <img class="w-44 h-44 mb-6" src="../assets/howallthisworks.svg" />

              <p class="text-center bt-smalltitle font-bold pb-3.5">
                Explore to find
              </p>
              <p class="text-center bt-smalltext">
                We have mentors suiting multiple companies, industries and
                roles. Pick the one you want to talk to.
              </p>
            </div>
            <!-- <div class="z-10 flex justify-center">
              <button class="">next</button>
            </div> -->
          </div>

          <div class="pb-14 md:pb-0">
            <div class="w-72 h-80 flex flex-col items-center">
              <img
                class="w-44 h-44 mb-6"
                src="../assets/howallthisworks1.svg"
              />

              <p class="text-center bt-smalltitle font-bold pb-3.5">
                Book your session
              </p>
              <p class="text-center bt-smalltext">
                Each mentor has different availability and rate. Book the time
                slot fitting the you the best and pay the fee.
              </p>
            </div>
            <!-- <div class="z-10 flex justify-center">
              <button class="">next</button>
            </div> -->
          </div>

          <div class="">
            <div class="w-72 h-80 flex flex-col items-center">
              <img
                class="w-44 h-44 mb-6"
                src="../assets/howallthisworks2.svg"
              />

              <p class="text-center bt-smalltitle font-bold pb-3.5">
                Sharpen your skills
              </p>
              <p class="text-center bt-smalltext">
                Hop on and have a timed session. Make the most out of it so that
                you can nail the job interview.
              </p>
            </div>
            <!-- <div class="z-10 flex justify-center">
              <button class="">next</button>
            </div> -->
          </div>
        </div>
      </div>

      <div
        class="p-6 pt-20 pb-36 lg:px-32 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1"
      >
        <div
          class="w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
        >
          <img
            src="../assets/helping.svg"
            alt=""
            class="md:w-full xl:w-w-full lg:w-full"
          />
        </div>
        <div
          class="w-full xl:w-9/12 align-middle flex flex-col justify-center content-center md:pl-9"
        >
          <!-- <button v-on:click="test">TEST v-on</button> -->
          <div class="">
            <img src="../assets/line.svg" alt="" class="pb-2" />

            <p
              class="text-xl md:text-4xl xl:text-6xl text-left bt-medium pb-3.5"
            >
              Connect to mentors from more than 20 companies and 10 countries
            </p>
            <p class="text-4xl text-left bt-book pb-12 max-w-2xl">
              The most effective way of landing your dream is to get help from
              someone who'd already gone through the same road.
            </p>
            <button
              class="border-2 rounded-2xl border-custom-blue flex items-start text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-2 py-1.5"
            >
              Read more
            </button>
          </div>
        </div>
        <div
          class="w-full md:w-0 md:mb-14 xl:mb-0 relative flex items-center justify-center px-2"
        >
          <img
            src="../assets/helping.svg"
            alt=""
            class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
          />
        </div>
        <!-- hidden md:visible lg:visible xl:visible -->
      </div>

      <div class="px-6 lg:px-32">
        <div class="pb-16">
          <img src="../assets/line.svg" alt="" class="pb-2" />
          <div class="flex justify-between">
            <div class="flex flex-col">
              <p class="text-4xl text-left bt-medium pb-3">
                Mentors from the top companies.
              </p>
              <p class="text-4xl text-left bt-book">
                Pick the right mentor for you to prepare company and role
                specific challenges.
              </p>
            </div>
            <div class="text-custom-blue">
              <button
                @click="mentorPage()"
                class="text-custom-blue underline underline-offset-2 inline-flex"
              >
                See all
                <img src="../assets/ArrowSmall.svg" alt="" class="px-4" />
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row items-center align-middle content-center justify-between"
        >
          <!-- <div class="flex flex-col">
            <div class="shadow-2xl rounded-xl w-96 h-96 pb-8 px-8 relative">
              <div>
                <button class="z-50 mb-10">
                  <img src="../assets/person.svg" alt="" />
                </button>
                <p class="text-center bt-smalltitle font-bold pb-4">
                  Name Surname
                </p>

                <div class="flex items-center justify-center pb-4">
                  <button
                    class="bg-black rounded-2xl text-center text-white bt-book px-2 py-1.5"
                  >
                    40$ Per session
                  </button>
                </div>

                <div class="flex flex-row items-stretch justify-between pb-5">
                  <p>Example</p>

                  <p>Example</p>
                </div>

                <p class="text-center bt-smalltext">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  placeat aperiam tempora.
                </p>
              </div>
            </div>
          </div> -->

          <div class="">
            <div class="flex flex-col items-center lg:gap-x-8">
              <!-- Image emplacement -->
              <div class="bg-white h-32 w-32 rounded-full relative -mb-24">
                <button class="z-50">
                  <img
                    src="../assets/Gurban_Abbasov.jpeg"
                    class="rounded-full"
                    alt=""
                  />
                </button>
              </div>
              <!-- Content Card emplacement -->
              <div
                class="shadow-2xl rounded-xl w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Gurban Abbasov
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-black text-white hover:bg-white rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      35$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center px-8 space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book">Accenture</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book">Netherlands</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext pb-6">
                    Career choice, Advice on top uni. in Netherlands, Relocation
                    to Netherlands, Guidance in various stages of interview
                  </p>
                  <div class="flex justify-center pb-12">
                    <button
                      @click="mentorPageGurban()"
                      class="h-11 w-32 border-2 rounded-full border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-2 py-1.5"
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-8 lg:py-0">
            <div class="flex flex-col items-center h-399">
              <!-- Image emplacement -->
              <div class="bg-white h-32 w-32 rounded-full relative -mb-24">
                <button class="z-50">
                  <img
                    src="../assets/Etibar_Huseynli.jpeg"
                    class="rounded-full"
                    alt=""
                  />
                </button>
              </div>
              <!-- Content Card emplacement -->
              <div
                class="shadow-2xl rounded-xl w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Etibar Huseynli
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-black text-white hover:bg-white rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      30$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center px-8 space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book">QSS Analytics LLC</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book">Azerbaijan</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext pb-6">
                    Data strategy consultation for companies, BI and Analytics,
                    Interview preparation for Data Science roles, Guidance on
                    starting Data Science & ML career
                  </p>
                  <div class="flex justify-center pb-12">
                    <button
                      @click="mentorPageEtibar()"
                      class="h-11 w-32 border-2 rounded-full border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-2 py-1.5"
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="flex flex-col items-center">
              <!-- Image emplacement -->
              <div class="bg-white h-32 w-32 rounded-full relative -mb-24">
                <button class="z-50">
                  <img
                    src="../assets/Emin_Guluyev.jpg"
                    class="rounded-full"
                    alt=""
                  />
                </button>
              </div>
              <!-- Content Card emplacement -->
              <div
                class="shadow-2xl rounded-xl w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Emin Guluyev
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-black text-white hover:bg-white rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      40$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center px-8 space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book">Vodafone</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book">Luxembourg</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext pb-6">
                    Interview preparation for supply chain roles, Coaching for
                    procurement careers
                  </p>
                  <div class="flex justify-center pb-12">
                    <button
                      @click="mentorPageEmin()"
                      class="h-11 w-32 border-2 rounded-full border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-2 py-1.5"
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="p-6 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1 md:px-32 pt-40"
      >
        <div
          class="w-full xl:w-9/12 align-middle flex flex-col justify-center content-center"
        >
          <div
            class="px-3 w-full md:w-0 md:mb-14 xl:mb-0 relative flex items-center justify-center"
          >
            <img
              src="../assets/mentorin.svg"
              alt=""
              class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
            />
          </div>
          <!-- <button v-on:click="test">TEST v-on</button> -->
          <div class="pb-9">
            <p class="text-4xl text-left bt-medium pb-3.5">
              Which mentor do you want see?
            </p>
            <p class="text-4xl text-left bt-book max-w-xl">
              Just send us Linkdein link and we will add for you this mentor and
              you can get appointment easly the your mentor in order to help you
            </p>
          </div>

          <!-- <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >Search</label
            >
            <div class="relative">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form> -->

          <form @submit.prevent="searchMentor">
            <div class="flex justify-left">
              <div class="relative md:w-10/12 w-full">
                <input
                  type="url"
                  placeholder="Linkedin URL"
                  ref="search"
                  :maxlength="maxChar"
                  :minlength="minChar"
                  v-model="search"
                  id='location-search"'
                  class="shadow-2xl block p-2.5 px-8 w-full h-14 z-20 text-sm text-gray-900 bg-white rounded-full"
                  required=""
                />

                <button
                  type="submit"
                  class="absolute top-2.5 py-2.5 px-12 h-9 right-2 text-sm font-medium text-white rounded-full hover:bg-blue-600 duration-300 bg-custom-blue focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <p class="text-white text-center bt-book">SEND</p>
                </button>

                <!-- <button
                  type="submit"
                  class="absolute top-0 right-0 py-2.5 px-4 h-12 text-sm font-medium text-white rounded-full hover:bg-gray-200 bg-custom-blue focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button> -->
              </div>
            </div>
          </form>
        </div>
        <!-- hidden md:visible lg:visible xl:visible -->
        <div
          class="w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
        >
          <img
            src="../assets/mentorin.svg"
            alt=""
            class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
          />
        </div>
      </div>

      <Footer />
    </div>
  </body>
</template>

<script>
// import { useGtm } from '@gtm-support/vue-gtm';
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

//Content for the footer pages
//metors
//what is there for mentors
//how to become a mentor etc
// import "../assets/main.css";
import Search from "../components/Search.vue";
import Footer from "../components/Footer.vue";
// import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: this.mentorDatas,
      getMentorDetails: false,
    };
  },
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    Footer,
    Search,
  },

  methods: {
    mentorPage() {
      this.$router.push("/mentorpage");
    },
    mentorPageGurban() {
      this.$router.push("/mentordetails/3e2fed52-17bc-4e90-a6af-78c74ee7a650");
    },
    mentorPageEtibar() {
      this.$router.push("/mentordetails/bd37b061-8e19-4641-ab3c-3ec9d12fbac0");
    },
    mentorPageEmin() {
      this.$router.push("/mentordetails/ce852337-1385-4401-b46b-b1c782fbad92");
    },
  },

  // mounted() {
  //   this.getMentorDatas();
  // },
  // methods: {
  //   async getMentorDatas() {
  //     axios
  //       .get(
  //         "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/experts/"
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.mentorDatas = response.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   async mentorDetails(mentorId) {
  //     //console.log(mentorId);
  //     axios
  //       .get(
  //         "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
  //           mentorId +
  //           "/"
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.mentorDatas = response.data;
  //         console.log(this.currentMentorId);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     //console.log("jajajajjaja");
  //     this.$router.push("/mentordetails/" + mentorId);
  //   },
};
</script>
