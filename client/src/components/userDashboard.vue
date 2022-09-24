<template>
  <body>
    <div class="px-4">
      <div class="flex justify-center align-middle items-center p-4">
        <img
          src="../assets/Etibar_Huseynli.jpeg"
          alt=""
          class="rounded-full h-32 w-32"
        />
      </div>
      <div>
        <p>{{ candDatas.firstName }} {{ candDatas.lastName }}</p>
      </div>
      <div class="flex flex-col text-left divide-y-2 py-12">
        <router-link class="flex align-middle py-2" to="/dashboard/aboutme">
          <img
            src="../assets/aboutMe.svg"
            alt=""
            class="h-6 w-6 mr-4 align-middle"
          />
          <p>About Me</p>
        </router-link>
        <router-link class="flex align-middle py-2" to="/dashboard/sessions">
          <p class="flex align-middle active:text-custom-blue">Sessions</p>
        </router-link>
        <router-link class="flex align-middle py-2" to="/dashboard/payment">
          <p class="flex align-middle hover:text-custom-blue">Payment</p>
        </router-link>
        <router-link to="/dashboard/security" class="flex align-middle py-2">
          <p class="flex align-middle">Security</p>
        </router-link>
        <router-link
          to="/dashboard/termsconditions"
          class="flex align-middle py-2"
        >
          <p class="flex align-middle">Terms and conditions</p>
        </router-link>
        <p class="flex align-middle">Logout</p>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

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

  components: {},

  methods: {
    // async getCandDatas() {
    //   axios
    //     .get(
    //       "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/"
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       this.candDatas = response.data;
    //       this.isLoading = false;
    //       localStorage.getItem("userID")
    //         ? (this.userID = localStorage.getItem("userID"))
    //         : null;
    //       console.log(this.userID);
    //       this.getCandidateData(this.userID);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

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
