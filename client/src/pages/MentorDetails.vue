<template>
  <body class="px-6 lg:px-32 py-4">
    <div class="container mx-auto">
      <div
        v-if="showModal"
        style="
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        "
        class="z-50 absolute inset-0 flex items-center justify-center bg-opacity-90 bg-gray-800 backdrop-blur-md"
      >
        <PopupMentorDetails @close="closeModal" />
      </div>
    </div>
    <div class="pb-44">
      <div class="flex flex-col lg:flex-row gap-x-9">
        <!-- <div
        v-if="this.isLoading"
        class="flex align-center justify-center p-8 bg-gradient-to-tl from-gray-200 to-gray-100 shadow-md rounded-2xl w-auto mx-auto flex-col xl:items-stretch xl:flex-row col-end-1"
      >
        <LoadingDetails />
      </div> -->

        <!-- Mobile version -->
        <div class="">
          <div class="visible lg:hidden flex flex-col items-center">
            <!-- Image emplacement -->
            <div
              class="bg-gray-50 flex flex-col lg:flex-row items-center lg:items-start w-350 md:w-493 lg:w-350 h-111 rounded-br-none lg:rounded-xl rounded-bl-none"
            >
              <div
                class="bg-card-blue w-350 md:w-493 lg:w-350 h-111 flex justify-center rounded-t-xl pt-8"
              >
                <div class="h-44 w-44 rounded-full relative -mb-24 px-3">
                  <button class="z-50">
                    <img
                      v-bind:src="mentorData.profileImg"
                      alt=""
                      class="border-white hover:border-custom-blue duration-300 border-2 rounded-full h-50 w-40 content-center flex justify-center md:h-40 md:w-100 xl:w-50 lg:w-50"
                    />
                  </button>
                </div>
              </div>
              <div class="flex flex-col lg:text-left mt-12">
                <h1
                  class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-black md:mt-0 mt-4 my-2 sm:mt-0"
                >
                  {{ mentorData.firstName }} {{ mentorData.lastName }}
                </h1>
                <p class="font-extralight">
                  {{ mentorData.position }}
                </p>
                <div class="py-3 flex justify-center">
                  <img
                    src="../assets/0stars.svg"
                    v-if="this.rating == 0"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <img
                    src="../assets/1star.svg"
                    v-if="this.rating == 1"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <img
                    src="../assets/2stars.svg"
                    v-if="this.rating == 2"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <img
                    src="../assets/3stars.svg"
                    v-if="this.rating == 3"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <img
                    src="../assets/4stars.svg"
                    v-if="this.rating == 4"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <img
                    src="../assets/5stars.svg"
                    v-if="this.rating == 5"
                    alt=""
                    class="pr-2 w-50"
                  />
                  <p v-if="mentorData">
                    ( {{ mentorData.ratings.length }} reviews)
                  </p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl px-6">
                <div
                  class="flex flex-row pb-3 items-center justify-center space-x-9"
                >
                  <div class="flex flex-row items-start">
                    <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                    <p class="bt-book">{{ mentorData.currentCompany }}</p>
                  </div>
                  <div class="flex flex-row items-start">
                    <img src="../assets/locationicon.svg" alt="" class="pr-2" />

                    <p class="bt-book">{{ mentorData.location }}</p>
                  </div>
                </div>
                <p class="text-center bt-smalltext pb-6">
                  {{ mentorData.bio }}
                </p>
                <div class="flex justify-center items-center pt-2 pb-4">
                  <p class="text-price-green bt-md">${{ mentorData.price }}</p>
                  <p class="text-2xl font-extralight">&nbsp;Per session</p>
                </div>

                <div class="flex justify-center pb-4">
                  <button
                    @click="showModal = true"
                    class="h-11 w-10/12 rounded-full text-gray-50 bg-custom-blue hover:bg-price-green duration-300 text-xl font-bold px-2"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
            <!-- Content Card emplacement -->
          </div>

          <div class="hidden lg:visible lg:flex flex-col lg:items-center">
            <!-- Image emplacement -->
            <div class="">
              <div class="flex flex-col lg:items-center">
                <!-- Image emplacement -->
                <div
                  class="bg-card-blue flex w-96 lg:w-400 2xl:w-493 h-399 rounded-xl rounded-bl-none pt-8"
                >
                  <div class="h-44 w-44 rounded-full relative -mb-24 px-3">
                    <button class="z-50">
                      <img
                        v-bind:src="mentorData.profileImg"
                        alt=""
                        class="border-white hover:border-custom-blue duration-300 border-2 rounded-full h-50 w-40 content-center flex justify-center md:h-40 md:w-100 xl:w-50 lg:w-50"
                      />
                    </button>
                  </div>
                  <div class="flex flex-col text-left">
                    <h1
                      class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-black md:mt-0 mt-4 my-2 sm:mt-0"
                    >
                      {{ mentorData.firstName }} {{ mentorData.lastName }}
                    </h1>
                    <p class="font-extralight">
                      {{ mentorData.position }}
                    </p>
                    <div class="py-2 flex">
                      <img
                        src="../assets/0stars.svg"
                        v-if="this.rating == 0"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <img
                        src="../assets/1star.svg"
                        v-if="this.rating == 1"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <img
                        src="../assets/2stars.svg"
                        v-if="this.rating == 2"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <img
                        src="../assets/3stars.svg"
                        v-if="this.rating == 3"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <img
                        src="../assets/4stars.svg"
                        v-if="this.rating == 4"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <img
                        src="../assets/5stars.svg"
                        v-if="this.rating == 5"
                        alt=""
                        class="pr-2 w-50"
                      />
                      <p v-if="mentorData">
                        ( {{ mentorData.ratings.length }} reviews)
                      </p>
                    </div>
                    <!-- <p>* * * * * (252 reviews)</p> -->
                  </div>
                </div>
                <!-- Content Card emplacement -->
                <div
                  class="shadow-2xl rounded-xl w-96 lg:w-400 2xl:w-493 h-399 pb-8 px-8 relative pt-5"
                >
                  <div>
                    <div
                      class="flex flex-row pb-3 items-start justify-start space-x-9"
                    >
                      <div class="flex flex-row items-start">
                        <img src="../assets/jobicon.svg" alt="" class="pr-2" />

                        <p class="bt-book">{{ mentorData.currentCompany }}</p>
                      </div>
                      <div class="flex flex-row items-start">
                        <img
                          src="../assets/locationicon.svg"
                          alt=""
                          class="pr-2"
                        />

                        <p class="bt-book">{{ mentorData.location }}</p>
                      </div>
                    </div>
                    <p class="text-left bt-smalltext pb-6">
                      {{ mentorData.bio }}
                    </p>
                    <!-- {{ mentorData.category }} -->
                    <Services :searchCategories="mentorData.category" />

                    <div class="flex justify-center items-center pt-12 pb-4">
                      <p class="text-price-green bt-md">
                        ${{ mentorData.price }}
                      </p>
                      <p class="text-2xl font-extralight">&nbsp;Per session</p>
                    </div>

                    <div class="flex justify-center">
                      <button
                        @click="showModal = true"
                        class="h-11 w-10/12 rounded-full text-gray-50 bg-custom-blue hover:bg-price-green duration-300 text-xl font-bold px-2"
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <p class="text-3xl font-bold text-left pb-8 pt-12">About me</p>
          <div class="text-left flex flex-col gap-y-9">
            <div>
              <div class="flex items-start gap-x-3.5 pb-3.5">
                <img src="../assets/myexpertice.svg" alt="" />
                <p class="text-xl font-bold">Expertise</p>
              </div>
              <p
                v-if="!longTextExpertise && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.expertise.substring(0, 120) }}...
              </p>

              <p
                v-if="longTextExpertise && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.expertise }}
              </p>
              <p class="hidden lg:flex">
                {{ mentorData.expertise }}
              </p>
              <button
                @click="readMoreButton('expertise')"
                class="text-custom-blue py-1.5 rounded-2xl visible lg:hidden"
              >
                {{ readMoreButtonExpertise }}
              </button>
            </div>
            <div>
              <div class="flex items-start gap-x-3.5 pb-3.5">
                <img src="../assets/workedfor.svg" alt="" />
                <p class="text-xl font-bold">Work experience</p>
              </div>

              <p
                v-if="!longTextExperience && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.experience.substring(0, 120) }}...
              </p>

              <p
                v-if="longTextExperience && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.experience }}
              </p>
              <p class="hidden lg:flex">
                {{ mentorData.experience }}
              </p>
              <button
                @click="readMoreButton('experience')"
                class="text-custom-blue py-1.5 rounded-2xl visible lg:hidden"
              >
                {{ readMoreButtonExperience }}
              </button>
            </div>

            <div>
              <div class="flex items-start gap-x-3.5 pb-3.5">
                <img src="../assets/myeducation.svg" alt="" />

                <p class="text-xl font-bold">Education</p>
              </div>

              <p
                v-if="!longTextEducation && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.education.substring(0, 120) }}...
              </p>

              <p
                v-if="longTextEducation && mentorData"
                class="visible lg:hidden"
              >
                {{ mentorData.education }}
              </p>

              <p class="hidden lg:flex">
                {{ mentorData.education }}
              </p>
              <button
                @click="readMoreButton('education')"
                class="text-custom-blue py-1.5 rounded-2xl visible lg:hidden"
              >
                {{ readMoreButtonEducation }}
              </button>
            </div>

            <div>
              <p class="text-xl font-bold pb-3.5">My verticals</p>
              <!-- <ul
                class="py-2 pr-8 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
                v-for="tag in mentorData.tags"
                :key="tag"
              >
                <li
                  class="cursor-pointer bt-book px-4 py-1.5 bg-gray-200 rounded-full w-max sm:text-sm md:text-base lg:text-md text-left xl:text-md hover:bg-black hover:text-white hover:border-black duration-300"
                >
                  {{ tag }}
                </li>
              </ul> -->
              <TagsNew :searchTags="mentorData.tags" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  <Footer />
</template>

<script>
import { useToast } from "vue-toastification";
import Services from "../components/Services.vue";
import TagsNew from "../components/TagsNew.vue";
import Footer from "../components/Footer.vue";
import PopupMentorDetails from "../components/PopupMentorDetails.vue";
//import LoadingDetails from "../components/LoadingDetails.vue";
import "../assets/main.css";
import axios from "axios";
export default {
  name: "MentorDetails",
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
      readMore: true,
      jaja: false,
      textLength: 0,
      readMoreButtonText: "Read more",
      readMoreButtonExpertise: "Read more",
      readMoreButtonExperience: "Read more",
      readMoreButtonEducation: "Read more",

      shortText: true,
      longText: false,
      checkExpertise: false,
      checkEducation: false,
      checkExperience: false,
      shortTextExpertise: true,
      longTextExpertise: false,
      shortTextEducation: true,
      longTextEducation: false,
      shortTextExperience: true,
      longTextExperience: false,

      showModal: false,

      open: false,

      isModalVisible: false,
      showRating: "",
      rating: 0,
    };
  },
  components: {
    Footer,
    Services,
    TagsNew,
    //LoadingDetails,
    // DatePicker
    PopupMentorDetails,
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },

  beforeMount() {
    this.getMentorData();
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
    // showModal() {
    //   this.isModalVisible = true;
    // },
    closeModal() {
      this.showModal = false;
    },
    readMoreButton(cat) {
      console.log(cat);
      if (cat == "expertise") {
        // this.shortTextExpertise = !this.shortTextExpertise;
        this.longTextExpertise = !this.longTextExpertise;
        if (!this.longTextExpertise) {
          this.readMoreButtonExpertise = "Read more";
        } else {
          this.readMoreButtonExpertise = "Read less";
        }
      } else if (cat == "education") {
        // this.shortTextEducation = !this.shortTextEducation;
        this.longTextEducation = !this.longTextEducation;

        if (!this.longTextEducation) {
          this.readMoreButtonEducation = "Read more";
        } else {
          this.readMoreButtonEducation = "Read less";
        }
      } else if (cat == "experience") {
        // this.shortTextExperience = !this.shortTextExperience;
        this.longTextExperience = !this.longTextExperience;
        if (!this.longTextExperience) {
          this.readMoreButtonExperience = "Read more";
        } else {
          this.readMoreButtonExperience = "Read less";
        }
      }
    },

    showModalFalse() {
      if (this.modalFalse == true) {
        this.showModal = false;
        //make page not scrollable
      }
    },

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
          this.mentorData = response.data;
          console.log(this.mentorData.ratings.length);
          // this.mentorData.rating = response.data.rating;
          //      this.mentorData.rating = Math.round(this.response.data.rating);
          // console.log(this.mentorData.rating);
          this.rating = this.mentorData.average_rating;
          console.log(this.rating);
          if (this.rating == 0) {
            this.rating = 0;
          } else if (this.rating > 0 && this.rating < 2) {
            this.rating = 1;
          } else if (this.rating > 1 && this.rating < 3) {
            this.rating = 2;
          } else if (this.rating > 2 && this.rating < 4) {
            this.rating = 3;
          } else if (this.rating > 3 && this.rating < 5) {
            this.rating = 4;
          } else if (this.rating == 5 || this.rating > 4) {
            this.rating = 5;
          }

          this.newMentorTags = this.mentorData.tags.split(",");
          for (let i = 0; i < this.newMentorTags.length; i++) {
            this.newMentorTags[i] = this.newMentorTags[i].trim();
          }
          this.mentorData.tags = this.newMentorTags;

          this.newMentorDataCategory = this.mentorData.category.split(",");
          for (let i = 0; i < this.newMentorDataCategory.length; i++) {
            this.newMentorDataCategory[i] =
              this.newMentorDataCategory[i].trim();
          }
          this.mentorData.category = this.newMentorDataCategory;

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
      let currentDate = new Date();
      if (
        this.days[0].date.getTime() <= currentDate.getTime() ||
        this.avDays.includes(this.days[0].date.getDay() + 1)
      ) {
        this.wrongTime = true;
        this.showErrorToast("You can't book a date in the past!");
      } else {
        this.bookedDate = this.days[0].date.toISOString();
        this.wrongTime = false;
      }
    },
    filterAvailability(day) {
      return this.avDates[day];
    },
    onFileSelected(event) {
      this.file = event.target.files[0];
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
