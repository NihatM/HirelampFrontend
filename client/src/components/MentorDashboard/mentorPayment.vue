<template>
  <div class="p-3">
    <div>
      <p class="bt-md text-left text-gray-800">Payment history</p>
    </div>
    <!-- <ul
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
    </ul> -->
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
              class="w-full flex flex-row rounded-2xl py-2 md:px-6 bg-gray-50 hover:shadow-lg duration-300"
            >
              <div class="py-2">
                <img
                  :src="candData.menteeImg"
                  alt=""
                  class="h-12 w-12 rounded-full mr-2"
                />
              </div>
              <div class="w-full p-2 h-100">
                <div class="flex items-stretch justify-between pb-2">
                  <div class="">
                    <p class="bt-bold text-left">
                      {{ candData.sessionTopic }}
                    </p>
                  </div>
                  <div>
                    <p class="bt-bold text-custom-blue">
                      + ${{ candData.sessionPrice }}
                    </p>
                  </div>
                </div>
                <div class="flex flex-row justify-between">
                  <div>
                    <p class="bt-placeholder">
                      {{ candData.menteeFirstName }}
                      {{ candData.menteeLastName }}
                    </p>
                  </div>
                  <div>
                    <p class="bt-placeholder">{{ candData.paymentDate }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      candDatas: "",

      openTab: 1,
    };
  },

  beforeMount() {
    this.getPaymentData();
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

    async getPaymentData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/payments/8d49ebf8-4634-454d-9cbf-a512b94b871f/"
        )
        .then((response) => {
          this.candDatas = response.data;
          console.log(this.candDatas);

          this.isLoading = false;
          // format date to MM/DD/YYYY
          this.candDatas.forEach((candData) => {
            candData.paymentDate = new Date(
              candData.paymentDate
            ).toLocaleDateString("en-US");
          });

          // this.candDatas = this.candDatas.filter((candData) => candData.paymentStatus === "paid");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
