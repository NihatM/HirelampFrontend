<template>
  <body>
    <div class="px-4">
      <div class="flex justify-center align-middle items-center p-4">
        <img
          :src="candDatas.profileImg"
          alt=""
          class="rounded-full h-32 w-32"
        />
      </div>
      <div>
        <p>{{ candDatas.firstName }} {{ candDatas.lastName }}</p>
        <p class="text-gray-500">{{ candDatas.email }}</p>
      </div>
      <div class="flex flex-col text-left bt-dash divide-y-2 py-12">
        <router-link
          class="flex align-middle py-3"
          to="/mentorDashboard/aboutme"
        >
          <img
            src="../assets/aboutMe.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p>About Me</p>
        </router-link>
        <router-link
          class="flex align-middle py-3"
          to="/mentorDashboard/sessions"
        >
          <img
            src="../assets/aboutMe.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle active:text-custom-blue">Sessions</p>
        </router-link>
        <!-- <router-link class="flex align-middle py-4" to="/dashboard/payment">
          <img
            src="../assets/dashboardPayment.svg"
            alt=""
            class="h-6 w-6 mr-4 align-middle"
          />
          <p class="flex align-middle hover:text-custom-blue">Payment</p>
        </router-link> -->
        <router-link
          to="/mentorDashboard/security"
          class="flex align-middle py-3"
        >
          <img
            src="../assets/dashboardSecurity.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle">Security</p>
        </router-link>
        <!-- <router-link
          to="/dashboard/termsconditions"
          class="flex align-middle py-4"
        >
          <p class="flex align-middle">Terms and conditions</p>
        </router-link> -->
        <button
          @click="handleSignOut"
          :isLoggedIn="isLoggedIn"
          class="flex py-3"
        >
          <img
            src="../assets/logout.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="cursor-pointer flex align-middle">Logout</p>
        </button>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import firebase from "../utilities/firebase";

export default {
  name: "CandidateDashboard",

  data() {
    return {
      candDatas: "",
      isLoggedIn: true,
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

    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.isLoggedIn = false;
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userFullname");
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

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
