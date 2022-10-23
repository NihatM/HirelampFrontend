<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-center p-4 relative">
        <div class="relative">
          <div class="image-preview">
            <img
              v-if="newImage !== null"
              class="preview rounded-full h-32 w-32"
              :src="newImage"
            />
            <img
              v-if="newImage == null"
              class="preview rounded-full h-32 w-32"
              :src="mentorDatas.profileImg"
            />
          </div>
        </div>

        <div
          class="z-50 absolute rounded-full h-32 w-32 cursor-pointer"
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
            class="nav-item flex"
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
            class="nav-item"
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
              v-model="mentorDatas.phone"
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
          <!-- <div class="flex flex-col space-y-4">
            <div class="flex flex-col space-y-2">
              <p class="text-xs text-gray-400">Company</p>
              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Company"
                v-model="mentorDatas.company"
              />
            </div>
            <div class="flex flex-col space-y-2">
              <p class="text-xs text-gray-400">Position</p>
              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Position"
                v-model="mentorDatas.position"
              />
            </div>
            <div class="flex flex-col space-y-2">
              <p class="text-xs text-gray-400">Industry</p>
              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Industry"
                v-model="mentorDatas.industry"
              />
            </div> -->

          <div class="flex flex-row space-x-4">
            <div class="flex flex-col space-y-2">
              <p class="text-left text-xs text-gray-400">Field</p>
              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Field"
                v-model="mentorDatas.field"
              />
            </div>
            <div class="flex flex-col space-y-2">
              <p class="text-left text-xs text-gray-400">Company</p>

              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Company"
                v-model="mentorDatas.company"
              />
            </div>

            <div class="flex flex-col space-y-2">
              <p class="text-left text-xs text-gray-400">Country or City</p>

              <input
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Country or City"
                v-model="mentorDatas.region"
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

        <!-- dropdown -->
        <div class="flex flex-row py-8 px-4">
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
                Job search consultation
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
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="checkbox-item-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {{ services }}
                    </label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <input
                      checked=""
                      id="checkbox-item-2"
                      type="checkbox"
                      value=""
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
                      value=""
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
        </div>
        <div class="px-4 pb-2">
          <p class="font-bold text-left pb-2">About me</p>
          <div class="flex flex-row space-x-4 w-full">
            <div class="flex flex-col justify-center w-full space-y-2">
              <p class="text-left text-xs text-gray-400">Short description</p>
              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Field"
                v-model="mentorDatas.shortDescription"
              />
            </div>
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">I worked for</p>

              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Company"
                v-model="mentorDatas.workedFor"
              />
            </div>
          </div>
          <div class="flex flex-row space-x-4 pt-8">
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">My experience</p>
              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Field"
                v-model="mentorDatas.experience"
              />
            </div>
            <div class="flex flex-col w-full space-y-2">
              <p class="text-left text-xs text-gray-400">My education</p>

              <textarea
                type="text"
                class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                placeholder="Company"
                v-model="mentorDatas.education"
              />
            </div>
          </div>
          <div class="w-full py-8">
            <button
              @click="updateMentor(mentorDatas.userID)"
              class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
            >
              <p class="text-white">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mentorDatas: "",
      file: null,
      newImage: "",
      openTab: 1,
      dropDown: false,
      services: "",

      careerCoaching: false,
      mockInterview: false,
      servicesArray: [
        "Job search consultation",
        "Career coaching",
        "Mock interview",
      ],
    };
  },

  beforeMount() {
    this.getMentorUserID();
    this.divideServices();
  },

  methods: {
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
    },

    // at click div open input tag
    imageInput() {
      document.getElementById("imageInput").click();
    },

    // onFileSelected(event) {
    //   this.file = event.target.files[0];
    //   console.log(this.file);
    // },
    // onImageSelected(event) {
    //   this.newImage = event.target.files[0];
    //   console.log(this.newImage);
    // },
    // changeImage() {
    //   document.getElementById("fileUpload").click();
    //   //this.mentorDatas.profileImg = this.newImage;
    //   console.log(this.newImage);
    //   console.log(this.mentorDatas.profileImg);
    // },

    // push updates to database
    updateMentor(userID) {
      const formData = new FormData();
      formData.append("firstName", this.mentorDatas.firstName);
      formData.append("lastName", this.mentorDatas.lastName);
      formData.append("phone", this.mentorDatas.phone);
      formData.append("email", this.mentorDatas.email);
      formData.append("linkedinUrl", this.mentorDatas.linkedinUrl);
      formData.append("profileImg", this.mentorDatas.profileImg);
      formData.append("cv", this.file);
      axios
        .put(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentor/" +
            userID +
            "/",
          formData
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getMentorUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
      this.getMentorData(this.userID);
    },

    async getMentorData(userID) {
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
      formData.append("phone", this.mentorDatas.phone);
      formData.append("email", this.mentorDatas.email);
      formData.append("linkedinUrl", this.mentorDatas.linkedinUrl);
      formData.append("cv", this.mentorDatas.cv);
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
