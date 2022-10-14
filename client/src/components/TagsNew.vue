<template>
  <div class="">
    <ul
      class="py-2 pr-4 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
      v-for="tag in searchTags"
      :key="tag.id"
    >
      <li
        @click="searchTag(tag)"
        class="cursor-pointer px-2 py-1 bg-gray-200 rounded-full w-max sm:text-sm md:text-sm lg:text-sm text-left xl:text-md hover:bg-black hover:text-white hover:border-black duration-300"
      >
        {{ tag }}
      </li>
    </ul>
    <span class="">
      <button
        @click="mentorPage()"
        class="text-custom-blue underline underline-offset-2 inline-flex"
      >
        See more
        <img src="../assets/ArrowSmall.svg" alt="" class="p-2" />
      </button>
    </span>
  </div>
</template>

<script>
import "../assets/main.css";
export default {
  props: {
    searchTags: [],
  },
  data() {
    return {
      mentorData: {},
      isLoading: true,
      mentorDatas: [],
      tags: this.searchTags,
      search: "",
    };
  },

  beforeUpdate() {
    console.log(this.searchTags);
  },

  methods: {
    searchTag(searchtag) {
      // this.$router.push("/search/" + searchtag);
      window.location.href = "/search/" + searchtag;
    },
    mentorPage() {
      this.$router.push("/mentorpage");
    },
  },
};
</script>

<style></style>
