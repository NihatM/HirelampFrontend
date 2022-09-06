<template>
  <!-- component -->

  <div
    class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1 md:px-32"
  >
    <div
      class="hidden md:visible w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative md:flex flex-col items-center justify-center"
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
              class="h-11 w-full rounded-full text-gray-50 bg-black hover:bg-gray-50 hover:text-black duration-300 bt-book px-2 py-1.5"
            >
              Login
            </button>

            <p class="py-3">or</p>

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

  <!-- <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500  shadow-sm w-full "
    >
      <div class="md:flex w-full">
  
        <div
          class="hidden md:visible md:block w-1/2 py-10 px-10 justify-center items-center align-middle"
        >
          <img
            src="../assets/SignUp.svg"
            alt=""
            class="h-100 w-100 md:h-50 md:w-50 xl:w-50 xl:h-50 lg:w-50 lg:h-50"
          />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
            <p>Enter your information to login</p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-10">
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Email"
                    required
                    v-model="email"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-10">
               
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
            </div>
            <p v-if="errMsg">{{ errMsg }}</p>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  @click="login"
                  type="submit"
                  value="Login"
                  class="block w-full shadow-md border-3 border-blue-400 max-w-xs mx-auto bg-custom-blue hover:bg-blue-500 focus:bg-blue-700 text-white rounded-2xl px-3 py-2 font-semibold"
                >
                  LOGIN
                </button>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                >
                  <a href="/signupselection">Don't have an account? Register</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer /> -->
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "HomePage",
  data() {
    return {
      role: "",
      toastMessage: "",
      toastColor: "",
      password: "",
      passwordFieldType: "password",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const email = ref("");
    // const password = ref("");
    const errMsg = ref("");

    return {
      toast,
      router,
      email,
      //password
      errMsg,
    };
  },

  components: {},

  // methods: {
  //     registerUser() {
  //     firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(this.email, this.password)
  //         .then(() => {
  //         this.showToast = true;
  //         this.toastMessage = "Registration successful";
  //         this.toastColor = "green";
  //         this.register = true;
  //         })
  //         .catch(error => {
  //         this.showToast = true;
  //         this.toastMessage = error.message;
  //         this.toastColor = "red";
  //         });
  //     },
  //     showToast() {
  //     this.showToast = true;
  //     this.toastMessage = "Registration successful";
  //     this.toastColor = "green";
  //     },
  // },

  // computed: {
  //   comparePasswords() {
  //     return this.password !== this.comparePasswords
  //       ? "Passwords do not match"
  //       : true;
  //   },
  // },

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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.showToast();
          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.message);
          // switch (error.message) {
          //   case "auth/user-not-found":
          //     error.message = "User not found";
          //     break;
          //   case "auth/wrong-password":
          //     error.message = "Wrong password";
          //     break;
          //   case "auth/invalid-email":
          //     error.message = "Invalid email";
          //     break;
          //   case "auth/user-disabled":
          //     error.message = "User disabled";
          //     break;
          //   case "auth/too-many-requests":
          //     error.message = "Too many requests";
          //     break;
          //   case "auth/email-already-in-use":
          //     error.message = "Email already in use";
          //     break;
          //   case "auth/weak-password":
          //     error.message = "Weak password";
          //     break;
          //   default:
          //     error.message = "Something went wrong";
          //     break;
          // }
        });
      // .catch((error) => {
      //   this.$toast.open({
      //     message: error.message,
      //     type: "error",
      //     position: "top-right",
      //     duration: 3000,
      //   });
      // });
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
