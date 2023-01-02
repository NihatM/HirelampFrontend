<template>
  <body class="effra-light">
    <div
      class="pt-11 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1 px-6 md:px-32 md:space-x-8 pb-24"
    >
      <div class="w-full pb-14 xl:mb-0 relative md:flex flex-col">
        <!-- <img src="../../assets/login.svg" alt="" class="w-8/12 pb-8" /> -->
        <div class="text-left">
          <p class="">WEBINAR • Emin Quluyev</p>
          <p class="font-bold text-2xl py-4">
            Avropada iş tapmaq və niyə məhz Lüksemburq?
          </p>
        </div>
        <div class="text-left">
          <div class="flex justify-between md:max-w-md› pb-4">
            <div class="text-left flex flex-col">
              <p class="text-blue-900">Tarix</p>
              <p class="font-bold">4 Dekabr, 14:00 (Bakı)</p>
            </div>
            <div class="text-left flex flex-col">
              <p class="text-blue-900">Müddət</p>
              <p class="font-bold">45 dəqiqə</p>
            </div>
          </div>
          <p class="effra-light text-gray-500">
            <span class="text-custom-blue">Hirelamp</span> öz mentorları ilə
            silsilə vebinarlara başlayır!
          </p>
          <p class="pb-2 text-gray-500">
            İlk qonağımız Vodafone-un Lüksemburq ofisində Qlobal Satınalma üzrə
            menecer kimi çalışan Emin Quluyevdir. Əsas danışılacaq mövzular:
          </p>
          <ul class="pb-4 text-gray-500">
            <li>• Avropada iş tapmaq üçün nə etmək lazımdır?</li>
            <li>• Azərbaycandan gedən niyə Lüksemburqu seçməlidir?</li>
            <li>• Bu missiyada mentorluğun rolu nədir?</li>
          </ul>
          <p class="text-gray-500">
            Qeydiyyatdan keçin, suallarınızı hazırlayın və gəlin!
          </p>
        </div>
        <!-- <p class="bt-md">Welcome aboard my friend</p>
        <p class="bt-book">just a couple of clicks and we start</p> -->
        <div class="relative flex py-2.5 items-center px-3">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-2 text-gray-300">•</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <div class="text-left">
          <div>
            <p class="font-bold text-xl pb-4">Emin Quluyev haqqında</p>
            <p class="text-gray-500">
              Satınalma və təchizat sahəsində həm Azərbaycan, həm də Avropada
              böyük təcrübə qazanmış Emin öz təcrübəsini sizinlə bölüşməyə
              hazırdır. O, hal-hazırda Lüksemburqda, Vodafone şirkətində Qlobal
              Satınalma üzrə Menecer vəzifəsində çalışır. Emin həmçinin Eyfel
              təqaüd proqramının qalibi olaraq Fransada MBA təhsili alıb.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-8/12 align-middle md:flex flex-col items-center">
        <img src="../assets/webinar1.png" alt="" class="w-full rounded-t-xl" />
        <div
          class="shadow-xl rounded-b-2xl rounded-tl-2xl w-full px-4 bg-white"
        >
          <p class="py-6">Qeydiyyat uçun formu doldurun</p>
          <div class="flex flex-col">
            <form action="" @submit.prevent="sendForm()">
              <div class="pb-4">
                <div class="relative">
                  <input
                    v-model="fullName"
                    type="text"
                    class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                    placeholder="Ad və Soyad"
                  />
                </div>

                <div class="py-2"></div>
                <div class="relative">
                  <input
                    v-model="email"
                    type="email"
                    class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                    placeholder="Email"
                  />
                </div>

                <div class="py-2"></div>
                <div class="relative pb-10">
                  <input
                    v-model="interests"
                    type="text"
                    class="block border-1 p-2.5 px-6 w-full h-12 z-20 text-sm text-gray-900 bg-white rounded-2xl"
                    placeholder="Maraqlandığınız mövzular"
                  />
                </div>

                <button
                  type="submit"
                  class="h-11 w-full rounded-full text-gray-50 bg-black hover:shadow-lg duration-300 px-2 py-1.5"
                >
                  Qeydiyyatdan keç
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </body>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
// import firebase from "firebase/compat/app";
import Footer from "../components/Footer.vue";

export default {
  name: "MentorRegister",
  data() {
    return {
      toastMessage: "",
      toastColor: "",
      fullName: "",
      email: "",
      interests: "",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();

    //  const password = ref("");
    const role = ref("");
    // const confirmPassword = ref("");

    return {
      role,
      toast,
      router,

      // confirmPassword,
    };
  },

  components: {
    Footer,
  },

  computed: {
    // comparePasswords() {
    //   return this.confirmPassword == this.password;
    // },
  },

  methods: {
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

    showToast() {
      this.toast.success("Successfully registered!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    // googleSignIn() {
    //   let provider = new firebase.auth.GoogleAuthProvider();
    //   firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       let token = result.credential.accessToken;
    //       let user = result.user;
    //       console.log(token); // Token
    //       console.log(user); // User that was authenticated
    //       this.register = true;
    //       this.createUser();
    //       this.$root.uid = user.uid;
    //       this.$router.push("/mentorpage");
    //     })
    //     .catch((error) => {
    //       this.showErrorToast(error.message);
    //     });
    // },

    // register() {
    //   if (this.password == "" && this.email == "") {
    //     this.showErrorToast("Please fill all the fields");
    //   } else {
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(this.email, this.password)
    //       .then((user) => {
    //         this.showToast();
    //         this.register = true;
    //         this.createUser();
    //         user.uid = this.$root.uid;
    //         this.isMentor = true;
    //         console.log(user.uid);
    //         console.log(this.isMentor);
    //         this.$router.push("/mentorpage");
    //         localStorage.setItem("userEmail", this.email);
    //         localStorage.setItem("userFullname", this.userFullname);
    //         localStorage.setItem("userID", this.$root.uid);
    //         localStorage.setItem("isMentor", this.isMentor);
    //       })
    //       .catch((error) => {
    //         this.showErrorToast(error.message);
    //       });
    //   }
    // },
    sendForm() {
      if (this.fullName == "" && this.email == "" && this.interests == "") {
        this.showErrorToast("Please fill all the fields");
      } else {
        axios
          .post(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/webinars/register/",
            {
              webinarID: "27015d2e-4bb5-4705-b143-574eee1b8027",
              fullName: this.fullName,
              email: this.email,
              interests: this.interests,
            }
          )
          .then(() => {
            this.showToast();
            this.$router.push("/mentorpage");
          })
          .catch((error) => {
            this.showErrorToast(error.message);
          });
      }
    },

    // showPassword() {
    //   this.passwordFieldType =
    //     this.passwordFieldType === "password" ? "text" : "password";
    // },
  },
};
// get a reference to our vue router
</script>

<style></style>
