<template>
  <div class="p-3">
    <div>
      <p class="bt-md text-left text-gray-800">Sessions</p>
    </div>
    <ul
      class="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-0 md:mb-4"
      id="tabs-tab"
      role="tablist"
    >
      <li class="nav-item flex" role="presentation">
        <a
          class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-2 border-t-0 border-b-2 px-6 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent underline underline-offset-4 decoration-8 hover:undeline-custom-blue"
          v-bind:class="{
            'text-gray-900 bg-gray-200': openTab !== 1,
            'text-custom-blue bg-pink-600 ': openTab === 1,
          }"
          v-on:click="toggleTabs(1)"
          >Upcoming<span class="px-2 text-white bg-red-600 rounded-full">{{
            upcomingSessions
          }}</span>
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          v-bind:class="{
            'text-gray-900 bg-gray-200': openTab !== 2,
            'text-custom-blue bg-pink-600 underline underline-offset-8 underline-4':
              openTab === 2,
          }"
          v-on:click="toggleTabs(2)"
          >Past</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          v-bind:class="{
            'text-gray-900 bg-gray-200': openTab !== 3,
            'text-custom-blue bg-pink-600': openTab === 3,
          }"
          v-on:click="toggleTabs(3)"
          >All</a
        >
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
        <!-- list of upcoming sessions -->

        <ul>
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
                  :src="candData.mentorPhoto"
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
                      From {{ candData.mentorFirstName }}
                      {{ candData.mentorLastName }}
                    </p>
                  </div>
                  <div>
                    <p class="bt-placeholder">{{ candData.date }}</p>
                  </div>
                </div>
                <div class="flex flex-row justify-between pt-8">
                  <div class="flex items-center">
                    <!-- border-2 border-custom-blue rounded-full -->
                    <button @click="seeYourRequest(candData.mentorID)" class="">
                      <p
                        class="bt-footer text-custom-blue md:underline bt-button py-2"
                      >
                        See your request
                      </p>
                    </button>
                  </div>
                  <div>
                    <!-- <router-link
                        to="/Dashboard/sessions/rateMentor/08PUJIQJ9BRVF3hmoSptTDrhzys2"
                      > -->
                    <button
                      @click="rateMentor(candData.mentorID)"
                      class="bg-custom-blue text-white rounded-full flex"
                    >
                      <img
                        src="../../assets/rateMentor.svg"
                        alt=""
                        class="align-middle ml-2"
                      />
                      <p class="bt-button px-2 py-2.5">Rate mentor</p>
                      <!-- </router-link> -->
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
      <ul>
        <li
          class="flex p-2"
          v-for="pastCandData in pastCandDatas"
          :key="pastCandData.userID"
        >
          <div class="w-full flex flex-row rounded-2xl p-2 bg-gray-100">
            <div class="p-2">
              <img
                :src="pastCandData.mentorPhoto"
                alt=""
                class="h-12 w-12 rounded-full mx-2"
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
                  <p>
                    {{ pastCandData.mentorFirstName }}
                    {{ pastCandData.mentorLastName }}
                  </p>
                </div>
                <div>
                  <p>{{ pastCandData.date }}</p>
                </div>
              </div>
              <div
                class="flex flex-row justify-between content-end align-bottom pt-8"
              >
                <div>
                  <p class="bt-footer text-custom-blue underline">
                    See mentor's feedback
                  </p>
                </div>
                <div>
                  <button
                    class="bg-custom-blue px-3 py-1.5 text-white rounded-full"
                  >
                    <p>Rate mentor</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
      <ul>
        <li
          class="flex p-2"
          v-for="allCandData in allCandDatas"
          :key="allCandData.userID"
        >
          <div class="w-full flex flex-row rounded-2xl p-2 bg-gray-100">
            <div class="p-2">
              <img
                :src="allCandData.mentorPhoto"
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
                    {{ allCandData.mentorFirstName }}
                    {{ allCandData.mentorLastName }}
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
                    See mentor's feedback
                  </p>
                </div>
                <div>
                  <button
                    class="bg-custom-blue px-3 py-1.5 text-white rounded-full"
                  >
                    <p>Rate mentor</p>
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
    };
  },

  beforeMount() {
    this.getUpcomingCandidateData();
    this.getPastCandidateData();
    this.getAlCandidateData();
  },

  methods: {
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

    //go to rate mentor page
    // async rateMentor() {
    //   window.location.href =
    //     "/rateMentorPage/afcebf76-657c-44f3-9f44-0d79dfd96c96";
    // },

    async rateMentor(mentorId) {
      //console.log(mentorId);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            mentorId +
            "/"
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.currentMentorId);
        })
        .catch((error) => {
          console.log(error);
        });
      //console.log("jajajajjaja");
      this.$router.push("/rateMentorPage/" + mentorId);
    },

    async getUpcomingCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/upcomingSessionsMentee/08PUJIQJ9BRVF3hmoSptTDrhzys2/"
        )
        .then((response) => {
          this.candDatas = response.data;

          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy
          this.candDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
            element.date = element.date.split("-").reverse().join("/");
          });
          // this.candDatas.forEach((element) => {
          //   element.date = element.date.split("T")[0];
          // });

          // the number of upcoming sessions
          this.upcomingSessions = this.candDatas.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getPastCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/pastSessionsMentee/08PUJIQJ9BRVF3hmoSptTDrhzys2/"
        )
        .then((response) => {
          this.pastCandDatas = response.data;

          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy and time to hh:mm
          this.pastCandDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getAlCandidateData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/getAllSessionMentee/08PUJIQJ9BRVF3hmoSptTDrhzys2/"
        )

        .then((response) => {
          this.allCandDatas = response.data;

          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy and time to hh:mm
          this.allCandDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
          });

          // this.candDatas.forEach((candData) => {
          //   candData.date = new Date(candData.date).toLocaleDateString();
          // });
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
