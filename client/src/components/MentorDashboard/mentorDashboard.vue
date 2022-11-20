<template>
  <body>
    <div class="px-4">
      <div class="flex justify-center align-middle items-center p-4">
        <img
          :src="mentorDatas.profileImg"
          alt=""
          class="rounded-full h-32 w-32"
        />
      </div>
      <div>
        <p>{{ mentorDatas.firstName }} {{ mentorDatas.lastName }}</p>
        <p class="text-gray-500">{{ mentorDatas.email }}</p>
      </div>
      <div class="flex flex-col text-left bt-dash divide-y-2 py-12">
        <router-link
          v-on:click="toggleTabs(1)"
          class="flex align-middle py-3"
          to="/mentorDashboard/aboutme"
          v-bind:class="{
            'text-gray-900   ': openTab !== 1,
            'text-custom-blue  ': openTab === 1,
          }"
        >
          <img
            src="../../assets/aboutMe.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p>About Me</p>
        </router-link>
        <router-link
          v-on:click="toggleTabs(2)"
          class="flex align-middle py-3"
          to="/mentorDashboard/sessions"
          v-bind:class="{
            'text-gray-900   ': openTab !== 2,
            'text-custom-blue  ': openTab === 2,
          }"
        >
          <img
            src="../../assets/dashboardSessions.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle">Sessions</p>
        </router-link>
        <router-link
          v-on:click="toggleTabs(3)"
          class="flex align-middle py-3"
          to="/mentorDashboard/payment"
          v-bind:class="{
            'text-gray-900   ': openTab !== 3,
            'text-custom-blue  ': openTab === 3,
          }"
        >
          <img
            src="../../assets/dashboardPayment.svg"
            alt=""
            class="h-5 w-5 mr-4 align-middle"
          />
          <p class="flex align-middle">Payment</p>
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
          v-on:click="toggleTabs(4)"
          to="/mentorDashboard/security"
          class="flex align-middle py-3"
          v-bind:class="{
            'text-gray-900   ': openTab !== 4,
            'text-custom-blue  ': openTab === 4,
          }"
        >
          <img
            src="../../assets/dashboardSecurity.svg"
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
            src="../../assets/logout.svg"
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
import firebase from "../../utilities/firebase";

export default {
  name: "MentorDashboard",

  data() {
    return {
      mentorDatas: "",
      isLoggedIn: true,
      openTab: 1,
    };
  },
  mounted() {
    this.getMentorProfileID();
  },
  // beforeUnmount() {
  //   localStorage.removeItem("userEmail");
  //   localStorage.removeItem("userFullname");
  //   localStorage.removeItem("userID");
  // },

  components: {},

  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },

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

            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    async getMentorProfileID() {
      localStorage.getItem("userID");
      this.userID = localStorage.getItem("userID");
      console.log(this.userID);
      this.getMentorProfile(this.userID);
    },

    async getMentorProfile(userID) {
      console.log(userID);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            userID +
            "/"
        )
        .then((response) => {
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);
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
