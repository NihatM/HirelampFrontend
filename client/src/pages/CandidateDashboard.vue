<template>
  <div class="flex px-6 py-4 md:px-32 space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden">
      <div class="">
        <userDashboard />
      </div>
    </div>
    <div class="w-2/3 shadow-xl rounded-xl">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import userDashboard from "../components/userDashboard.vue";
import Footer from "../components/Footer.vue";
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
    userDashboard,
    // aboutMe,
  },

  methods: {
    async getCandidateUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
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
          console.log(response);
          this.candDatas = response.data;
          console.log(this.candDatas);
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
