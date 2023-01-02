<template>
  <body>
    <div class="absolute w-full">
      <img src="../assets/bgtop.svg" alt="" />
      <div
        class="relative hidden md:flex justify-end items-center w-screen space-y-24"
      >
        <div
          class="absolute border-t border-b border-l border-blue-400 rounded-tl-full rounded-bl-full w-12 h-24 animate-pulse"
        ></div>
        <div
          class="absolute border-t border-b border-l border-blue-400 rounded-tl-full rounded-bl-full w-8 h-16 animate-pulse"
        ></div>
      </div>
    </div>
    <div
      class="relative py-6 md:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1"
    >
      <div
        class="px-6 md:px-0 w-full lg:w-8/12 align-middle flex flex-col justify-center content-center"
      >
        <!-- <button v-on:click="test">TEST v-on</button> -->
        <h1
          class="md:pl-32 text-3xl md:text-3xl lg:text-4xl xl:text-5xl bt-fontonly font-medium text-dark-blue mb-2 text-left xl:text-left md:mt-0 mt-4 py-4"
        >
          Find the right mentor to
          <br />
          crush the job interview
        </h1>
        <div
          class="relative hidden md:flex justify-start items-center space-y-24 animate-pulse"
        >
          <div
            class="absolute border-t border-b border-r border-blue-400 rounded-tr-full rounded-br-full w-12 h-24"
          ></div>
          <div
            class="absolute border-t border-b border-r border-blue-400 rounded-tr-full rounded-br-full w-8 h-16"
          ></div>
        </div>

        <div class="absolute my-4 h-24 w-24"></div>

        <form @submit.prevent="searchMentor">
          <div class="flex justify-left">
            <div class="relative w-full md:w-10/12 md:pl-32">
              <input
                type="search"
                placeholder="Search a mentor, industry, country or company"
                ref="search"
                :maxlength="maxChar"
                :minlength="minChar"
                v-model="search"
                id='location-search"'
                class="border-2 border-custom-blue md:border-0 md:border-white shadow-xl block p-2.5 px-8 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-full"
                required=""
              />

              <button
                type="submit"
                class="absolute top-0 right-0 py-2.5 px-4 h-12 text-sm font-medium text-white rounded-r-full hover:bg-blue-500 bg-custom-blue duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-start pt-4 lg:pt-8 md:pl-32">
          <TagsNew :searchTags="this.searchTags" />
        </div>
      </div>
      <!-- hidden md:visible lg:visible xl:visible -->
      <div
        class="w-11/12 md:w-full lg:w-6/12 xl:w-7/12 md:mb-14 xl:mb-0 relative flex items-center justify-center"
      >
        <img src="../assets/interview_new.svg" alt="" class="" />
      </div>
    </div>
  </body>
</template>

<script>
// import axios from "axios";
import TagsNew from "./TagsNew.vue";
import "../assets/main.css";
export default {
  name: "Search",

  data() {
    return {
      maxChar: 50,
      getMentorDetails: false,
      mentorDatas: [],
      search: "",
      searchTags: ["Azerbaijan", "Big4", "Software", "Finance"],
    };
  },

  components: {
    TagsNew,
  },

  methods: {
    searchMentor() {
      console.log(this.search);
      this.$router.push(`/search/${this.search}/`);
      localStorage.setItem("query", this.search);
    },
  },
};
</script>

<style></style>
