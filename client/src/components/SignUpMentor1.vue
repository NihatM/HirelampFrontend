<template>
  <!-- component -->
          <div>
            <form @submit.prevent="sendMentorData">
              <div class="flex -mx-3">
                <div class="w-1/2 px-3 mb-4">
                  <!-- <label for="" class="text-xs font-semibold px-1"
                  >First name</label
                > -->
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
                  <!-- <label for="" class="text-xs font-semibold px-1"
                  >Last name</label
                > -->
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
                  <!-- <label for="" class="text-xs font-semibold px-1">Email</label> -->
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i
                        class="mdi mdi-email-outline text-gray-400 text-lg"
                      ></i>
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
                  <!-- <label for="" class="text-xs font-semibold px-1">Email</label> -->
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i
                        class="mdi mdi-email-outline text-gray-400 text-lg"
                      ></i>
                    </div>
                    <input
                      required
                      type="number"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Phone number"
                      v-model="phone"
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
                    NEXT
                  </button>
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <button
                    class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                  >
                    <a href="/login">Already have an account? Login</a>
                  </button>
                </div>
              </div>
            </form>
          </div>
     
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";

export default {
  name: "HomePage",
  // props: {
  //  loggedIn: {
  //    type: Boolean,
  //    required: true
  //  }
  // },
  data() {
    return {
      maxChar: 50,
      maxCharLong: 500,
      toastMessage: "",
      toastColor: "",
      firstName: "",
      lastName: "",
     
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const role = ref("");
    const confirmPassword = ref("");
    const phone = ref("");

    return {
      role,
      toast,
      router,
      email,
      password,
      confirmPassword,
      phone,
    };
  },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
   
  },

  watch: {
    isLoggedIn: {
      handler(newValue) {
        if (newValue) {
      return this.$root.loggedIn == true;

    
        }
      },
      immediate: true,
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
           this.isLoggedIn = true;


          })
          .catch((error) => {
            this.showErrorToast(error.message);
          });
      }
    },
    sendMentorData() {
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        // password: this.password,
        userID: this.$root.uid,
        role: this.role,
      };

      axios
        .post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentorCreate/",
          user
        )
        .then(() => {
                     this.$root.loggedIn = true;
                     this.$root.showFirst = false

        })
        .catch((error) => {
          this.showErrorToast(error.response.data.message);
        });
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
