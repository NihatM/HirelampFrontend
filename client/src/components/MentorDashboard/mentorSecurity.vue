<template>
  <div class="p-4 md:p-8">
    <div class="flex flex-col">
      <p class="bt-md text-left text-gray-800">Change my password</p>
      <div class="flex flex-col justify-center space-y-8 py-10">
        <div class="space-y-8 flex flex-col">
          <form action="" submit.prevent="updatePassword()"></form>
          <input
            type="password"
            class="border w-full lg:w-1/2 border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Old password"
            v-model="oldPassword"
          />
          <input
            type="password"
            class="border w-full lg:w-1/2 border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="New password"
            v-model="newPassword"
          />
          <input
            type="password"
            class="border w-full lg:w-1/2 border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="New password"
            v-model="confirmPassword"
          />

          <!-- <input
            type="password"
            class="border w-full lg:w-1/2 border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="new"
            v-model="newPassword"
          /> -->
        </div>

        <div class="w-full lg:w-1/2">
          <!-- @click="updateCandidate(candDatas.userID)" -->
          <div
            class="flex justify-center items-center content-center align-middle"
          >
            <button
              @click="updatePassword()"
              class="py-1.5 bg-custom-blue rounded-full text-white px-3"
            >
              <p class="text-white bt-book">Update</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      candDatas: "",
      oldPassword: "",
      oldFromBackend: "",
      newPassword: "",
      confirmPassword: "",
      toastMessage: "",
      toastColor: "",
    };
  },

  setup() {
    const toast = useToast();

    return {
      toast,
    };
  },
  beforeMount() {
    this.getCandData();
    this.getCandidateUserID();
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
      this.toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    // check if passwords match
    checkPassword() {
      console.log(this.oldPassword);
      console.log(this.oldFromBackend);
      if (this.oldPassword === this.oldFromBackend) {
        return true;
      } else {
        // toast notification for passwords not matching
        this.toast.error("Old password is wrong", {
          position: "top-right",
          timeout: 3000,
        });
        return false;
      }
    },

    checkNewPassword() {
      if (this.newPassword === this.confirmPassword) {
        return true;
      } else if (this.newPassword === this.oldPassword) {
        // toast notification you can't use old password
        this.toast.error("You can't use old password", {
          position: "top-right",
          timeout: 3000,
        });
        return false;
      } else {
        // toast notification for passwords not matching
        this.toast.error("Passwords do not match", {
          position: "top-right",
          timeout: 3000,
        });
        return false;
      }
    },

    //update password in firebase
    async updatePassword() {
      if (this.checkPassword() && this.checkNewPassword()) {
        const user = await firebase.auth().currentUser;
        user
          .updatePassword(this.newPassword)
          .then(() => {
            // Update successful.
            console.log("password updated");
            this.toast.success("Password updated successfully", {
              position: "top-right",
              timeout: 3000,
            });
          })
          .catch((error) => {
            // An error ocurred
            // ...
            if (error.code === "auth/requires-recent-login") {
              this.toast.error("Please login and try again", {
                position: "top-right",
                timeout: 3000,
              });
            }
          });
      } else {
        console.log("passwords do not match");
      }
    },

    async getCandidateUserID() {
      localStorage.getItem("userID")
        ? (this.userID = localStorage.getItem("userID"))
        : null;
      console.log(this.userID);
      this.getCandidateData(this.userID);
    },

    async getCandidateData(userID) {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            userID +
            "/"
        )
        .then((response) => {
          this.candDatas = response.data;
          this.isLoading = false;
          console.log(this.candDatas);
          this.oldFromBackend = this.candDatas.password;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getCandData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/upcomingSessionsMentee/08PUJIQJ9BRVF3hmoSptTDrhzys2/"
        )
        .then((response) => {
          console.log(response);
          this.candDatas = response.data;
          console.log(this.candDatas);
          this.isLoading = false;
          // split date and time and convert date to dd/mm/yyyy and time to hh:mm
          this.candDatas.forEach((element) => {
            element.date = element.date.split("T")[0];
          });

          // show price without .0 at the end

          // this.candDatas.forEach((candData) => {
          //   candData.date = new Date(candData.date).toLocaleDateString();
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
