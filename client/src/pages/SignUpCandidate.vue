<template>
  <body class="">
    <div
      class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1 px-4 md:px-32"
    >
      <div
        class="hidden md:visible w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:mb-14 xl:mb-0 relative md:flex flex-col items-center justify-center"
      >
        <img src="../assets/login.svg" alt="" class="w-8/12 pb-8" />
        <p class="bt-md">Welcome aboard my friend</p>
        <p class="bt-book">just a couple of clicks and we start</p>
      </div>

      <div
        class="w-full xl:w-9/12 align-middle flex flex-col justify-center items-center"
      >
        <div class="flex justify-end w-full md:w-8/12">
          <button
            class="bg-custom-blue text-white px-2 py-1.5 rounded-t-xl shadow-2xl bt-placeholder hover:bg-blue-500 duration-300"
          >
            <a href="/mentorRegister" class="font-bold hover:text-gray-50"
              >Register as a mentor</a
            >
          </button>
        </div>
        <div
          class="shadow-xl rounded-b-2xl rounded-tl-2xl w-full md:w-8/12 px-14 bg-white"
        >
          <div class="flex flex-col">
            <p class="bt-medium pb-11 pt-8">Register</p>

            <div class="">
              <div class="relative">
                <input
                  v-model="fullName"
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
                @click="register"
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
              <!-- <div class="pb-7">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd319wsfw2pg9Vt7hQyVOaDSIQQ-OIqfKJYNLH-_16xFKgX-Q/viewform"
                  target="_blank"
                  class="pb-7 text-custom-blue font-bold"
                  >Want to be a mentor?</a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
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
      fullName: "",
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
    // const confirmPassword = ref("");

    return {
      role,
      toast,
      router,
      email,
      //  password,
      // confirmPassword,
    };
  },

  computed: {
    // comparePasswords() {
    //   return this.confirmPassword == this.password;
    // },
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
          localStorage.setItem("userID", this.$root.uid);
          console.log(this.$root.uid);
          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.message);
        });
    },

    register() {
      if (this.password == "" && this.email == "") {
        this.showErrorToast("Please fill all the fields");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.showToast();
            this.register = true;
            user.uid = this.$root.uid;
            this.isMentor = false;
            console.log(user.uid);
            console.log(this.isMentor);
            this.createUser();

            this.$router.push("/mentorpage");
            localStorage.setItem("userEmail", this.email);
            localStorage.setItem("userFullname", this.userFullname);
            localStorage.setItem("userID", this.$root.uid);
            localStorage.setItem("isMentor", this.isMentor);
          })
          .catch((error) => {
            this.showErrorToast(error.message);
          });
      }
    },
    createUser() {
      this.firstName = this.fullName.split(" ")[0];
      this.lastName = this.fullName.split(" ")[1];
      console.log(this.firstName);
      console.log(this.lastName);
      this.userFullname = this.fullName;
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userID: this.$root.uid,
        role: "Candidate",
        profileImg:
          " data:image/jpeg;base64,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",
      };
      // localStorage.setItem("userEmail", this.email);
      // localStorage.setItem("userFullname", this.userFullname);
      // localStorage.setItem("userID", this.$root.uid);

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
