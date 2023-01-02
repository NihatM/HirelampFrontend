<template>
  <div>
    <p class="text-left bt-md">Services</p>
    <div class="flex md:flex-nowrap flex-wrap">
      <ul
        class="py-2 pr-8 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
        v-for="category in this.categories"
        :key="category"
      >
        <li
          class="cursor-pointer bt-book px-4 py-2.5 border-1 rounded-xl w-max sm:text-sm md:text-base lg:text-md text-left xl:text-md hover:bg-black hover:text-white hover:border-black duration-300"
        >
          <div
            @click="searchCat(category)"
            class="flex flex-row items-center justify-between gap-x-2"
          >
            <img
              v-show="category == 'Interview Preparation'"
              src="../assets/mockinterview.svg"
              class="w-7 h-6"
              alt=""
            />
            <img
              v-show="category == 'Job Search Consultation'"
              src="../assets/jobsearch.svg"
              class="w-7 h-6"
              alt=""
            />

            <img
              v-show="category == 'Career Coaching'"
              src="../assets/careercoaching.svg"
              class="w-7 h-6"
              alt=""
            />

            {{ category }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "../assets/main.css";
export default {
  props: {
    searchCategories: [],
  },
  data() {
    return {
      mentorData: {},
      isLoading: true,
      mentorDatas: [],
      categories: [],
      search: "",
    };
  },

  beforeUpdate() {
    this.categories = this.searchCategories;
  },

  methods: {
    searchCat(category) {
      this.$router.push("/mentors/categories/" + category);
    },
  },
};
</script>
