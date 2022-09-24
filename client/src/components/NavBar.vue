<template>
  <body class="pt-2">
    <div class="px-6 md:px-32">
      <nav class="py-3 md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-blue-600 font-bold">
            <img
              class="relative w-1/4 h-1/4 md:w-3/6 md:h-3/6 lg:w-1/6 lg:h-1/6 xl:w-3/12 xl:h-3/12"
              src="../../public/hirelamp_logo_navbar.png"
          /></router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-2 md:flex md:space-y-0 md:flex-row md:items-center md:mt-0 md:px-0 text-sm lg:text-lg 2xl:text-lg"
        >
          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue"
                >Home</router-link
              >
            </a>
          </li>

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/mentorpage"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue truncate"
                >Our mentors</router-link
              >
            </a>
          </li>

          <!-- <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/about"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue truncate"
                >About us</router-link
              >
            </a>
          </li> -->

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
          <!-- 
          <li class="nav-item text-left" v-if="isLoggedIn">
            <a class="nav-link pr-0" href="#"
              ><router-link
                v-if="isLoggedIn"
                @click="handleSignOut"
                to="/"
                class="text-gray-800 hover:text-custom-blue"
                >Logout</router-link
              >
            </a>
          </li> -->

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="showDropdown = !showDropdown"
                type="button"
                class="inline-flex truncate w-full justify-center rounded-md px-4 py-2 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ this.fullName }}
                <!-- Heroicon name: mini/chevron-down -->
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              :class="showDropdown ? 'block' : 'hidden'"
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="/dashboard"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Dashboard</a
                >
                <a
                  href=""
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Logout</a
                >

                <form method="POST" action="#" role="none">
                  <button
                    @click="handleSignOut()"
                    type="submit"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- <li class="nav-item text-left" v-if="isLoggedIn">
            <a class="nav-link pr-0" href="#"
              ><router-link
                v-if="isLoggedIn"
                @click="handleSignOut"
                to="/"
                class="text-gray-800 hover:text-custom-blue truncate"
                >{{ this.fullName }}</router-link
              >
            </a>
          </li> -->
        </ul>
      </nav>
    </div>
    <router-view />
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
      fullName: this.fullName,
      showDropdown: false,
    };
  },

  beforeMount() {
    this.displayUsername();
    this.getCandidateUserID();
  },

  methods: {
    //  firebase.auth().onAuthStateChanged((user) => {
    //       if (user) {
    //         this.fullName = user.displayName;
    //         this.isLoggedIn = true;
    //       } else {
    //         this.isLoggedIn = false;
    //       }
    //     });

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

          this.fullName =
            this.candDatas.firstName + " " + this.candDatas.lastName;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    displayUsername() {
      localStorage.getItem("userFullname")
        ? (this.fullName = localStorage.getItem("userFullname"))
        : null;
    },

    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userFullname");
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
