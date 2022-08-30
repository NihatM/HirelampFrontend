<template>
  <!-- component -->

  <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500 shadow-xl w-full overflow-hidden md:pt-4"
    >
      <div class="md:flex w-full justify-center">
        <div v-if="visible == false" class="w-full md:w-1/2 py-3 px-5 md:px-10">
          <div class="text-center mb-4" >
            <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>
            <p>Enter your information to sign up</p>
          </div>
          <div >
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
            <!-- </form> -->
          </div>
        </div>
          
      </div>
    </div>
  </div>
      <span v-if="visible" >
          <!-- <SignUpMentor2 /> -->
          <div class="md:flex w-full justify-center">
        <div class="w-full md:w-1/2 py-3 px-5 md:px-10">
          <div class="text-center mb-4">
            <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>

            <p>Enter your information to sign up</p>
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
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
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
                      v-model="position"
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
                      v-model="location"
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
                      v-model="longDescription"
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
                      v-model="targetCompanies"
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
                    @click="sendMentorData"
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
            </div>
          </div>
        </div>
      </span>
</template>

<script>
// import SignUpMentor1 from '../components/SignUpMentor1.vue'
// import SignUpMentor2 from '../components/SignUpMentor2.vue'
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
      showSecond: false,
      visible: false,
     
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
    const availability = ref("");
    const bio = ref("");
    const location = ref("");
    const price = ref("");
    const longDescription = ref("");
    const verified = ref("false");
    const file = ref("");
    const currentCompany = ref("");
    const targetCompanies = ref("");
    const position = ref("");
    const services = ref("");
    const tags = ref("");


    return {
      role,
      toast,
      router,
      email,
      password,
      confirmPassword,
      phone,
      availability,
      bio,
      location,
      price,
      longDescription,
      verified,
      file,
      currentCompany,
      targetCompanies,
      position,
      services,
      tags,
    };
  },
  // components: {
  //   // SignUpMentor1,
  //   SignUpMentor2,

  // },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
    //  secondPage(){
    //   this.showSecond = true;
    //   console.log(this.showSecond);
    //   return this.showSecond;
    // },
  },

  // watch: {
  //   isLoggedIn: {
  //     handler(newValue) {
  //       if (newValue) {
  //     return this.$root.loggedIn == true;
  //       }
  //     },
  //     immediate: true,
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

     onFileSelected(event) {
      this.file = event.target.files[0];
    },

    register() {
      if (this.password !== this.confirmPassword) {
        this.showErrorToast("Passwords do not match");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            // this.showToast();
            // this.createUser();
            this.showErrorToast("User creation");
            this.$root.uid = user.uid;
           this.isLoggedIn = true;
           this.showSecond = true;
          this.visible = true;

          })
          .catch((error) => {
            console.log(error)
            this.showErrorToast(error.message);
          });
      }
    },
    sendMentorData() {

      if (this.fullName === "" || this.email === "" || this.phone === "") {
        this.showErrorToast("Invalid request");
      } else {
        const userID = this.$root.uid
        const formData = new FormData();
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("availability", this.availability);
        formData.append("bio", this.bio);
        formData.append("location", this.location);
        formData.append("price", this.price);
        formData.append("longDescription", this.longDescription);
        formData.append("verified", this.verified);
        formData.append("profileImg", this.file);
        formData.append("userID", userID);
        formData.append("currentCompany", this.currentCompany);
        formData.append("targetCompanies", this.targetCompanies);
        formData.append("position", this.position);
        formData.append("services", this.services)
        formData.append("tags", this.tags)
        formData.append("email", this.email)

        console.log(formData);

         axios.post(
          "https://hirelamp.herokuapp.com/mentorCreate/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.showToast();
        this.fullName = "";
        this.email = "";
        this.phone = "";
        this.industry = "";
        this.message = "";
        this.file = null;
      }
    
    
  



      // const user = {
      //   email: this.email,
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   password: this.password,
      //   userID: this.$root.uid,
      //   role: this.role,
      //   availability: this.availability,
      //   bio: this.bio,
      //   location: this.location,
      //   price: this.price,
      //   longDescription: this.longDescription,
      //   verified: this.verified,
      //   profileImg: this.profileImg,
      //   currentCompany: this.currentCompany,
      //   targerCompanies: this.targerCompanies,
      //   position: this.position,
      //   services: this.services,
      //   tags: this.tags,
      // };
        
      // axios
      //   .post(
      //     "https://hirelamp.herokuapp.com/mentorCreate/",
      //     user
      //   )
      //   .then(() => {
      //                this.$root.loggedIn = true;
      //                this.$root.showFirst = false

      //   })
      //   .catch((error) => {
      //     this.showErrorToast(error.response.data.message);
      //   });
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
