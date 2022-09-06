<template>
  <div
    class="p-6 md:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1 md:pl-32"
  >
    <div
      class="w-full lg:w-8/12 align-middle flex flex-col justify-center content-center"
    >
      <!-- <button v-on:click="test">TEST v-on</button> -->
      <h1
        class="text-3xl md:text-3xl lg:text-4xl xl:text-5xl bt-fontonly font-medium leading-10 text-dark-blue mb-2 text-left xl:text-left md:mt-0 mt-4 py-4"
      >
        Find the right mentor to
        <br />
        crush the job interview
      </h1>

      <form @submit.prevent="searchMentor">
        <div class="flex justify-left">
          <div class="relative w-full md:w-10/12">
            <input
              type="search"
              placeholder="Type to see something helpful happen"
              ref="search"
              :maxlength="maxChar"
              :minlength="minChar"
              v-model="search"
              id='location-search"'
              class="shadow-2xl block p-2.5 px-8 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-full"
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
      <div class="flex justify-start items-start pt-12">
        <TagsNew />
      </div>
    </div>
    <!-- hidden md:visible lg:visible xl:visible -->
    <div
      class="w-11/12 md:w-full lg:w-6/12 xl:w-7/12 md:mb-14 xl:mb-0 relative flex items-center justify-center"
    >
      <img
        src="../assets/interview_new.svg"
        alt=""
        class="md:h-100 lg:h-100 xl:h-100 md:w-full xl:w-w-full lg:w-full"
      />
    </div>
  </div>
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
