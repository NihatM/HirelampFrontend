<template>
  <body class="">
    <div class="md:px-14">
      <h1 class="flex justify-center md:text-3xl p-4 font-bold bt-medium">
        Our Mentors
      </h1>

      <div class="pb-7 px-6 md:px-0">
        <SearchBar />
      </div>
      <!-- <TagsNew :searchTags="this.searchTags" /> -->
      <div class="flex flex-col md:flex-row md:space-x-8 pb-8 justify-center">
        <div class="filter">
          <select
            class="text-gray-800 hover:bg-gray-200 duration-300 bg-transparent font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            v-bind:class="{
              'text-gray-900 border-b-2  border-gray-200':
                openTab === 0 || openTab === 2,
              'text-custom-blue border-b-2 border-custom-blue':
                openTab === 1 || selectedCategoryLocation !== 'All',
            }"
            v-on:click="toggleTabs(1)"
            v-model="selectedCategoryLocation"
          >
            <option value="All">Country</option>
            <option
              v-for="value in listTheLocations"
              :key="value.id"
              :value="value"
            >
              {{ value }}
            </option>
          </select>
        </div>
        <div class="filter">
          <select
            class="text-gray-800 hover:bg-cyan-400 bg-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            v-model="selectedCategoryCompany"
            v-bind:class="{
              'text-gray-900 border-b-2  border-gray-200':
                openTab === 0 || openTab === 1,
              'text-custom-blue border-b-2 border-custom-blue':
                openTab === 2 || selectedCategoryCompany !== 'All',
            }"
            v-on:click="toggleTabs(2)"
          >
            <option value="All">Company</option>
            <!-- <span v-for="value in concatList" :key="value.id" :value="value"> -->
            <!-- <span v-for="(value, key) in concatList" :key="key.id" :value="key"> -->
            <option
              v-for="value in companiesForSelectedLocation"
              :key="value.id"
              :value="value"
            >
              <span>
                {{ value }}
              </span>
            </option>
            <!-- </span> -->
          </select>
        </div>
      </div>
      <div
        v-if="this.isLoading == true"
        class="flex align-center justify-center p-8"
      >
        <Loading />
      </div>

      <ul
        class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center items-center pb-14 pt-4 px-2 md:px-0"
      >
        <li
          v-for="mentorData in filterMentorDatas"
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
    <div class="z-50">
      <Footer />
    </div>
  </body>
</template>

<script>
import axios from "axios";
// import DropDownMenu from "../components/DropDownMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import Loading from "../components/Loading.vue";
import Footer from "../components/Footer.vue";
// import TagsNew from "../components/TagsNew.vue";
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
      selectedCategoryLocation: "All",
      selectedCategoryCompany: "All",
      openTab: 0,
      mentorId: "",
      categoriesCompanies: [],
      categoriesLocations: [],
      myObject: {
        Tshirts: ["XS", "S", "M"],
        Pants: ["M", "2XL", "3XL"],
        Coats: ["XS", "M"],
      },
      jaja1: [],
      jaja: [],
      categories: [],
    };
  },

  components: {
    Footer,
    SearchBar,
    Loading,
    // TagsNew,
    mentorRequest,
    // DropDownMenu,
  },

  mounted() {
    this.getMentorDatas();
    this.getMentorCategories();
  },

  computed: {
    //returns the concatenated list of all options available for the selected category
    concatList() {
      var locations = Object.keys(this.categories);

      var companies = Object.values(this.categories);

      var concatList = [];
      for (var i = 0; i < locations.length; i++) {
        for (var j = 0; j < companies[i].length; j++) {
          concatList.push(companies[i][j]);
        }
      }
      console.log(concatList);
      return concatList;
    },

    //returns the list of companies for the selected location
    listTheCompanies() {
      var vm = this;
      var locations = vm.selectedCategoryLocation;
      // var companies = vm.selectedCategoryCompany;
      if (locations === "All") {
        return vm.concatList;
      } else {
        return vm.categories[locations];
      }
    },

    listTheLocations() {
      var vm = this;
      var companies = vm.selectedCategoryCompany;
      if (companies === "All") {
        console.log("asdasdas");
        console.log(vm.jaja);
        // if companies is all, return the list of locations

        return vm.jaja;
      } else {
        console.log(vm.categories[companies]);
        console.log(vm.categories);
        console.log(companies);
        // check in which array the vm.categories[companies] is and return the key of that array
        for (var key in vm.categories) {
          if (vm.categories[key].includes(companies)) {
            //split the array and return the key of that array
            var splitArray = key.split(" ");
            // console.log(splitArray);
            console.log(splitArray[0]);

            return splitArray;
          }
        }

        return vm.splitArray;
      }
    },

    companiesForSelectedLocation() {
      var vm = this;
      var locations = vm.selectedCategoryLocation;
      if (locations === "All") {
        return vm.concatList;
      } else {
        return vm.categories[locations];
      }
    },

    locationsForSelectedCompany() {
      var vm = this;
      var companies = vm.selectedCategoryCompany;
      if (companies === "All") {
        console.log(vm.jaja);
        return vm.jaja;
      } else {
        return vm.categories[companies];
      }
    },

    // locationsForSelectedCompany() {
    //   var vm = this;
    //   var companies = vm.selectedCategoryCompany;
    //   if (companies === "All") {
    //     return vm.categoriesLocations;
    //   } else {
    //     return vm.categoriesLocations.filter(function (categoriesLocations) {
    //       return categoriesLocations.name === companies;
    //     });
    //   }
    // },

    // filterMentorDatas: function () {
    //   var vm = this;
    //   var locations = vm.selectedCategoryLocation;
    //   var companies = vm.selectedCategoryCompany;
    //   if (locations === "All" && companies === "All") {
    //     return vm.mentorDatas;
    //   } else {
    //     return vm.mentorDatas.filter(function (mentorDatas) {
    //       return (
    //         mentorDatas.currentCompany === companies &&
    //         mentorDatas.location === locations
    //       );
    //     });
    //   }

    //   // var companies = vm.selectedCategoryCompany;
    // },
    filterMentorDatas: function () {
      var vm = this;
      var locations = vm.selectedCategoryLocation;
      var companies = vm.selectedCategoryCompany;

      if (locations === "All" && companies === "All") {
        return vm.mentorDatas;
      } else if (locations === "All") {
        return vm.mentorDatas.filter(function (mentorDatas) {
          return mentorDatas.currentCompany === companies;
        });
      } else if (companies === "All") {
        return vm.mentorDatas.filter(function (mentorDatas) {
          return mentorDatas.location === locations;
        });
      } else {
        return vm.mentorDatas.filter(function (mentorDatas) {
          return (
            mentorDatas.location === locations &&
            mentorDatas.currentCompany === companies
          );
        });
      }
    },
  },

  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    async getMentorDatas() {
      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/experts/"
        )
        .then((response) => {
          this.mentorDatas = response.data;

          this.isLoading = false;
          localStorage.getItem("userEmail")
            ? (this.email = localStorage.getItem("userEmail"))
            : null;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getMentorCategories() {
      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/filter/company/"
        )
        .then((response) => {
          console.log(response);
          this.categories = response.data;
          console.log(this.categories);

          // get the array inside the object that's called "USA"

          this.jaja = Object.keys(this.categories);
          this.jaja1 = Object.values(this.categories);
          console.log(this.jaja);
          console.log(this.jaja1);

          // for (var key in this.categories) {
          //   this.categoriesLocations.push(key);
          //   this.categoriesCompanies.push(this.categories[key]);
          //   console.log(this.categoriesLocations);
          //   console.log(this.categoriesCompanies);
          // }

          // console.log(this.categoriesCompanies);

          // for (var key in this.categories) {
          //   this.categoriesLocations.push(key);
          //   this.categoriesCompanies.push(this.categories[key]);
          //   console.log(this.categoriesLocations);
          //   console.log(this.categoriesCompanies);
          // }

          // take the name of the array and push it to the selectedCategoryLocation
          // for (var i = 0; i < this.categoriesLocations.length; i++) {
          //   this.catLocation.push(this.categoriesLocations[i]);
          // }

          // for (var j = 0; j < this.categoriesCompanies.length; j++) {
          //   this.catCompany.push(this.categoriesCompanies[j].name);
          // }

          // console.log(this.catCompany);

          // console.log(this.catLocation);

          // change the name of company array to 123
        })
        .catch((error) => {
          console.log(error);
        });
      this.isLoading = false;
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
            this.mentorDatas.firstName + "-" + this.mentorDatas.lastName;
          // router push to mentor details with fullname as :str

          //pass the data with router
          this.$router.push({
            path: "/mentor/" + this.fullname,
            params: {
              id: mentorId,
            },
          });
          window.sessionStorage.setItem("mentorId", mentorId);

          // this.$router.push({
          //   path: "/mentor/" + this.fullname,
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
