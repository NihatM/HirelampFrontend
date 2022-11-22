<template>
  <div class="flex px-6 py-4 md:px-32 md:space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden hidden md:block">
      <div class="">
        <userDashboard />
      </div>
    </div>
    <div class="w-full md:w-2/3 shadow-xl rounded-xl">
      <div class="w-full h-full px-8">
        <div class="flex flex-col">
          <p class="bt-md text-left pb-8">
            {{ mentorData.menteeFirstName }}
            {{ mentorData.menteeLastName }}'s request details
          </p>

          <ul>
            <li>
              <div
                class="w-full flex flex-row rounded-2xl py-2 md:px-6 bg-gray-50 hover:shadow-lg duration-300"
              >
                <div class="py-2">
                  <img
                    :src="mentorData.menteeImg"
                    alt=""
                    class="h-12 w-12 rounded-full mr-2"
                  />
                </div>
                <div class="w-full p-2 h-100">
                  <div class="flex items-stretch justify-between pb-2">
                    <div class="">
                      <p class="bt-bold text-left">
                        {{ mentorData.sessionTopic }}
                      </p>
                    </div>
                    <div>
                      <p class="bt-bold text-custom-blue">
                        + ${{ mentorData.sessionPrice }}
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-row justify-between">
                    <div>
                      <p class="bt-placeholder">
                        {{ mentorData.menteeFirstName }}
                        {{ mentorData.menteeLastName }}
                      </p>
                    </div>
                    <div>
                      <p class="bt-placeholder">{{ mentorData.paymentDate }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div></div>
          <form @submit.prevent="sendRatingText(mentorData.userID)">
            <div class="flex flex-col justify-center py-10">
              <!-- <textarea
                type="text"
                required
                class="w-full h-140 text-gray-600 bg-gray-100 rounded-2xl p-2"
                placeholder="Leave a comment"
                v-model="this.feedbackText"
              /> -->

              <p class="w-full h-140 text-gray-600 bg-gray-100 rounded-2xl p-2">
                {{ mentorData.comment }}
              </p>
              <div class="w-full py-8">
                <button
                  submit
                  class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
                >
                  <p class="text-white">Rate</p>
                </button>
              </div>
            </div>
          </form>
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
  name: "mentorSeeRequest",
  data() {
    return {
      mentorData: "",
      rateMentorText: "",
      menteeDataID: "",
      candId: "",
      feedbackTitle: "",
      feedbackText: "",
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
    // this.getCandidateUserID();
    this.getMentorData();
    // this.getSessionId();
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
      this.toast.error("Something went wrong, please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    getFeedbackData() {
      console.log(localStorage.getItem("sessionID"));
      this.sessionID = localStorage.getItem("sessionID");
      this.timeFlag = localStorage.getItem("timeFlag");
      console.log(this.timeFlag);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/session/" +
            this.timeFlag +
            "/" +
            this.sessionID +
            "/"
        )
        .then((response) => {
          this.mentorData = response.data;
          this.isLoading = false;
          console.log(this.mentorData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMentorData() {
      console.log(localStorage.getItem("fullname"));
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            localStorage.getItem("mentorId")
        )
        .then((response) => {
          this.mentorData = response.data;
          this.fullname =
            this.mentorData.firstName + " " + this.mentorData.lastName;
          console.log(this.fullname);
          //   localStorage.setItem("fullname", this.fullname);
          this.getFeedbackData(this.fullname);
          this.isLoading = false;
          console.log(this.mentorData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // send rating text
    async sendRatingText() {
      console.log(this.ratingCoachability);
      console.log(this.ratingPotential);
      console.log(this.feedbackTitle);
      axios
        .put(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/feedback/add/" +
            this.mentorData.sessionID +
            "/",

          {
            sessionTopic: this.mentorData.sessionTopic,
            // sessionPrice: this.mentorData.sessionPrice,
            feedbackTitle: this.feedbackTitle,
            feedbackText: this.feedbackText,
            coachability: this.ratingCoachability,
            priorKnowledge: this.ratingPrior,
            potential: this.ratingPotential,
          },

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then((response) => {
          console.log(this.ratingPotential);

          console.log(response);
          this.rateMentorText = "";
          this.feedbackTitle = "";
          this.feedbackText = "";

          // this.isLoading = false;
          this.showToast();
          //set a timeout to redirect to the dashboard
          setTimeout(() => {
            window.location.href = "/mentorDashboard/sessions";
          }, 2000);
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
