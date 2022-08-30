<template>
  <form @submit.prevent="searchMentor">
    <div class="flex justify-center">
      <div class="relative w-full md:w-6/12">
        <input
          type="search"
          placeholder="Search a mentor, industry, country or company"
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
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      maxChar: 50,
      minChar: 3,
      getMentorDetails: false,
      mentorDatas: [],
      search: "",
    };
  },

  //   created() {
  //     this.searchAgain();
  //   },

  methods: {
    searchMentor() {
      console.log(this.search);
      location.assign(`/search/${this.search}/`);
    },
  },
};
</script>

<style></style>
