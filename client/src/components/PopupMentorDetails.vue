<template>
  <div class="overflow-hidden bg-white w-671 p-9 pt-4 rounded-xl">
    <div class="">
      <div class="flex justify-end items-end content-end">
        <button
          type="button"
          class="close font-bold"
          @click="$emit('close') && scrollTrue()"
        >
          <img src="../assets/closeButton.svg" alt="" />
        </button>
      </div>
      <p class="font-black text-2xl flex justify-center pb-9">
        Choose the date and time
      </p>
    </div>
    <div class="w:full md:w-full flex flex-col lg:flex-row justify-center">
      <div v-if="!showContact">
        <v-date-picker
          is-expanded
          :attributes="attributes"
          @dayclick="onDayClick"
          v-model="date"
          mode="dateTime"
          :disabled-dates="
            { weekdays: this.avDays } || { weekdays: this.todayDate }
          "
          :min-date="new Date(new Date().getTime() + 60 * 60 * 24 * 1000)"
          :minute-increment="30"
          :valid-hours="this.avHours"
          is24hr
        />
        <h1 class="py-2"></h1>
        <!-- <button
            :disabled="this.wrongTime === true"
            @click="sendCalendarData"
            class="cursor-not-allowed disabled inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-custom-blue rounded-2xl hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> -->
      </div>
      <div
        v-if="!showContact"
        class="flex flex-col justify-center align-middle items-center"
      >
        <p v-if="date == ''" class="font-extrabold text-md">
          Please choose a time slot to continue
        </p>
        <p v-if="date !== ''" class="font-extralight text-md">Chosen time</p>
        <p v-if="showPST == false" class="pt-3 pb-4 font-bold">
          {{ this.testDate }}
        </p>
        <p v-if="showPST == true && date !== ''" class="pt-3 pb-4 font-bold">
          {{ this.testDate }} PST timezone
        </p>
        <button
          :disabled="this.wrongTime === true || date === ''"
          @click="sendCalendarData"
          class="cursor-not-allowed disabled inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-full border-1 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-gray-50 duration-300"
        >
          Continue
        </button>
      </div>
      <div
        class="flex align-middle justify-center items-center content-center"
        v-show="showContact"
      >
        <form @submit.prevent="sendContactData">
          <div class="flex flex-col align-center justify-center">
            <h1
              class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-gray-800 text-left md:mt-0 mb-4 mt-1 sm:mt-0"
            >
              Information for the mentor
            </h1>
          </div>
          <div class="flex flex-col align-center justify-center">
            <input
              type="text"
              class="border border-gray-400 rounded-2xl p-2"
              placeholder="Full name"
              v-model="fullName"
              required
            />
            <span class="py-1" />
            <input
              type="text"
              class="border border-gray-400 rounded-2xl p-2"
              placeholder="Email"
              v-model="email"
              required
            />
            <span class="py-1" />
            <input
              required
              type="tel"
              class="border border-gray-400 rounded-2xl p-2 appearance-none"
              placeholder="Phone number"
              v-model="phone"
            />
            <span class="py-1" />
            <input
              required
              type="text"
              class="border border-gray-400 rounded-2xl p-2"
              placeholder="Subject"
              v-model="industry"
            />
            <span class="py-1" />
            <input
              required
              type="url"
              class="border border-gray-400 rounded-2xl p-2"
              placeholder="Your LinkedIn profile"
              v-model="linkedinUrl"
            />
            <span class="py-1" />
            <textarea
              required
              class="border border-gray-400 rounded-2xl p-2"
              placeholder="What do you want to talk about?"
              v-model="message"
            ></textarea>
            <span class="py-1" />
            <!-- <input
              type="file"
              accept="application/pdf"
              class="border border-gray-400 bg-white text-gray-400 rounded-2xl p-2"
              placeholder="Upload CV"
              required
              @change="onFileSelected"
            />
            <span class="text-gray-400 text-xs italic text-left"
              >Upload CV (pdf)</span
            >
            <span class="py-1" /> -->
          </div>
          <div class="w-full bottom-0 pt-2 flex justify-end">
            <button
              submit
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-custom-blue rounded-2xl hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";
export default {
  name: "PopupMentorDetails",
  props: {
    modalFalse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    // console.log(this.mentorData);
    return {
      wrongTime: false,
      chosenDate: "",
      days: [],
      maxChar: 50,
      mentorData: "",
      fullName: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
      linkedinUrl: "",
      file: null,
      date: "",
      validHours: [12, 13, 14],
      avDays: [],
      avHours: [],
      avDates: {},
      showContact: false,
      bookedDate: new Date(),
      todayDate: new Date(),
      scrollVisible: false,
      mentorfullName: "",
      testDate: "",
      showPST: false,
    };
  },
  components: {
    // Footer,
    // LoadingDetails,
    // DatePicker
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  // validations() {
  //   return {
  //     email: { email, required },
  //     fullName: { required },
  //   };
  // },
  mounted() {
    this.autoFillUserData();
    this.ifAdil();
  },
  beforeMount() {
    this.getMentorData();
  },

  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      this.splitDate();
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },

  methods: {
    searchTag(searchtag) {
      this.$router.push("/search/" + searchtag);
    },
    validateEmail() {
      const email = this.email;
      const re =
        //eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        this.toast.error("Please enter a valid email address");
      }
    },
    showErrorToast(message) {
      this.toast.error(message, {
        position: "top-right",
        duration: 3000,
        action: {
          text: "Dismiss",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },

    autoFillUserData() {
      localStorage.getItem("userEmail")
        ? this.email == localStorage.getItem("userEmail")
        : null;
      console.log(this.email);
      localStorage.getItem("userFullname")
        ? this.fullName == localStorage.getItem("userFullname")
        : null;
    },

    sendCalendarData() {
      this.showContact = true;
    },
    showToast() {
      this.toast.success("Message sent successfully! Please check your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //close modal
      this.$emit("close");
    },

    splitDate() {
      this.testDate = this.date.toString().slice(0, 24);

      console.log(this.testDate);
    },

    ifAdil() {
      if (
        localStorage.getItem("mentorId") ===
        "72a64aa8-8973-4a79-b177-9abd28aa7d08"
      ) {
        this.showPST = true;
      }
    },

    getMentorData() {
      const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      this.currentURL = window.location.href;
      let counter = 0;
      let i = 0;
      while (counter < 4) {
        i++;
        if (this.currentURL[i] === "/") {
          counter++;
        }
      }
      // let str = "";
      // if (this.currentURL[this.currentURL.length] === "/")
      //   str = this.currentURL.slice(i + 1, this.currentURL.length - 1);
      // else str = this.currentURL.slice(i + 1, this.currentURL.length);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            localStorage.getItem("mentorId")
        )
        .then((response) => {
          console.log(response.data);

          this.mentorData = response.data;
          // mentor full name
          this.mentorfullName =
            this.mentorData.firstName + " " + this.mentorData.lastName;

          this.newMentorTags = this.mentorData.tags.split(",");
          for (let i = 0; i < this.newMentorTags.length; i++) {
            this.newMentorTags[i] = this.newMentorTags[i].trim();
          }
          this.mentorData.tags = this.newMentorTags;
          console.log(this.mentorData);
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          let av = [];
          av.push(this.mentorData.availability.split(";"));
          let avDays = [];
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // transforming availability into object
          av[0].forEach((element) => {
            let test = element.slice(4, element.length);
            test = test.split(",");
            for (let i = 0; i < test.length; i++) test[i] = Number(test[i]);
            this.avDates[element.slice(0, 3)] = test; //available time slots in object form
          });
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //getting the available weekdays
          for (let i = 0; i < av.length; i++) {
            av[i].forEach((date) => {
              avDays.push(date.slice(0, 3));
            });
          }
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //transforming the shortcut weekdays into the array weekday indexes
          for (let i = 0; i < 7; i++) {
            if (!avDays.includes(weekDays[i])) {
              this.avDays.push(i + 1);
            }
          }
          this.isLoading = false;
        });
    },
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days = [];
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
      this.chosenDate = String(this.days[0].date).slice(0, 3);
      this.avHours = this.filterAvailability(this.chosenDate);
      console.log(this.avDays);
      let currentDate = new Date();
      // set hour to 0 if time is not selected

      // currentDate.setHours(0, 0, 0, 0);
      if (
        this.days[0].date.getTime() <= currentDate.getTime() ||
        this.avDays.includes(this.days[0].date.getDay() + 1)
      ) {
        this.wrongTime = true;
        this.showErrorToast("Date is unavailable!");
      } else {
        this.bookedDate = this.days[0].date.toISOString();
        //check if the selected time is 0 or not
        // if (this.bookedDate.slice(11, 13) === "00") {
        //   this.bookedDate = this.bookedDate.slice(0, 11) + "12:00:00.000Z";
        // }
        console.log(this.bookedDate, this.days[0].date);
        this.wrongTime = false;
      }
    },
    filterAvailability(day) {
      console.log(this.avDates[day]);
      // console.log(this.avDates);
      return this.avDates[day];
    },
    onFileSelected(event) {
      this.file = event.target.files[0];
    },
    async sendContactData() {
      this.validateEmail();
      console.log(this.bookedDate);
      //eslint-disable-next-line
      // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      //   this.showErrorToast("Email is not valid");
      // }
      if (this.fullName === "" || this.email === "" || this.phone === "") {
        this.showErrorToast("Invalid request");
      } else {
        const formData = new FormData();
        console.log(
          this.fullName,
          this.email,
          this.phone,
          this.message,
          this.mentorfullName,
          this.file,
          new Date(
            new Date(this.date).getTime() + 1000 * 60 * 60 * 4
          ).toISOString()
        );
        console.log(this.mentorfullName);
        formData.append("fullName", this.fullName);
        formData.append("email", this.email);
        formData.append("mobilePhone", this.phone);
        formData.append("industry", this.industry);
        formData.append("talksAbout", this.message);
        formData.append("linkedinURL", this.linkedinUrl);
        formData.append("bookingDateStr", this.date);
        // formData.append("file", this.file);
        formData.append(
          "bookingDate",
          new Date(
            new Date(this.date).getTime() + 1000 * 60 * 60 * 4
          ).toISOString()
        );

        formData.append("mentorFullName", this.mentorfullName);
        // console.log(this.file.length);
        axios.post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/contactForm/",
          formData

          // {
          //   email: this.email,
          //   mentorFullName: "Orkhan Abbasov",
          //   mobilePhone: this.phone,
          //   fullName: this.fullName,
          //   industry: this.industry,
          //   talksAbout: this.message,
          //   bookingDate: new Date(
          //     new Date(this.date).getTime() + 1000 * 60 * 60 * 4
          //   ).toISOString(),
          //   formData,
          // }
        );
        this.showToast();
        this.fullName = "";
        this.email = "";
        this.phone = "";
        this.industry = "";
        this.message = "";
        this.file = null;
      }
    },
  },
};
</script>
