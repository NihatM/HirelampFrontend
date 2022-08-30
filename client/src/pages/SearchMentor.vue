<template>
  <div>
    <h1 class="flex justify-center md:text-3xl p-4 font-bold">
      Search results
    </h1>
    <SearchBar />

    <ul
      class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center items-center pb-14 pt-4"
    >
      <li
        v-for="mentorData in mentorDatas"
        :key="mentorData.userID"
        :currentMentorId="mentorData.userID"
        class="rounded-3xl my-4 md:my-2 lg:my-8 xl:my-4 sm:mx-8 md:mx-12 lg:mx-12 h-fit w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/4"
      >
        <div class="w-full flex justify-center items-center col-end-1">
          <div class="flex flex-col items-center">
            <!-- Image emplacement -->
            <div class="bg-white h-32 w-32 rounded-full relative -mb-24">
              <button class="z-50">
                <img
                  v-bind:src="mentorData.profileImg"
                  alt=""
                  class="rounded-full"
                />
              </button>
            </div>
            <!-- Content Card emplacement -->
            <div
              class="shadow-2xl rounded-2xl w-full md:w-282 xl:w-379 h-399 pb-8 px-8 relative pt-24"
            >
              <div>
                <p class="text-center bt-smalltitle font-bold pb-3.5 pt-3">
                  {{ mentorData.firstName }} {{ mentorData.lastName }}
                </p>

                <div class="flex items-center justify-center pb-4">
                  <button
                    class="bg-black text-white hover:bg-white rounded-2xl text-center bt-book px-6 py-1.5"
                  >
                    {{ mentorData.price }}$ per session
                  </button>
                </div>

                <div
                  class="flex flex-row pb-3 items-center justify-center space-x-9"
                >
                  <div class="flex flex-row items-start">
                    <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                    <p class="bt-book truncate">
                      {{ mentorData.currentCompany }}
                    </p>
                  </div>
                  <div class="flex flex-row items-start">
                    <img src="../assets/locationicon.svg" alt="" class="pr-2" />

                    <p class="bt-book truncate">{{ mentorData.location }}</p>
                  </div>
                </div>

                <p class="text-center bt-smalltext pb-6 h-24">
                  {{ mentorData.services }}
                </p>
                <div class="flex justify-center">
                  <button
                    @click="mentorDetails(mentorData.userID)"
                    class="h-11 w-32 border-2 rounded-full border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white duration-300 bt-book px-2 py-1.5"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- <ul
      class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center pb-14 px-1 pt-4"
    >
      <li
        v-for="mentorData in mentorDatas"
        :key="mentorData.userID"
        :currentMentorId="mentorData.userID"
        class="bg-gradient-to-tl from-gray-300 to-gray-100 rounded-3xl p-2 shadow-md my-4 md:my-2 lg:my-8 xl:my-4 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
      >
        <div
          class="container w-full mx-auto flex items-stretch justify-between col-end-1"
        >
          <div class="flex">
            <img
              v-bind:src="mentorData.profileImg"
              alt=""
              class="h-20 w-20 md:h-20 md:w-20 xl:w-20 lg:w-30 border-3 border-custom-blue rounded-full"
            />
          </div>

          <div class="flex flex-col truncate align-center justify-center">
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.currentCompany }}
            </h1>
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.location }}
            </h1>
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              $ {{ mentorData.price }}
            </h1>
          </div>
        </div>

        <div>
          <div class="flex flex-col">
            <h1
              class="text-md md:text-lg lg:text-xl xl:text-2xl py-2 font-bold"
            >
              {{ mentorData.firstName }} {{ mentorData.lastName }}
            </h1>
            <div class="h-20 flex justify-center align-middle">
              <p
                class="text-sm sm:text-sm md:text-base lg:text-md xl:text-md pb-3"
              >
                {{ mentorData.services }}
              </p>
            </div>
            <div class="justify-between">
              <button
                @click="mentorDetails(mentorData.userID)"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-custom-blue rounded-2xl hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                More
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul> -->
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "MentorPage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: [],
      getMentorDetails: false,
      search: "",
    };
  },
  mounted() {
    this.searchMentor();
  },
  methods: {
    async mentorDetails(mentorId) {
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
      this.$router.push("/mentordetails/" + mentorId);
    },

    searchMentor() {
      this.currentURL = window.location.href;
      console.log(this.currentURL);
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
          `https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/search/` +
            str
        )
        .then((res) => {
          let key = "";
          let finalarr1 = [];
          console.log(res.data);
          for (key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              if (element.length > 0) {
                finalarr1 = finalarr1.concat(element);
              }
            }
          }
          // let finalarr2;
          this.mentorDatas = finalarr1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  components: {
    Footer,
    SearchBar,
    // DropDownMenu,
  },
};
</script>

<style></style>
