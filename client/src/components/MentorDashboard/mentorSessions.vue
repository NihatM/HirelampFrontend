<template>
  <div class="p-3">
    <div>
      <p class="bt-md text-left text-gray-800">Sessions</p>
    </div>
    <ul
      class="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-0 md:mb-4 space-x-4"
      id="tabs-tab"
      role="tablist"
    >
      <li
        class="nav-item duration-300 ease-in-out hover:text-blue-500"
        role="presentation"
        v-bind:class="{
          'text-gray-900 border-b-2  border-gray-200': openTab !== 1,
          'text-custom-blue border-b-2 border-custom-blue': openTab === 1,
        }"
      >
        <a
          class="cursor-pointer px-2 block font-medium text-sm leading-tight my-2"
          v-on:click="toggleTabs(1)"
          >Upcoming<span
            class="text-xs px-2 text-white bg-red-600 rounded-full"
            >{{ upcomingSessions }}</span
          >
        </a>
      </li>
      <li
        class="nav-item duration-300 ease-in-out hover:text-blue-500"
        role="presentation"
        v-bind:class="{
          'text-gray-900 border-b-2  border-gray-200': openTab !== 2,
          'text-custom-blue border-b-2 border-custom-blue': openTab === 2,
        }"
      >
        <a
          class="cursor-pointer px-2 block font-medium text-sm leading-tight my-2"
          v-on:click="toggleTabs(2)"
          >Past</a
        >
      </li>
      <li
        class="nav-item duration-300 ease-in-out hover:text-blue-500"
        role="presentation"
        v-bind:class="{
          'text-gray-900 border-b-2  border-gray-200': openTab !== 3,
          'text-custom-blue border-b-2 border-custom-blue': openTab === 3,
        }"
      >
        <a
          class="cursor-pointer px-2 block font-medium text-sm leading-tight my-2"
          v-on:click="toggleTabs(3)"
          >All</a
        >
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
        <!-- list of upcoming sessions -->
        <div v-if="noSessionsUpcoming == true" class="flex h-96">
          <div
            class="flex flex-col justify-center align-middle content-center items-center"
          >
            <p class="text-center bt-book py-8">No upcoming sessions</p>
            <img src="../../assets/noSessions.svg" alt="" class="h-50 w-50" />
          </div>
        </div>
        <ul v-if="noSessionsUpcoming == false">
          <li
            class="flex py-2"
            v-for="candData in candDatas"
            :key="candData.userID"
            :currentMentorId="candData.mentorID"
          >
            <div
              class="w-full flex flex-row rounded-2xl py-2 md:px-6 bg-gray-50"
            >
              <div class="py-2">
                <img
                  :src="candData.menteePhoto"
                  alt=""
                  class="h-12 w-12 rounded-full mr-2"
                />
              </div>
              <div class="w-full p-2 h-100">
                <div class="flex items-stretch justify-between">
                  <div>
                    <p class="bt-bold text-left">
                      {{ candData.sessionTopic }}
                    </p>
                  </div>
                  <div>
                    <p class="bt-bold text-custom-blue">
                      ${{ candData.sessionPrice }}
                    </p>
                  </div>
                </div>
                <div class="flex flex-row justify-between">
                  <div>
                    <p class="bt-placeholder">
                      With {{ candData.menteeFirstName }}
                      {{ candData.menteeLastName }}
                    </p>
                  </div>
                  <div>
                    <p class="bt-placeholder">{{ candData.date }}</p>
                  </div>
                </div>
                <div class="flex flex-row justify-between pt-8">
                  <div class="flex items-center">
                    <button @click="giveFeedback()" class="">
                      <p
                        class="bt-footer text-custom-blue md:underline bt-button py-2"
                      >
                        See request
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
      <div v-if="noSessionsPast == true" class="flex h-96">
        <div
          class="flex flex-col justify-center align-middle content-center items-center"
        >
          <p class="text-center bt-book py-8">No upcoming sessions</p>
          <img src="../../assets/noSessions.svg" alt="" class="h-50 w-50" />
        </div>
      </div>
      <ul v-if="noSessionsPast == false">
        <li
          class="flex py-2"
          v-for="pastCandData in pastCandDatas"
          :key="pastCandData.userID"
        >
          <div class="w-full flex flex-row rounded-2xl py-2 md:px-6 bg-gray-50">
            <div class="py-2">
              <img
                :src="pastCandData.menteePhoto"
                alt=""
                class="h-12 w-12 rounded-full mr-2"
              />
            </div>
            <div class="w-full p-2 h-100">
              <div class="flex items-stretch justify-between">
                <div>
                  <p class="bt-bold text-left">
                    {{ pastCandData.sessionTopic }}
                  </p>
                </div>
                <div>
                  <p class="bt-bold text-custom-blue">
                    ${{ pastCandData.sessionPrice }}
                  </p>
                </div>
              </div>
              <div class="flex flex-row justify-between">
                <div>
                  <p class="bt-placeholder">
                    From {{ pastCandData.menteeFirstName }}
                    {{ pastCandData.menteeLastName }}
                  </p>
                </div>
                <div>
                  <p class="bt-placeholder">{{ pastCandData.date }}</p>
                </div>
              </div>

              <div class="flex flex-row justify-between pt-8">
                <div class="flex items-center">
                  <!-- border-2 border-custom-blue rounded-full -->
                  <button
                    @click="seeYourRequest(pastCandData.mentorID)"
                    class=""
                  >
                    <p
                      class="bt-footer text-custom-blue md:underline bt-button py-2"
                    >
                      See request
                    </p>
                  </button>
                </div>
                <div>
                  <!-- <router-link
                        to="/Dashboard/sessions/rateMentor/08PUJIQJ9BRVF3hmoSptTDrhzys2"
                      > -->
                  <button
                    @click="rateCandidate(pastCandData.sessionID)"
                    class="bg-custom-blue text-white rounded-full flex"
                  >
                    <img
                      src="../../assets/rateMentor.svg"
                      alt=""
                      class="align-middle ml-2"
                    />
                    <p class="bt-button px-2 py-2.5">Give feedback</p>
                    <!-- </router-link> -->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
      <div v-if="noSessionsAll == true" class="flex h-96">
        <div
          class="flex flex-col justify-center align-middle content-center items-center"
        >
          <p class="text-center bt-book py-8">No upcoming sessions</p>
          <img src="../../assets/noSessions.svg" alt="" class="h-50 w-50" />
        </div>
      </div>
      <ul v-if="noSessionsAll == false">
        <li
          class="flex py-2"
          v-for="allCandData in allCandDatas"
          :key="allCandData.userID"
        >
          <div class="w-full flex flex-row rounded-2xl p-2 bg-gray-100">
            <div class="py-2">
              <img
                :src="allCandData.menteePhoto"
                alt=""
                class="h-12 w-12 rounded-full mx-2"
              />
            </div>
            <div class="w-full p-2 h-100">
              <div class="flex items-stretch justify-between">
                <div>
                  <p class="bt-bold text-left">
                    {{ allCandData.sessionTopic }}
                  </p>
                </div>
                <div>
                  <p class="bt-bold text-custom-blue">
                    ${{ allCandData.sessionPrice }}
                  </p>
                </div>
              </div>
              <div class="flex flex-row justify-between">
                <div>
                  <p>
                    {{ allCandData.menteeFirstName }}
                    {{ allCandData.menteeLastName }}
                  </p>
                </div>
                <div>
                  <p>{{ allCandData.date }}</p>
                </div>
              </div>
              <div
                class="flex flex-row justify-between content-end align-bottom pt-8"
              >
                <div
                  class="flex align-middle justify-center items-center content-center"
                >
                  <p class="bt-footer text-custom-blue underline">
                    See request
                  </p>
                </div>
                <div v-if="this.buttonTextBool">
                  <button
                    v-if="
                      allCandData.timeFlag == 'Upcoming'
                        ? !this.buttonTextBool
                        : this.buttonTextBool
                    "
                    class="bg-custom-blue text-white rounded-full flex"
                  >
                    <img
                      src="../../assets/rateMentor.svg"
                      alt=""
                      class="align-middle ml-2"
                    />
                    <p class="bt-button px-2 py-2.5" @click="rateCandidate()">
                      {{
                        allCandData.timeFlag == "Upcoming"
                          ? null
                          : "Give Feedback"
                      }}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      candDatas: "",
      pastCandDatas: "",
      allCandDatas: "",
      openTab: 1,
      upcomingSessions: 0,
      buttonText: "",
      buttonTextBool: true,
      noSessionsUpcoming: false,
      noSessionsPast: false,
      noSessionsAll: false,
    };
  },

  beforeMount() {
    this.getUpcomingCandidateData();
    this.getPastCandidateData();
    this.getAlCandidateData();
  },

  methods: {
    giveFeedback() {
      // localStorage.getItem("userID");
      // this.$router.push("/Dashboard/sessions/rateMentor");
      this.$router.push("/mentorFeedback/" + localStorage.getItem("userID"));
      // this.$router.push("/rateMentorPage/" + mentorId);
    },

    seeYourRequest(mentorID) {
      this.$router.push({
        name: "seeYourRequest/",
        params: { mentorID: mentorID },
      });
    },

    //if the session is upcoming then don't show the rate mentor button if the session is past then show the rate mentor button

    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },

    async getCandidateUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
      this.getCandidateData(this.userID);
    },

    async rateCandidate(sessionId) {
      //console.log(mentorId);
      console.log(sessionId);
      localStorage.setItem("sessionID", sessionId);

      //console.log("jajajajjaja");
      this.$router.push(
        "/mentorFeedback/afcebf76-657c-44f3-9f44-0d79dfd96c96/"
      );
    },

    async getUpcomingCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/upcomingSessions/" +
            localStorage.getItem("userID") +
            "/"
        )
        .then((response) => {
          this.candDatas = response.data;

          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy
          this.candDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
            element.date = element.date.split("-").reverse().join("/");
          });

          // the number of upcoming sessions
          this.upcomingSessions = this.candDatas.length;
          if (this.upcomingSessions == 0) {
            this.noSessionsUpcoming = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getPastCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/pastSessions/" +
            localStorage.getItem("userID") +
            "/"
        )
        .then((response) => {
          this.pastCandDatas = response.data;
          console.log(this.pastCandDatas);

          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy and time to hh:mm
          this.pastCandDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
          });
          if (this.pastCandDatas.length == 0) {
            this.noSessionsPast = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getAlCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/getAllSessionMentor/" +
            localStorage.getItem("userID") +
            "/"
        )

        .then((response) => {
          this.allCandDatas = response.data;
          console.log(this.allCandDatas);
          this.isLoading = false;
          this.allCandDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
          });

          console.log(this.buttonText);
          if (this.allCandDatas.length == 0) {
            this.noSessionsAll = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    showUpcomingSessions() {},
  },
};
</script>

<style></style>
