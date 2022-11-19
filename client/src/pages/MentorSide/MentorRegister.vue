<template>
  <body class="md:px-32">
    <div
      class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1"
    >
      <div
        class="hidden md:visible w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:mb-14 xl:mb-0 relative md:flex flex-col items-center justify-center"
      >
        <img src="../../assets/login.svg" alt="" class="w-full pb-8" />
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
            <a href="/signup" class="font-bold hover:text-gray-50"
              >Register as a candidate</a
            >
          </button>
        </div>
        <div
          class="md:shadow-xl rounded-b-2xl rounded-tl-2xl w-full md:w-8/12 px-14 bg-white"
        >
          <div class="flex flex-col">
            <p class="bt-medium pb-11 pt-8">Register as a mentor</p>

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
                  <img src="../../assets/Message.svg" alt="" />
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
                  <img src="../../assets/Message.svg" alt="" />
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
                  <img src="../../assets/Show.svg" alt="" />
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
                <img src="../../assets/Google.svg" alt="" class="px-2.5" />
                <p>Google</p>
              </button>
              <div class="flex justify-center items-center">
                <p class="py-6 px-2.5">Already have an account?</p>
                <a
                  href="/mentorLogin"
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
  </body>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";

export default {
  name: "MentorRegister",
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
            this.createUser();
            user.uid = this.$root.uid;
            this.isMentor = true;
            console.log(user.uid);
            console.log(this.isMentor);
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
      this.userFullname = this.fullName;
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userID: this.$root.uid,
        role: "Mentor",
      };

      axios
        .post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentorCreate/",
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
