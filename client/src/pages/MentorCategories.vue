<template>
  <div class="">
    <h1 class="flex justify-center md:text-3xl p-4 font-bold bt-medium">
      Our Mentors
    </h1>

    <div class="pb-7 px-6 md:px-0">
      <SearchBar />
    </div>
    <TagsNew :searchTags="this.searchTags" />
    <div v-if="this.isLoading" class="flex align-center justify-center p-8">
      <Loading />
    </div>

    <ul
      class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center items-center pb-14 pt-4 px-6 md:px-0"
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

    <div
      class="p-6 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1 md:px-32 md:pt-40"
    >
      <div
        class="w-full xl:w-8/12 lg:pr-8 align-middle flex flex-col justify-center content-center"
      >
        <div
          class="w-full lg:w-0 md:mb-14 xl:mb-0 relative flex items-center justify-center"
        >
          <img
            src="../assets/mentorin.svg"
            alt=""
            class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
          />
        </div>
        <!-- <button v-on:click="test">TEST v-on</button> -->
        <div class="pb-9">
          <p class="text-4xl text-left bt-medium pb-3.5">
            Which mentor do you want see?
          </p>
          <p class="text-4xl text-left bt-book">
            Just send us linkdein link and we will add for you this mentor and
            you can get appointment easly the your mentor in order to help you
          </p>
        </div>

        <form @submit.prevent="searchMentor">
          <div class="flex justify-left">
            <div class="relative w-10/12 md:w-full">
              <input
                type="url"
                placeholder="Linkedin URL"
                ref="search"
                :maxlength="maxChar"
                :minlength="minChar"
                v-model="search"
                id='location-search"'
                class="shadow-2xl block p-2.5 px-8 w-full h-14 z-20 text-sm text-gray-900 bg-white rounded-full"
                required=""
              />

              <button
                type="submit"
                class="absolute top-2.5 py-2.5 px-12 h-9 right-2 text-sm font-medium text-white rounded-full hover:bg-blue-600 duration-300 bg-custom-blue focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <p class="text-white text-center bt-book">SEND</p>
              </button>
            </div>
          </div>
        </form>
      </div>
      <!-- hidden md:visible lg:visible xl:visible -->
      <div
        class="w-0 lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
      >
        <img
          src="../assets/mentorin.svg"
          alt=""
          class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
// import DropDownMenu from "../components/DropDownMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import Loading from "../components/Loading.vue";
import Footer from "../components/Footer.vue";
import TagsNew from "../components/TagsNew.vue";
export default {
  props: [],

  name: "MentorPage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: [],
      getMentorDetails: false,
      isLoading: true,
      searchTags: ["Azerbaijan", "Big4", "Software", "Finance"],
      // searchTags: mentorData.tags,
    };
  },
  components: {
    Footer,
    SearchBar,
    Loading,
    TagsNew,
    // DropDownMenu,
  },
  beforeMount() {
    this.getMentorDatas();
  },

  methods: {
    async getMentorDatas() {
      let url = window.location.href;
      console.log(url);

      let counter = 0;
      for (let i = 0; i < url.length; i++) {
        if (url[i] == "/") {
          counter++;
        }

        if (counter == 5) {
          url = url.slice(i + 1);
          for (let j = 0; j < url.length; j++) {
            if (url[j] === "%" || url[j + 1] === "2" || url[j + 1] === "0") {
              console.log("test");
              url = url.slice(0, j) + " " + url.slice(j + 3);
            }
          }
          break;
        }
      }
      console.log(url);
      if (url[url.length - 1] === "/") {
        url = url.slice(0, url.length - 1);
      }

      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentors/categories/" +
            url
        )
        .then((response) => {
          console.log(response.data.query);
          this.mentorDatas = response.data.query;
          console.log(this.mentorDatas);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async mentorDetails(mentorId) {
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
  },
};
</script>

<style></style>
