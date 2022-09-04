<template>
  <body class="pt-2">
    <div class="px-6 md:px-32">
      <nav class="py-3 md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-blue-600 font-bold">
            <img
              class="relative w-1/4 h-1/4 md:w-4/6 md:h-4/6 lg:w-3/6 lg:h-3/6 xl:w-3/12 xl:h-3/12"
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

          <li class="nav-item text-left">
            <a class="nav-link" href="#"
              ><router-link
                to="/about"
                @click="showMenu = !showMenu"
                class="text-gray-800 hover:text-custom-blue truncate"
                >About us</router-link
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

            <!-- <button id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown right <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
<div id="dropdownRight" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton" >
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div> -->
          </li>
        </ul>
      </nav>
    </div>
    <router-view />
  </body>
</template>
<script>
// import firebase from "firebase/app";
import firebase from "../utilities/firebase";

export default {
  props: { isLoggedIn: Boolean },

  data() {
    return {
      showMenu: false,
      // isLoggedIn: false,
    };
  },

  // watch: {
  //   if($router.push()){
  //     this.showMenu = false;
  //   }
  // },

  methods: {
    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
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
