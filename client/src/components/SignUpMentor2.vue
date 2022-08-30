<template>
  <!-- component -->

  <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500 shadow-xl w-full overflow-hidden md:pt-4"
    >
      <div class="md:flex w-full justify-center">
        <div class="w-full md:w-1/2 py-3 px-5 md:px-10">
          <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>

            <p>Enter your information to sign up</p>
          </div>
          <div>
            <form @submit.prevent="sendMentorData">


                    <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i
                        class="mdi mdi-account-outline text-gray-400 text-lg"
                      ></i>
                    </div>
                   
                     <input
                  type="file"
                  accept="application/pdf"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Upload CV"
                  required
                  @change="onFileSelected"
                />
                  </div>
                </div>
               
              </div>


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
                      v-model="currentCompany"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Current Company"
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
                      v-model="currentPosition"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Current Position"
                      required
                    />
                  </div>
                </div>
              </div>

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
                      v-model="currentLocation"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Current location"
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
                      v-model="services"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Services"
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
                      <i
                        class="mdi mdi-account-outline text-gray-400 text-lg"
                      ></i>
                    </div>
                    <input
                      type="text"
                      v-model="tags"
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Tags"
                      required
                    />
                  </div>
                </div>
               
              </div>

              

              <!-- <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
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
              </div> -->

              <!-- <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
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
              </div> -->

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
                    <textarea
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Short descriptive bio (max 50 characters)"
                      v-model="bio"
                      :maxlength="maxChar"
                    ></textarea>
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
                    <textarea
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Long description (max 500 characters)"
                      v-model="description"
                      :maxlength="maxCharLong"
                    ></textarea>
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
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Companies you can help with"
                      v-model="listOfCompanies"
                      :maxlength="maxChar"
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
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Availability"
                      v-model="availability"
                      :maxlength="maxCharLong"
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
                      class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Average price per hour (USD)"
                      v-model="price"
                      :maxlength="maxChar"
                    />
                  </div>
                </div>
              </div>

              <!-- <div class="flex -mx-3">
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
            </div> -->

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-4">
                  <button
                    @click="register"
                    type="submit"
                    value="Register"
                    class="block w-full shadow-md border-3 border-blue-400 max-w-xs mx-auto bg-custom-blue hover:bg-blue-500 focus:bg-blue-700 text-white rounded-2xl px-3 py-2 font-semibold"
                  >
                    SIGN UP
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
        </div>
      </div>
    </div>
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

    return {
      role,
      toast,
      router,
      email,
      password,
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
            this.$router.push("/signup/mentor2");
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
  },
};
// get a reference to our vue router
</script>

<style></style>
