<template>
  <div
    class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1 md:px-32"
  >
    <div
      class="hidden md:visible w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:mb-14 xl:mb-0 relative md:flex flex-col items-center justify-center"
    >
      <img src="../assets/login.svg" alt="" class="w-10/12 pb-4" />
      <p class="bt-md">Welcome back my friend</p>
      <p class="bt-book">just a couple of clicks and we start</p>
    </div>
    <div
      class="w-full xl:w-9/12 align-middle flex flex-col justify-center items-center"
    >
      <div class="md:shadow-xl rounded-2xl w-full md:w-8/12 px-14 bg-white">
        <div class="flex flex-col">
          <p class="bt-medium pb-11 pt-8">Log in</p>

          <div class="">
            <!-- <div class="relative mb-6">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div> -->
            <div class="relative">
              <input
                v-model="email"
                type="email"
                class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                placeholder="Email"
              />

              <button
                type="submit"
                class="absolute top-0 right-0 py-2.5 px-4 h-12 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <img src="../assets/Message.svg" alt="" />
              </button>
            </div>

            <div class="py-2"></div>

            <div class="relative">
              <input
                :type="passwordFieldType"
                v-model="password"
                id="floating_outlined"
                class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                placeholder="Password"
              />

              <button
                @click="showPassword"
                type="password"
                class="absolute top-0 right-0 py-2.5 px-4 h-12 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <img src="../assets/Show.svg" alt="" />
              </button>
            </div>
            <a
              href="/forgotpassword"
              class="flex justify-end pt-2 pb-8 text-indigo-700 underline underline-offset-2"
              >Forgot password?</a
            >

            <button
              @click="login()"
              class="h-11 w-full rounded-full text-gray-50 bg-black hover:shadow-lg duration-300 bt-book px-2 py-1.5"
            >
              Login
            </button>

            <div class="relative flex py-2.5 items-center px-20">
              <div class="flex-grow border-t border-gray-200"></div>
              <span class="flex-shrink mx-2 text-gray-400">Or</span>
              <div class="flex-grow border-t border-gray-200"></div>
            </div>

            <button
              @click="googleSignIn()"
              class="flex justify-center items-center h-11 w-full rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 duration-300 bt-book px-2 py-1.5"
            >
              <img src="../assets/Google.svg" alt="" class="px-2.5" />
              <p>Google</p>
            </button>
            <div class="flex justify-center items-center pb-8">
              <p class="py-6 px-2.5">Have no account yet?</p>
              <a
                href="/signup"
                class="underline underline-offset-2 text-custom-blue"
                >Register</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      role: "",
      toastMessage: "",
      toastColor: "",
      password: "",
      passwordFieldType: "password",
      email: "",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    //const email = ref("");
    // const password = ref("");
    const errMsg = ref("");

    return {
      toast,
      router,
      //email,
      //password
      errMsg,
    };
  },

  components: {},

  methods: {
    showErrorToast(message) {
      this.toast.error(message, {
        position: "top-right",
        duration: 3000,
        action: {
          text: "Dismiss",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },

    showToast() {
      this.toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          console.log(token); // Token
          console.log(user); // User that was authenticated
          this.register = true;
          this.createUser();
          this.$root.uid = user.uid;

          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.message);
        });
    },

    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },

    login() {
      console.log(this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          localStorage.setItem("userID", this.$root.uid);
          console.log(this.$root.uid);
          localStorage.setItem("userEmail", this.email);
          this.showToast();
          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.message);
        });
    },

    // getUserData(userID) {
    //   axios.get(
    //     "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
    //       userID +
    //       "/"
    //   );
    // },
  },
};
</script>

<style></style>
