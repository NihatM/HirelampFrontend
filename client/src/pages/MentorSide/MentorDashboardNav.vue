<template>
  <div class="flex px-6 py-4 md:px-32 md:space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden hidden md:block">
      <div class="">
        <mentorDashboard />
      </div>
    </div>
    <div class="w-full md:w-2/3 shadow-xl rounded-xl">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
// import axios from "axios";
import mentorDashboard from "../../components/MentorDashboard/mentorDashboard.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "MentorDashboardNav",

  components: { mentorDashboard, Footer },
};
</script>

<style></style>
