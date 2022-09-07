<template>
  <div
    class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1 md:px-32"
  >
    <div
      class="hidden md:visible w-full md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative md:flex flex-col items-center justify-center"
    >
      <img src="../assets/login.svg" alt="" class="w-10/12 pb-8" />
      <p class="bt-md">Welcome aboard my friend</p>
      <p class="bt-book">just a couple of clicks and we start</p>
    </div>
    <div
      class="w-full xl:w-9/12 align-middle flex flex-col justify-center items-center"
    >
      <div class="md:shadow-xl rounded-2xl w-full md:w-8/12 px-14 bg-white">
        <div class="flex flex-col">
          <p class="bt-medium pb-11 pt-8">Register</p>

          <div class="">
            <!-- <div class="relative mb-6">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div> -->
            <div class="relative">
              <input
                type="text"
                class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                placeholder="Name & Surname"
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

            <div class="relative pb-10">
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

            <button
              class="h-11 w-full rounded-full text-gray-50 bg-black hover:shadow-lg duration-300 bt-book px-2 py-1.5"
            >
              Register
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
            <div class="flex justify-center items-center">
              <p class="py-6 px-2.5">Already have an account?</p>
              <a
                href="/login"
                class="underline underline-offset-2 text-custom-blue font-bold"
                >Login</a
              >
            </div>
            <div class="pb-7">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd319wsfw2pg9Vt7hQyVOaDSIQQ-OIqfKJYNLH-_16xFKgX-Q/viewform"
                target="_blank"
                class="pb-7 text-custom-blue font-bold"
                >Want to be a mentor?</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500 shadow-xl w-full h-screen overflow-hidden md:pt-10"
    >
      <div class="md:flex w-full justify-center">
        <div class="w-full md:w-1/2 py-3 px-5 md:px-10">
          <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
            <p>Enter your information to register</p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-4">
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="firstName"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div class="w-1/2 px-3 mb-4">
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="lastName"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
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
              <div class="w-full px-3 mb-4">
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

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Confirm Password"
                    required
                    v-model="confirmPassword"
                    :rules="[comparePasswords]"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  @click="register"
                  type="submit"
                  value="Register"
                  class="block w-full shadow-md border-3 border-blue-400 max-w-xs mx-auto bg-custom-blue hover:bg-blue-500 focus:bg-blue-700 text-white rounded-2xl px-3 py-2 font-semibold"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-2">
                <button
                  class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                >
                  <a href="/login"
                  >Already have an account? Login</a>
                </button>
              </div>
            </div>
             <div class="flex -mx-3">
              <div class="w-full px-3 mb-2">
                <button
                  class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd319wsfw2pg9Vt7hQyVOaDSIQQ-OIqfKJYNLH-_16xFKgX-Q/viewform"
                  target="_blank"
                  >Want to be a mentor? Fill the form</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";

export default {
  name: "HomePage",
  data() {
    return {
      toastMessage: "",
      toastColor: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordFieldType: "password",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const email = ref("");
    //  const password = ref("");
    const role = ref("");
    const confirmPassword = ref("");

    return {
      role,
      toast,
      router,
      email,
      //  password,
      confirmPassword,
    };
  },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
  },

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
      this.toast.success("Account created successfully!", {
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

    register() {
      if (this.password !== this.confirmPassword) {
        this.showErrorToast("Passwords do not match");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.showToast();
            this.register = true;
            this.createUser();
            this.$root.uid = user.uid;
            this.$router.push("/mentorpage");
          })
          .catch((error) => {
            this.showErrorToast(error.message);
          });
      }
    },
    createUser() {
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userID: this.$root.uid,
        role: this.role,
      };
      axios
        .post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentees/",
          user
        )
        .then(() => {
          this.router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.response.data.message);
        });
    },

    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
