<template>
  <div class="align-start justify-start">
    <ul
      class="py-2 pr-8 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
      v-for="tag in tags"
      :key="tag.id"
    >
      <li
        @click="searchTag(tag)"
        class="cursor-pointer bt-book px-4 py-1.5 bg-gray-200 rounded-full w-max sm:text-sm md:text-base lg:text-md text-left xl:text-md hover:bg-black hover:text-white hover:border-black duration-300"
      >
        {{ tag }}
      </li>
    </ul>

    <button class="text-custom-blue underline underline-offset-2 inline-flex">
      See More
      <img src="../assets/ArrowSmall.svg" alt="" class="px-4" />
    </button>
  </div>
</template>

<script>
import "../assets/main.css";
export default {
  data() {
    return {
      mentorData: {},
      isLoading: true,
      mentorDatas: [],
      tags: ["Mentor", "Industry", "Country", "Finance"],
      search: "",
    };
  },

  methods: {
    searchTag(searchtag) {
      this.$router.push("/search/" + searchtag);
    },
  },
};
</script>

<style></style>
