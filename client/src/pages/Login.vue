<template>
  <body class="">
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
        <div class="flex justify-end w-full md:w-8/12">
          <button
            class="bg-custom-blue text-white px-2 py-1.5 rounded-t-xl shadow-2xl bt-placeholder hover:bg-blue-500 duration-300"
          >
            <a href="/mentorLogin" class="font-bold hover:text-gray-50"
              >Login as a mentor</a
            >
          </button>
        </div>
        <div
          class="md:shadow-xl rounded-b-2xl rounded-tl-2xl w-full md:w-8/12 px-14 bg-white"
        >
          <div class="flex flex-col">
            <p class="bt-medium pb-11 pt-8">Log in</p>

            <div class="">
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
  </body>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";
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
      isMentor: false,
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
        autoClose: 3000,
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
          this.isMentor = false;
          console.log(this.isMentor);
          localStorage.setItem("isMentor", this.isMentor);
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
          this.isMentor = false;
          localStorage.setItem("isMentor", this.isMentor);
          this.showToast();
          this.getUsername(this.$root.uid);
        })
        .catch((error) => {
          this.showErrorToast(error.message);
          if (
            error.message === "auth/account-exists-with-different-credential"
          ) {
            this.showErrorToast("Email already exists");
          } else if (error.message === "auth/invalid-email") {
            this.showErrorToast("Invalid email");
          } else if (error.message === "auth/user-disabled") {
            this.showErrorToast("User disabled");
          } else if (error.message === "auth/user-not-found") {
            this.showErrorToast("User not found");
          } else if (error.message === "auth/wrong-password") {
            this.showErrorToast("Wrong password");
          } else if (error.message === "auth/weak-password") {
            this.showErrorToast("Weak password");
          } else if (error.message === "auth/email-already-in-use") {
            this.showErrorToast("Email already in use");
          } else if (error.message === "auth/operation-not-allowed") {
            this.showErrorToast("Operation not allowed");
          } else if (error.message === "auth/invalid-credential") {
            this.showErrorToast("Invalid credential");
          } else if (error.message === "auth/invalid-verification-code") {
            this.showErrorToast("Invalid verification code");
          } else if (error.message === "auth/invalid-verification-id") {
            this.showErrorToast("Invalid verification id");
          } else if (error.message === "auth/missing-verification-code") {
            this.showErrorToast("Missing verification code");
          } else if (error.message === "auth/missing-verification-id") {
            this.showErrorToast("Missing verification id");
          } else if (error.message === "auth/phone-number-already-exists") {
            this.showErrorToast("Phone number already exists");
          } else if (error.message === "auth/invalid-phone-number") {
            this.showErrorToast("Invalid phone number");
          } else if (error.message === "auth/quota-exceeded") {
            this.showErrorToast("Quota exceeded");
          } else if (error.message === "auth/captcha-check-failed") {
            this.showErrorToast("Captcha check failed");
          } else if (error.message === "auth/invalid-app-credential") {
            this.showErrorToast("Invalid app credential");
          } else if (error.message === "auth/invalid-app-id") {
            this.showErrorToast("Invalid app id");
          } else error.message === "Something went wrong";
          this.showErrorToast;
        });
    },

    getUsername(userID) {
      //get username
      console.log(userID);

      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            userID +
            "/"
        )
        .then((response) => {
          console.log(response.data);
          this.fullName =
            response.data.firstName + " " + response.data.lastName;
          localStorage.setItem("fullName", this.fullName);
          console.log(this.fullName);
          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
