<template>
  <body class="justify-center items-center overflow-hidden">
    <div
      :class="$route.path === '/' ? 'bg-light-blue' : 'bg-white'"
      class="px-6 pt-2 md:px-32"
    >
      <nav class="py-3 md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-blue-600 font-bold md:max-w-xs">
            <img
              class="w-1/4 h-1/4 md:w-3/6 md:h-3/6 lg:w-2/6 lg:h-1/6 xl:w-3/12 xl:h-3/12"
              src="../../public/hirelamp_logo_navbar.png"
              alt="Hirelamp Logo"
          /></router-link>
          <!-- Mobile menu button -->

          <!-- v-if="this.$store.state.userType === 'candidate'" -->
          <div
            v-if="showDashboardIcon"
            @click="showDashboard = !showDashboard && !showMenuMobile"
            class="flex md:hidden px-4"
          >
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <img src="../assets/mobileDashboard.svg" alt="" class="w-9 h-9" />
            </button>
          </div>

          <div @click="showMenuMobile = !showMenuMobile" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <img src="../assets/navbarToggle.svg" alt="" class="w-9 h-9" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->

        <ul
          :class="showDashboard ? 'flex shadow-xl rounded-b-2xl' : 'hidden '"
          class="flex-col mt-8 space-y-2 md:align-middle md:space-y-0 md:items-center md:mt-0 md:px-0 text-sm lg:text-lg 2xl:text-lg flex md:hidden"
        >
          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                :to="`${newRoute}/aboutme`"
                @click="showDashboard = !showDashboard"
                class="text-gray-800 hover:text-custom-blue bt-navbar flex"
              >
                <img
                  src="../assets/aboutMe.svg"
                  alt=""
                  class="h-6 w-6 mr-4 align-middle"
                />

                About me</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                :to="`${newRoute}/sessions`"
                @click="showDashboard = !showDashboard"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar flex"
              >
                <img
                  src="../assets/dashboardSessions.svg"
                  alt=""
                  class="h-6 w-6 mr-4 align-middle"
                />
                Sessions</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                :to="`${newRoute}/security`"
                @click="showDashboard = !showDashboard"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar flex"
              >
                <img
                  src="../assets/dashboardSecurity.svg"
                  alt=""
                  class="h-6 w-6 mr-4 align-middle fill-custom-blue"
                />Security</router-link
              >
            </a>
          </li>
          <li class="nav-item text-left">
            <a
              class="nav-link text-gray-800 hover:text-custom-blue truncate bt-navbar flex"
              href="#"
              @click="
                handleSignOut();
                showDashboard = !showDashboard;
              "
              ><img
                src="../assets/logout.svg"
                alt=""
                class="h-6 w-6 mr-4 align-middle"
              />Logout
            </a>
          </li>
        </ul>

        <!-- navbar -->

        <ul
          v-if="hideMenuMobile"
          class="md:flex md:align-middle md:space-y-0 md:flex-row md:items-center md:mt-0 md:px-0 text-sm lg:text-lg 2xl:text-lg"
        >
          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue bt-navbar"
                >Home</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/mentors"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar"
                >Our mentors</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left" v-if="isLoggedIn == false">
            <a class="nav-link" href="#"
              ><router-link
                to="/signup"
                @click="showMenu = !showMenu"
                class="text-custom-blue hover:text-white hover:bg-custom-blue duration-300 border-2 border-custom-blue px-4 py-1.5 rounded-full"
                >Register</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left" v-if="isLoggedIn == false">
            <a class="nav-link pr-0" href="#"
              ><router-link
                to="/login"
                @click="showMenu = !showMenu"
                class="hover:bg-transparent hover:text-custom-blue text-gray-50 duration-300 border-2 border-custom-blue bg-custom-blue px-4 py-1.5 rounded-full"
                >Login</router-link
              >
            </a>
          </li>

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="relative inline-block text-left">
            <div class="w-full pl-3">
              <button
                v-if="isLoggedIn"
                @click="
                  showMenu = !showMenu;
                  navigateToDashboard();
                "
                type="button"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar flex flex-row justify-center align-middle content-center items-center"
              >
                <!-- <img class="h-10 w-10 rounded-full" :src="profileImg" alt="" />
                <span class="pl-2 pt-1">{{ this.fullName }}</span> -->
                <p>Profile</p>
              </button>
            </div>
          </div>
        </ul>

        <ul
          :class="showMenuMobile ? 'flex shadow-xl rounded-b-2xl' : 'hidden '"
          class="flex-col mt-8 space-y-2 shadow-md rounded-b-2xl text-sm"
        >
          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/"
                @click="showMenuMobile = !showMenuMobile"
                class="text-gray-800 hover:text-custom-blue bt-navbar"
                >Home</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/mentor"
                @click="showMenuMobile = !showMenuMobile"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar"
                >Our mentors</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left" v-if="isLoggedIn == false">
            <a class="nav-link" href="#"
              ><router-link
                to="/signup"
                @click="showMenuMobile = !showMenuMobile"
                class="text-custom-blue hover:text-white hover:bg-custom-blue duration-300 border-2 border-custom-blue px-4 py-1.5 rounded-full"
                >Register</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left" v-if="isLoggedIn == false">
            <a class="nav-link pr-0 py-3 md:py-0" href="#"
              ><router-link
                to="/login"
                @click="showMenuMobile = !showMenuMobile"
                class="hover:bg-transparent hover:text-custom-blue text-gray-50 duration-300 border-2 border-custom-blue bg-custom-blue px-4 py-1.5 rounded-full"
                >Login</router-link
              >
            </a>
          </li>

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            v-if="isLoggedIn == true"
            class="relative inline-block text-left px-3 pb-3"
          >
            <div class="w-full">
              <button
                v-if="isLoggedIn"
                @click="
                  showMenuMobile = !showMenuMobile;
                  navigateToDashboard();
                "
                type="button"
                class="text-gray-800 hover:text-custom-blue truncate bt-navbar flex flex-row justify-center align-middle content-center items-center"
              >
                <img class="h-10 mr-4 rounded-full" :src="profileImg" alt="" />

                <!-- <p v-if="this.fullname !== null">
                  {{ this.fullName }}
                </p>
                <p v-if="this.fullname == null">Profile</p> -->
                <p>Profile</p>
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </div>
    <router-view :key="$route.fullPath" />
  </body>
</template>
<script>
// import firebase from "firebase/app";
import firebase from "../utilities/firebase";
import axios from "axios";
export default {
  props: { isLoggedIn: Boolean },
  data() {
    return {
      showMenu: false,
      // fullName: this.fullName,
      showDropdown: false,
      candData: [],
      profileImg: this.profileImg,
      showDashboard: false,
      showMenuMobile: false,
      hideMenuMobile: false,
      showDashboardIcon: false,
      userID: this.userID,
    };
  },

  //watch if the current page is dashboard then show the dashboard icon
  watch: {
    // if the current page is welcome page then make background color blue

    $route(to) {
      if (
        to.path == "/dashboard/aboutme" ||
        to.path == "/dashboard/sessions" ||
        to.path == "/dashboard/security" ||
        to.path == "/mentorDashboard/aboutme" ||
        to.path == "/mentorDashboard/sessions" ||
        to.path == "/mentorDashboard/security" ||
        to.path == "/mentorFeedback"
      ) {
        this.showDashboardIcon = true;
      } else {
        this.showDashboardIcon = false;
      }
      // if the screen is scrolled by one page then show the dashboard icon
    },
  },

  created() {
    // this.isLoggedInFunction();
  },

  beforeMount() {},

  //what if screen is mobile size then show the mobile menu
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.getCandidateUserID();
    this.handleResize();

    // this.getCandidateUserID();
  },
  methods: {
    async getCandidateUserID() {
      localStorage.getItem("userID");
      this.userID = localStorage.getItem("userID");
      console.log(this.userID);
      localStorage.getItem("isMentor");

      this.isMentor = localStorage.getItem("isMentor");
      console.log(localStorage.getItem("isMentor"));
      console.log(this.isMentor);
      if (this.isMentor == "true") {
        this.newRoute = "/mentorDashboard";
      } else if (this.isMentor == "false") {
        this.newRoute = "/dashboard";
      }
      // this.changeRoute();
    },

    isLoggedInFunction() {
      console.log(localStorage.getItem("fullName"));
      if (localStorage.getItem("fullName") != null) {
        console.log("logged in");
        this.fullName = localStorage.getItem("fullName");
        this.usernameDisplayed = true;
        localStorage.setItem("usernameDisplayed", this.usernameDisplayed);
        this.mentorID = localStorage.getItem("userID");
        axios
          .get(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
              this.mentorID
          )
          .then((response) => {
            this.profileImg = response.data.profileImg;
            // console.log(this.profileImg);
          });
      }
    },
    //if showMenu is open then close it when the screen is resized
    handleResize() {
      if (window.innerWidth <= 768) {
        this.showMenuMobile = false;
        this.showMenu = false;
      } else {
        this.showMenuMobile = false;
        this.hideMenuMobile = true;
      }
      //prevent opening the menu and dashboard at the same time
      if (this.showDashboard == true) {
        this.showMenuMobile = false;
      }
    },
    // if the page is dashboard then show the dashboard menu
    showDashboardMenu() {
      if (
        this.$route.path == "/dashboard/aboutme" ||
        this.$route.path == "/mentorDashboard/aboutme"
      ) {
        this.showDashboard = true;
        this.showDashboardIcon = true;
      } else {
        this.showDashboard = false;
        this.showDashboardIcon = false;
      }
    },

    navigateToDashboard() {
      // check if isMentor true then send to mentor dashboard else send to candidate dashboard
      localStorage.getItem("isMentor") == "true"
        ? this.$router.push("/mentorDashboard/aboutme")
        : this.$router.push("/dashboard/aboutme");

      console.log(localStorage.getItem("isMentor"));
    },

    displayUsername() {
      //if the current page is MentorPage then show the user name
      if (this.isLoggedIn == true) {
        localStorage.getItem("fullName")
          ? (this.fullName = localStorage.getItem("fullName"))
          : null;
        // console.log(this.fullName);
      }
    },
    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("fullName");
            localStorage.removeItem("userID");
            localStorage.removeItem("isMentor");
            console.log("sign out");
            console.log(localStorage.getItem("isMentor"));

            this.$router.push("/");
            console.log("Sign out successful");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
