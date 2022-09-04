<template>
  <div class="bg-white w-671 p-9 rounded-xl">
    <div>
      <p class="font-black pb-9">Choose the date and time</p>
    </div>
    <div class="w:full md:w-full flex flex-col lg:flex-row">
      <div>
        <!-- <h1
          class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-left md:mt-0 mb-4 mt-1 sm:mt-0"
        >
          Available slots
        </h1> -->
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
      <div class="flex flex-col justify-center align-middle items-center">
        <p class="font-extralight text-md">Chosen time</p>
        <p class="pt-3 pb-4 font-bold">{{ date }}</p>
        <button
          :disabled="this.wrongTime === true"
          @click="sendCalendarData"
          class="cursor-not-allowed disabled inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-full border-1 border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-gray-50 duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import axios from "axios";
export default {
  data() {
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
      file: null,
      date: new Date(),
      validHours: [12, 13, 14],
      avDays: [],
      avHours: [],
      avDates: {},
      showContact: false,
      bookedDate: new Date(),
      todayDate: new Date(),
    };
  },

  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },

  methods: {
    sendCalendarData() {
      this.showContact = true;
    },

    showToast() {
      this.toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      let str = "";
      if (this.currentURL[this.currentURL.length] === "/")
        str = this.currentURL.slice(i + 1, this.currentURL.length - 1);
      else str = this.currentURL.slice(i + 1, this.currentURL.length);
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            str
        )
        .then((response) => {
          console.log(response.data);
          this.mentorData = response.data;
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
      if (
        this.days[0].date.getTime() <= currentDate.getTime() ||
        this.avDays.includes(this.days[0].date.getDay() + 1)
      ) {
        this.wrongTime = true;
        this.showErrorToast("You can't book a date in the past!");
      } else {
        this.bookedDate = this.days[0].date.toISOString();
        console.log(this.bookedDate, this.days[0].date);
        this.wrongTime = false;
      }
    },
    filterAvailability(day) {
      console.log(this.avDates[day]);
      // console.log(this.avDates);
      return this.avDates[day];
    },

    async sendContactData() {
      this.validateEmail();
      //eslint-disable-next-line
      // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      //   this.showErrorToast("Email is not valid");
      // }
      if (this.fullName === "" || this.email === "" || this.phone === "") {
        this.showErrorToast("Invalid request");
      } else {
        const mentorfullName =
          this.mentorData.firstName + " " + this.mentorData.lastName;
        const formData = new FormData();
        formData.append("fullName", this.fullName);
        formData.append("email", this.email);
        formData.append("mobilePhone", this.phone);
        formData.append("industry", this.industry);
        formData.append("talksAbout", this.message);
        formData.append("file", this.file);
        formData.append(
          "bookingDate",
          new Date(
            new Date(this.date).getTime() + 1000 * 60 * 60 * 4
          ).toISOString()
        );
        formData.append("mentorFullName", mentorfullName);
        console.log(formData);
        await axios.post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/contactForm/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
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

<style></style>
