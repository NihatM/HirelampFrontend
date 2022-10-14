<template>
  <div class="flex px-6 py-4 md:px-32 md:space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden hidden md:block">
      <div class="">
        <mentorDashboard />
      </div>
    </div>
    <!-- <div class="w-1/3 rounded-xl shadow-md overflow-hidden visiblle md:hidden">
      <div class="">
        <userDashboardMobile />
      </div>
    </div> -->
    <div class="w-full md:w-2/3 shadow-xl rounded-xl">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import mentorDashboard from "../../components/mentorDashboard.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "CandidateDashboard",

  data() {
    return {
      candDatas: "",
    };
  },
  beforeMount() {
    this.getCandidateUserID();
  },

  components: {
    Footer,
    mentorDashboard,
    // aboutMe,
  },

  methods: {
    async getCandidateUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      this.getCandidateData(this.userID);
    },

    async getCandidateData(userID) {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            userID +
            "/"
        )
        .then((response) => {
          this.candDatas = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
