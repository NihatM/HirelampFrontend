<template>
  <body class="overflow-x-hidden">
    <div class="">
      <Search />

      <div class="px-6 lg:px-32 pt-16 lg:pt-16">
        <div class="pb-16">
          <img src="../assets/line.svg" alt="" class="pb-3" />
          <p class="text-4xl text-left bt-fontonly font-medium pb-3">
            How do we help you?
          </p>
          <p class="text-4xl text-left bt-book text-text-gray">
            We offer a platform to connect you with industry and role specific
            mentors so that
            <br />
            you can be a step closer to the dream job!
          </p>
        </div>

        <div
          class="flex md:flex-nowrap flex-wrap justify-center xl:justify-between gap-4"
        >
          <div class="flex flex-col items-center pb-8 lg:pb-0 shrink-0">
            <div
              class="border-1 border-gray-300 rounded-xl md:shadow-lg hover:shadow-2xl duration-300 xl:w-80 h-72 px-8 pt-8 pb-24"
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
              <button class="z-50" @click="to_categories(int_prep)">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>

          <div class="flex flex-col items-center pb-8 lg:pb-0 shrink-0">
            <div
              class="border-1 border-gray-300 rounded-xl md:shadow-lg hover:shadow-2xl duration-300 xl:w-80 h-72 border-1 px-8 pt-8 pb-24"
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
              <button class="z-50" @click="to_categories(car_coaching)">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>
          <!-- <div class="w-72 h-80 flex flex-col items-center"> -->

          <div class="flex flex-col items-center pb-8 lg:pb-0 shrink-0">
            <div
              class="border-1 border-gray-300 rounded-xl md:shadow-lg hover:shadow-2xl duration-300 xl:w-80 h-72 border-1 px-8 pt-8 pb-24"
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
              <button class="z-50" @click="to_categories(job_search)">
                <img src="../assets/Arrow.svg" alt="" class="px-2 py-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 lg:px-32 pt-16 lg:pt-44">
        <div class="pb-16">
          <img src="../assets/line.svg" alt="" class="pb-3" />

          <p class="text-4xl text-left bt-medium pb-3">
            How do these all work?
          </p>
          <p class="text-4xl text-left bt-book text-text-gray">
            Landing the dream job is easier than you think. Here is how Hirelamp
            works
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="pb-14 md:pb-0">
            <div class="w-72 h-80 flex flex-col items-center">
              <img
                class="w-44 h-44 mb-6"
                src="../assets/howallthisworks.svg"
                alt="We have mentors suiting multiple companies, industries and
                roles. Pick the one you want to talk to."
              />

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
                alt="Each mentor has different availability and rate. Book the time
                slot fitting the you the best and pay the fee."
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
                alt="Hop on and have a timed session. Make the most out of it so that you can nail the job interview."
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
        class="p-6 pt-20 pb-36 md:px-32 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1"
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
            <img src="../assets/line.svg" alt="" class="pb-3" />

            <p
              class="text-xl md:text-4xl xl:text-6xl text-left bt-medium pb-3.5"
            >
              Connect to mentors from more than 20 companies and 10 countries
            </p>
            <p
              class="text-4xl text-left bt-book pb-12 max-w-2xl text-text-gray"
            >
              The most effective way of landing your dream is to get help from
              someone who'd already gone through the same road.
            </p>
            <button
              @click="mentorPage()"
              class="border-2 rounded-full border-custom-blue flex items-start text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-3 py-2"
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

      <div class="px-6">
        <div class="pb-16 md:px-32">
          <img src="../assets/line.svg" alt="" class="pb-3" />
          <div class="flex md:flex-row flex-col justify-between">
            <div class="flex flex-col">
              <p class="text-4xl text-left bt-medium pb-3">
                Mentors from the top companies.
              </p>
              <p class="text-4xl text-left bt-book text-text-gray">
                Pick the right mentor for you to prepare company and role
                specific challenges.
              </p>
            </div>
            <div class="text-custom-blue py-2 md:py-0">
              <button
                @click="mentorPage()"
                class="text-custom-blue text-xl underline underline-offset-2 inline-flex"
              >
                See all
                <img src="../assets/ArrowSmall.svg" alt="" class="px-2" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col xl:flex-row justify-center gap-4">
          <div
            class="flex md:flex-nowrap flex-wrap justify-center xl:justify-between gap-4"
          >
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
                class="shadow-xl hover:shadow-2xl duration-300 rounded-2xl w-320 md:w-320 2xl:w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Gurban Abbasov
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-price-blue text-black rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      35$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book truncate">Accenture</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book truncate">Netherlands</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext h-24 pb-6">
                    Career choice, Advice on top uni. in Netherlands, Relocation
                    to Netherlands, Guidance in various stages of interview
                  </p>
                  <div class="flex justify-center">
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
                    src="../assets/Turkan_Akbarova.jpg"
                    class="rounded-full"
                    alt=""
                  />
                </button>
              </div>
              <!-- Content Card emplacement -->
              <div
                class="shadow-xl hover:shadow-2xl duration-300 rounded-2xl w-320 md:w-320 2xl:w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Turkan Akbarova
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-price-blue text-black rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      100$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book truncate">CGI AG</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book truncate">Germany</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext h-24 pb-6">
                    CV preparation based on German standards, Screening &
                    evaluation of portfolio, Adjustments in LinkedIn profile,
                    Creating an email body template for job applications
                  </p>
                  <div class="flex justify-center">
                    <button
                      @click="mentorPageTurkan()"
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
                class="shadow-xl hover:shadow-2xl duration-300 rounded-2xl w-320 md:w-320 2xl:w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                    Emin Guluyev
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <button
                      class="bg-price-blue text-black rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      40$ Per session
                    </button>
                  </div>

                  <div
                    class="flex flex-row pb-3 items-center justify-center space-x-9"
                  >
                    <div class="flex flex-row items-start">
                      <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                      <p class="bt-book truncate">Vodafone</p>
                    </div>
                    <div class="flex flex-row items-start">
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

                      <p class="bt-book truncate">Luxembourg</p>
                    </div>
                  </div>

                  <p class="text-center bt-smalltext h-24 pb-6">
                    Interview preparation for supply chain roles, Coaching for
                    procurement careers
                  </p>
                  <div class="flex justify-center">
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

      <mentorRequest />

      <!-- <div
        class="p-6 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1 md:px-32 pt-40"
      >
        <div class="w-full xl:w-9/12 flex flex-col">
          <div
            class="px-3 w-full md:w-0 md:mb-14 xl:mb-0 relative flex items-center justify-center align-middle"
          >
            <img
              src="../assets/mentorin.svg"
              alt=""
              class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
            />
          </div>
          <div class="pb-9">
            <p class="text-4xl text-left bt-medium pb-3.5">
              Can't find the mentor you want to talk to?
            </p>
            <p class="text-4xl text-left bt-book max-w-xl text-text-gray">
              Just share the link to his/her LinkedIn profile. We will be in
              touch to bring the mentor you search for to our platform or
              suggest others that can be helpful.
            </p>
          </div>

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
                  class="shadow-xl focus:shadow-2xl duration-300 block p-2.5 px-8 w-full h-14 z-20 text-sm text-gray-900 bg-white rounded-full"
                  required=""
                />

                <button
                  type="submit"
                  class="absolute top-2.5 py-2.5 px-12 h-9 right-2 text-sm font-medium text-white rounded-full hover:bg-blue-600 duration-300 bg-custom-blue focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <p class="text-white text-center bt-book">SEND</p>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
        >
          <img src="../assets/mentorin.svg" alt="" class="" />
        </div>
      </div> -->

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
import mentorRequest from "../components/mentorRequest.vue";
// import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: this.mentorDatas,
      getMentorDetails: false,
      int_prep: "Interview Preparation",
      job_search: "Job Search consultation",
      car_coaching: "Career Coaching",
    };
  },
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    Footer,
    Search,
    mentorRequest,
  },

  methods: {
    to_categories(str) {
      this.$router.push("/mentors/categories/" + str);
    },
    mentorPage() {
      this.$router.push("/mentors");
    },

    mentorPageGurban() {
      this.$router.push("/mentor/Gurban-Abbasov");
    },
    mentorPageTurkan() {
      this.$router.push("/mentor/Turkan-Akbarova");
    },
    mentorPageEmin() {
      this.$router.push("/mentor/ce852337-1385-4401-b46b-b1c782fbad92");
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
