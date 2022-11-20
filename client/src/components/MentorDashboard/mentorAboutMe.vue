<template>
  <div>
    <div class="flex flex-col">
      <!-- Open modal Popup Calendar -->
      <div class="flex flex-col">
        <!-- create a table with names -->

        <div
          class="fixed z-50 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          v-if="openModal"
        >
          <div
            class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <!--
            Background overlay, show/hide based on modal state.
      
            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <!--
            Modal panel, show/hide based on modal state.
      
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="bg-white px-4 pb-4 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 w-full sm:text-left">
                    <div class="flex justify-between">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Select available slots
                      </h3>
                      <!-- <button @click="this.openModal = false">
                        <img src="" alt="">
                      </button> -->
                      <button
                        type="button"
                        class="close font-bold"
                        @click="this.openModal = false"
                      >
                        <img src="../../assets/closeButton.svg" alt="" />
                      </button>
                    </div>
                    <div class="flex justify-center">
                      <PopupCalendar @sendOption="fetchData" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-4 relative">
        <div class="relative">
          <div class="image-preview">
            <img
              v-if="newImage !== ''"
              class="preview rounded-full h-32 w-32"
              :src="newImage"
            />
            <img
              v-if="newImage == ''"
              class="preview rounded-full h-32 w-32"
              :src="mentorDatas.profileImg"
            />
          </div>
        </div>

        <div
          class="z-40 absolute rounded-full h-32 w-32 cursor-pointer"
          @click="imageInput"
        >
          <input
            type="file"
            id="imageInput"
            @change="previewImage"
            accept="image/*"
            hidden
          />

          <div
            class="absolute h-32 w-32 opacity-70 bg-gray-200 rounded-full"
          ></div>
          <img
            src="../../assets/camera.svg"
            alt=""
            class="rounded-full absolute h-12 w-12 flex justify-center align-middle items-center m-10 opacity-100"
          />
        </div>
      </div>
      <div>
        <p class="bt-md">
          {{ mentorDatas.firstName }} {{ mentorDatas.lastName }}
        </p>
      </div>
      <div class="pb-8">
        <ul
          class="justify-center nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-0 md:mb-4 space-x-4"
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
              >Personal information
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
              >Professional information</a
            >
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col justify-center space-y-8 py-10 px-4 md:px-8"
        v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
        id="tabs-tabContent"
      >
        <div class="space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex">
          <input
            type="text"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="First Name"
            v-model="mentorDatas.firstName"
          />
          <input
            type="text"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Last Name"
            v-model="mentorDatas.lastName"
          />
        </div>
        <div class="space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex">
          <div class="flex flex-col w-full">
            <input
              type="tel"
              class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
              placeholder="Phone number"
              v-model="mentorDatas.phoneNumber"
            />
            <span
              class="text-notif-orange text-xs italic text-left flex justify-start"
              >For internal purposes</span
            >
          </div>
          <div class="flex flex-col w-full">
            <input
              type="email"
              class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
              placeholder="Email"
              v-model="mentorDatas.email"
            />
            <span
              class="text-notif-orange text-xs italic text-left flex justify-start"
              >For internal purposes</span
            >
          </div>
        </div>

        <div class="w-full">
          <button
            @click="updateMentor(mentorDatas.userID)"
            class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
          >
            <p class="text-white">Save</p>
          </button>
        </div>
      </div>
      <div
        class=""
        v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
      >
        <div class="flex flex-row space-x-6 px-4">
          <div class="flex flex-col md:flex-row space-y-4">
            <div class="flex md:block space-x-4">
              <div class="flex flex-col space-y-2">
                <p class="text-left text-xs text-gray-400">Field</p>
                <input
                  type="text"
                  class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                  placeholder="Field"
                  v-model="mentorDatas.position"
                />
              </div>
              <div class="flex flex-col space-y-2">
                <p class="text-left text-xs text-gray-400">Company</p>

                <input
                  type="text"
                  class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                  placeholder="Company"
                  v-model="mentorDatas.currentCompany"
                />
              </div>
            </div>
            <div class="flex md:block space-x-4">
              <div class="flex flex-col space-y-2">
                <p class="text-left text-xs text-gray-400">Country or City</p>

                <input
                  type="text"
                  class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                  placeholder="Country or City"
                  v-model="mentorDatas.location"
                />
              </div>

              <div class="flex flex-col space-y-2">
                <p class="text-left text-xs text-gray-400">Your services fee</p>

                <input
                  type="text"
                  class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                  placeholder="Your service fee"
                  v-model="mentorDatas.price"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row py-8 px-4 space-x-8">
          <div class="">
            <div class="flex flex-col space-y-2">
              <p class="text-left text-xs text-gray-400">
                Choose your service(s)
              </p>

              <button
                @click="dropDownFunction()"
                id="dropdownCheckboxButton"
                class="text-white bg-custom-blue hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Please select at least one
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- Dropdown menu -->
            <div
              v-if="this.dropDown == true"
              id="dropdownDefaultCheckbox"
              class="z-10 w-full bg-white rounded-b-2xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              >
                <li>
                  <div class="flex items-center">
                    <input
                      id="checkbox-item-1"
                      type="checkbox"
                      placegolder="Services"
                      value="Job Search Consultation"
                      v-model="selectedServices"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Job search consultation
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input
                      id="checkbox-item-2"
                      type="checkbox"
                      value="Career Coaching"
                      v-model="selectedServices"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Career coaching</label
                    >
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input
                      id="checkbox-item-3"
                      type="checkbox"
                      value="Mock Interview"
                      v-model="selectedServices"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-3"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Mock interview</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col space-y-2">
            <p class="text-left text-xs text-gray-400">
              Choose your available time
            </p>

            <button
              @click="this.openModal = true"
              class="text-white bg-custom-blue hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Select your available time
            </button>
          </div>
        </div>
        <!-- dropdown -->
        <!-- <div class="flex flex-row py-8 px-4">
          <div class="">
            <div class="flex flex-col space-y-2">
              <p class="text-left text-xs text-gray-400">
                Select your available time
              </p>

              <textarea
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                name=""
                id=""
                cols="50"
                rows="5"
                placeholder="Example: Monday 10:00PM - 12:00AM"
              ></textarea>
            </div>
          </div>
        </div> -->
        <div class="px-4 pb-2">
          <p class="font-bold text-left pb-2">About me</p>
          <div class="flex flex-row space-x-4 w-full">
            <div class="flex flex-col justify-center w-full space-y-2">
              <p class="text-left text-xs text-gray-400">Short description</p>
              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Short and clear description about you"
                v-model="mentorDatas.bio"
              />
            </div>
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">I worked for</p>

              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder=" Example: Google, Facebook, etc"
                v-model="mentorDatas.expertise"
              />
            </div>
          </div>
          <div class="flex flex-row space-x-4 pt-8">
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">My experience</p>
              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Example: 5 years of experience in IT"
                v-model="mentorDatas.experience"
              />
            </div>
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">My education</p>

              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Example: BSc from University of Indonesia"
                v-model="mentorDatas.education"
              />
            </div>
          </div>
        </div>
        <div class="w-full py-8 px-4">
          <button
            @click="updateMentor()"
            class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
          >
            <p class="text-white">Save</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PopupCalendar from "../MentorDashboard/PopupCalendar.vue";
export default {
  data() {
    return {
      mentorDatas: "",
      file: null,
      newImage: "",
      openTab: 1,
      dropDown: false,
      services: "",
      openModal: false,
      careerCoaching: false,
      mockInterview: false,
      servicesArray: [
        "Job search consultation",
        "Career coaching",
        "Mock interview",
      ],
      selectedCheckbox: [],
      selectedServices: [],
      newDate: [],
    };
  },
  components: {
    PopupCalendar,
  },

  beforeMount() {
    this.getMentorUserID();
    this.divideServices();
  },

  methods: {
    getSelectedCheckbox() {
      this.selectedServices = [];
      this.servicesArray.forEach((item) => {
        if (this.$refs[item].checked) {
          this.selectedServices.push(item);
        }
      });
    },

    // get emit data
    fetchData(data) {
      //turn obj in string
      this.newDate = JSON.stringify(data);

      this.mentorDatas.availability = this.newDate;
      console.log(this.mentorDatas.availability);
    },

    divideServices() {
      // this.services = this.mentorDatas.services.split(", ");
      console.log(this.services);
    },

    dropDownFunction() {
      this.dropDown = !this.dropDown;
      console.log(this.dropDown);
    },

    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    previewImage(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newImage = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.mentorDatas.profileImg = input.files[0];
      }
      // if new image is not uploaded, use the old image
      // else {
      //   this.newImage = this.mentorDatas.profileImg;
      // }
    },

    // at click div open input tag
    async imageInput() {
      document.getElementById("imageInput").click();
    },

    // push updates to database
    async updateMentor() {
      // if there is a new image then change the image to base64

      if (this.newImage) {
        // reader = new FileReader();
        const reader = new FileReader();
        reader.readAsDataURL(this.mentorDatas.profileImg);
        reader.onload = () => {
          this.mentorDatas.profileImg = reader.result;

          console.log(this.mentorDatas.profileImg);

          fetch(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentor/" +
              this.userID +
              "/",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                profileImg: this.mentorDatas.profileImg,
              }),
            }
          );
        };
      }

      const formData = new FormData();

      this.mentorDatas.services = this.selectedServices.toString();

      this.mentorDatas.services = this.mentorDatas.services.replace(/,/g, ", ");

      //if null then set to empty string
      for (let key in this.mentorDatas) {
        if (this.mentorDatas[key] == null && key != "profileImg") {
          console.log(key, "is null");
          this.mentorDatas[key] = "N/A";
        }
      }

      formData.append("firstName", this.mentorDatas.firstName);
      formData.append("lastName", this.mentorDatas.lastName);
      formData.append("phoneNumber", this.mentorDatas.phoneNumber);
      formData.append("email", this.mentorDatas.email);
      formData.append("bio", this.mentorDatas.bio);
      formData.append("currentCompany", this.mentorDatas.currentCompany);
      formData.append("services", this.mentorDatas.services);
      formData.append("expertise", this.mentorDatas.expertise);
      formData.append("experience", this.mentorDatas.experience);
      formData.append("education", this.mentorDatas.education);

      formData.append("availability", this.mentorDatas.availability);
      // formData.append("CV", this.file);

      setTimeout(() => {
        axios
          .put(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentor/" +
              this.userID +
              "/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
    },

    async getMentorUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
      this.getMentorData(this.userID);
    },

    async getMentorData(userID) {
      console.log(userID);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            userID +
            "/"
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendNewUserData() {
      const formData = new FormData();
      formData.append("profileImg", this.file);
      formData.append("firstName", this.mentorDatas.firstName);
      formData.append("lastName", this.mentorDatas.lastName);
      formData.append("phoneNumber", this.mentorDatas.phoneNumber);
      formData.append("email", this.mentorDatas.email);
      // formData.append("linkedinUrl", this.mentorDatas.linkedinUrl);
      // formData.append("CV", this.mentorDatas.CV);
      axios
        .put(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            this.userID +
            "/",
          formData
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
