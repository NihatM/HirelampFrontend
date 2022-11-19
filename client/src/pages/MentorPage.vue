<template>
  <body class="">
    <div class="md:px-14">
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
        class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center items-center pb-14 pt-4 px-2 md:px-0"
      >
        <li
          v-for="mentorData in mentorDatas"
          :key="mentorData.userID"
          :currentMentorId="mentorData.userID"
          class="rounded-3xl my-4 md:my-2 lg:my-8 xl:my-4 sm:mx-8 md:mx-12 lg:mx-8 h-fit w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/4"
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
                class="shadow-xl hover:shadow-2xl duration-300 rounded-2xl w-320 md:w-320 2xl:w-379 h-399 pb-8 px-8 relative pt-24"
              >
                <div>
                  <p
                    class="text-center bt-smalltitle font-bold pb-3.5 pt-3 truncate"
                  >
                    {{ mentorData.firstName }} {{ mentorData.lastName }}
                  </p>

                  <div class="flex items-center justify-center pb-4">
                    <p
                      class="bg-price-blue text-black rounded-2xl text-center bt-book px-6 py-1.5"
                    >
                      {{ mentorData.price }}$ per session
                    </p>
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
                      <img
                        src="../assets/locationicon.svg"
                        alt=""
                        class="pr-2"
                      />

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
    </div>
    <mentorRequest />
    <Footer />
  </body>
</template>

<script>
import axios from "axios";
// import DropDownMenu from "../components/DropDownMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import Loading from "../components/Loading.vue";
import Footer from "../components/Footer.vue";
import TagsNew from "../components/TagsNew.vue";
import mentorRequest from "../components/mentorRequest.vue";
export default {
  props: [],

  name: "MentorPage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: this.mentorDatas,
      getMentorDetails: false,
      isLoading: true,
      searchTags: ["Azerbaijan", "Big4", "Software", "Finance"],
      fullname: "",
    };
  },

  components: {
    Footer,
    SearchBar,
    Loading,
    TagsNew,
    mentorRequest,
    // DropDownMenu,
  },

  mounted() {
    this.getMentorDatas();
  },

  methods: {
    async getMentorDatas() {
      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/experts/"
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);

          this.isLoading = false;
          localStorage.getItem("userEmail")
            ? (this.email = localStorage.getItem("userEmail"))
            : null;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async mentorDetails(mentorId) {
      //console.log(mentorId);
      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            mentorId +
            "/"
        )
        .then((response) => {
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);
          console.log(mentorId);
          this.fullname =
            this.mentorDatas.firstName + " " + this.mentorDatas.lastName;
          // router push to mentor details with fullname as :str
          localStorage.setItem("fullname", this.fullname);
          console.log(localStorage.getItem("fullname"));
          this.$router.push({
            path: "/mentorDetails/" + this.fullname,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      // this.goToMentorDetails(this.fullname);
      // this.$router.push({
      //   path: "/mentorDetails/" + this.fullname,
      // });
      // console.log(this.fullname);
      console.log(localStorage.getItem("fullname"));
      localStorage.setItem("mentorId", mentorId);
    },
    goToMentorDetails(fullname) {
      this.$router.push({
        path: "/mentorDetails/" + fullname,
      });
    },
  },
};
</script>

<style></style>
