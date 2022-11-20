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
        <router-link class="flex align-middle py-3" :to="`${newRoute}/aboutme`">
          <img
            src="../assets/aboutMe.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p>About Me</p>
        </router-link>
        <router-link
          class="flex align-middle py-3"
          :to="`${newRoute}/sessions`"
        >
          <img
            src="../assets/dashboardSessions.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle active:text-custom-blue">Sessions</p>
        </router-link>
        <router-link
          v-if="isMentor == true"
          class="flex align-middle py-4"
          :to="`${newRoute}/payment`"
        >
          <img
            src="../assets/dashboardPayment.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle hover:text-custom-blue">Payment</p>
        </router-link>
        <router-link
          :to="`${newRoute}/security`"
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
          @click="handleSignOut()"
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
      isMentor: false,
    };
  },
  mounted() {
    this.getCandidateUserID();
  },
  // beforeUnmount() {
  //   localStorage.removeItem("userEmail");
  //   localStorage.removeItem("userFullname");
  //   localStorage.removeItem("userID");
  // },

  components: {},

  methods: {
    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.isLoggedIn = false;
            localStorage.removeItem("userEmail");
            localStorage.removeItem("fullName");
            localStorage.removeItem("userID");
            localStorage.removeItem("isMentor");

            // console.log(localStorage.getItem("userEmail"));

            console.log(localStorage.getItem("fullName"));
            console.log(localStorage.getItem("userID"));
            console.log(localStorage.getItem("isMentor"));

            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    async getCandidateUserID() {
      localStorage.getItem("userID");
      this.userID = localStorage.getItem("userID");
      console.log(this.userID);
      localStorage.getItem("isMentor");

      this.isMentor = localStorage.getItem("isMentor");
      console.log(localStorage.getItem("isMentor"));
      console.log(this.isMentor);
      if (this.isMentor == "true") {
        this.getMentorData(this.userID);
        this.newRoute = "/mentorDashboard";
      } else if (this.isMentor == "false") {
        this.getCandidateData(this.userID);
        this.newRoute = "/dashboard";
      }
      // this.changeRoute();
    },

    // changeRoute() {
    //   if (localStorage.getItem("isMentor") == "true") {
    //     // navigate to mentorDashboard instad of dashboard
    //     this.newRoute = "/mentorDashboard";
    //   } else {
    //     this.newRoute = "/dashboard";
    //   }
    // },
    async getCandidateData(userID) {
      console.log(userID);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            userID +
            "/"
        )
        .then((response) => {
          this.candDatas = response.data;
          console.log(this.candDatas);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getMentorData(userID) {
      console.log(userID);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            userID +
            "/"
        )
        .then((response) => {
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
