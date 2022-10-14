<template>
  <div class="flex px-6 py-4 md:px-32 md:space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden hidden md:block">
      <div class="">
        <userDashboard />
      </div>
    </div>
    <div class="w-full md:w-2/3 shadow-xl rounded-xl">
      <div class="w-full h-full py-16">
        <div class="flex flex-col">
          <div>
            <div class="w-full">
              <div class="flex items-center justify-center align-middle">
                <img
                  v-bind:src="mentorData.profileImg"
                  alt=""
                  class="align-middle items-center border-white hover:border-custom-blue duration-300 border-2 rounded-full h-50 w-40 content-center flex justify-center md:h-40 md:w-100 xl:w-50 lg:w-50"
                />
              </div>
            </div>
            <p class="bt-md">How was your session?</p>

            <!-- <div class="flex">
              <img src="../../assets/0stars.svg" alt="" />
              <img src="../../assets/0stars.svg" alt="" />
              <img src="../../assets/0stars.svg" alt="" />
              <img src="../../assets/0stars.svg" alt="" />
              <img src="../../assets/0stars.svg" alt="" />
            </div> -->
            <div class="flex items-center justify-center align-middle">
              <svg
                @click="rateMentor(1)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  'text-yellow-400': isHovered,
                  'text-yellow-400': rating >= 1,
                  'text-gray-300': rating <= 1,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(2)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  'text-yellow-400': isHovered,
                  'text-yellow-400': rating >= 2,
                  'text-gray-300': rating <= 2,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(3)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  'text-yellow-400': isHovered,
                  'text-yellow-400': rating >= 3,
                  'text-gray-300': rating <= 3,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(4)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  'text-yellow-400': isHovered,
                  'text-yellow-400': rating >= 4,
                  'text-gray-300': rating <= 4,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(5)"
                aria-hidden="true"
                :class="{
                  'text-yellow-400': isHovered,
                  'text-yellow-400': rating >= 5,
                  'text-gray-300': rating <= 5,
                }"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="flex flex-col justify-center py-10 px-8 md:px-8">
            <textarea
              type="text"
              class="w-full h-140 text-gray-600 bg-gray-100 rounded-2xl p-2"
              placeholder="Leave a comment"
              v-model="rateMentorText"
            />

            <div class="w-full py-8">
              <button
                @click="sendRatingText(mentorData.userID)"
                class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
              >
                <p class="text-white">Rate</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import userDashboard from "../../components/userDashboard.vue";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      candDatas: "",
      mentorData: "",
      rateMentorText: "",
      menteeDataID: "",
      rating: 0,
      candId: "",
    };
  },

  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  components: {
    userDashboard,
  },
  beforeMount() {
    this.getCandidateUserID();
    this.getMentorData();
  },

  methods: {
    showToast() {
      this.toast.success("Thank you for your feedback!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    showErrorToast() {
      this.toast.error("Please enter a valid text!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    //star rating system
    rateMentor(rating) {
      this.rating = rating;
      // this.sendRating(rating);
    },

    getMentorData() {
      this.currentURL = window.location.href;
      let counter = 0;
      let i = 0;
      while (counter < 4) {
        i++;
        if (this.currentURL[i] === "/") {
          counter++;
        }
      }
      let str = "";
      if (this.currentURL[this.currentURL.length] === "/")
        str = this.currentURL.slice(i + 1, this.currentURL.length - 1);
      else str = this.currentURL.slice(i + 1, this.currentURL.length);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            str
        )
        .then((response) => {
          this.mentorData = response.data;
          //   this.mentorData.mentorID = str;
          this.isLoading = false;
        });
    },

    async getCandidateUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
      this.getCandidateData(this.userID);
    },

    async getCandidateData(userID) {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            userID +
            "/"
        )
        .then((response) => {
          console.log(response);
          this.candDatas = response.data;
          console.log(this.candDatas);
          this.isLoading = false;
          this.menteeDataID = this.candDatas.id;
          console.log(this.menteeDataID);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // send rating text
    async sendRatingText(mentorId) {
      axios
        .post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/rate/" +
            mentorId +
            "/",
          {
            mentor: this.mentorData.id,
            mentee: this.menteeDataID,
            rating: this.rating,
            comment: this.rateMentorText,
          }
        )
        .then((response) => {
          console.log(response);
          this.rateMentorText = "";
          window.location.href = "/dashboard/sessions";
          this.isLoading = false;
          this.showToast();
        })
        .catch((error) => {
          console.log(error);
          this.showErrorToast();
        });
    },
  },
};
</script>

<style></style>
