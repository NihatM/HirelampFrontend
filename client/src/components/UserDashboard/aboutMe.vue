<template>
  <div>
    <div class="flex flex-col">
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
              :src="candDatas.profileImg"
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
        <p>{{ candDatas.firstName }} {{ candDatas.lastName }}</p>
      </div>
      <div class="flex flex-col justify-center space-y-8 py-10 px-4 md:px-8">
        <div class="space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex">
          <input
            type="text"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="First Name"
            v-model="candDatas.firstName"
          />
          <input
            type="text"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Last Name"
            v-model="candDatas.lastName"
          />
        </div>
        <div class="space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex">
          <input
            type="tel"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Phone number"
            v-model="candDatas.phone"
          />
          <input
            type="email"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Email"
            v-model="candDatas.email"
          />
        </div>
        <div class="space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 lg:flex">
          <input
            type="url"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Linkedin URL"
            v-model="candDatas.linkedinUrl"
          />
          <input
            type="file"
            accept="application/pdf"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            placeholder="Upload CV"
            @change="onFileSelected"
          />
        </div>
        <div class="w-full">
          <button
            @click="updateCandidate(candDatas.userID)"
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
export default {
  data() {
    return {
      candDatas: "",
      file: null,
      newImage: "",
    };
  },

  mounted() {
    // this.getCandidateUserID();
  },
  beforeMount() {
    this.getCandidateUserID();
  },

  methods: {
    previewImage(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newImage = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.candDatas.profileImg = input.files[0];
      }
      // if new image is not uploaded, use the old image
      // else {
      //   this.newImage = this.candDatas.profileImg;
      // }
    },

    // at click div open input tag
    async imageInput() {
      document.getElementById("imageInput").click();
    },

    // push updates to database
    // async updateCandidate(userID) {
    //   if (this.newImage) {
    //     // reader = new FileReader();
    //     const reader = new FileReader();
    //     reader.readAsDataURL(this.candDatas.profileImg);
    //     reader.onload = () => {
    //       this.candDatas.profileImg = reader.result;
    //       const formData = new FormData();
    //       formData.append("firstName", this.candDatas.firstName);
    //       formData.append("lastName", this.candDatas.lastName);
    //       formData.append("phone", this.candDatas.phone);
    //       formData.append("email", this.candDatas.email);
    //       formData.append("linkedinUrl", this.candDatas.linkedinUrl);
    //       formData.append("profileImg", this.candDatas.profileImg);
    //       formData.append("cv", this.file);
    //       axios
    //         .put(
    //           "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentee/" +
    //             userID +
    //             "/",
    //           formData
    //         )
    //         .then((res) => {
    //           console.log(res);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     };
    //   }
    // },

    async updateCandidate() {
      if (this.newImage) {
        // reader = new FileReader();
        const reader = new FileReader();
        reader.readAsDataURL(this.candDatas.profileImg);
        reader.onload = () => {
          this.candDatas.profileImg = reader.result;

          console.log(this.candDatas.profileImg);
          console.log(this.userID);

          fetch(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentee/" +
              this.userID +
              "/",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                profileImg: this.candDatas.profileImg,
              }),
            }
          );
        };
      }

      const formData = new FormData();

      //if null then set to empty string
      for (let key in this.candDatas) {
        if (this.candDatas[key] == null && key != "profileImg") {
          console.log(key, "is null");
          this.candDatas[key] = "N/A";
        }
      }

      formData.append("firstName", this.candDatas.firstName);
      formData.append("lastName", this.candDatas.lastName);
      formData.append("phone", this.candDatas.phone);
      formData.append("email", this.candDatas.email);
      formData.append("linkedinUrl", this.candDatas.linkedinUrl);
      formData.append("cv", this.file);

      setTimeout(() => {
        axios
          .put(
            "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/updateMentee/" +
              localStorage.getItem("userID") +
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
            location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
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
          console.log(response);
          this.candDatas = response.data;
          console.log(this.candDatas);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendNewUserData() {
      const formData = new FormData();
      formData.append("profileImg", this.file);
      formData.append("firstName", this.candDatas.firstName);
      formData.append("lastName", this.candDatas.lastName);
      formData.append("phone", this.candDatas.phone);
      formData.append("email", this.candDatas.email);
      formData.append("linkedinUrl", this.candDatas.linkedinUrl);
      formData.append("cv", this.candDatas.cv);
      axios
        .put(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
            this.userID +
            "/",
          formData
        )
        .then((response) => {
          console.log(response);
          this.candDatas = response.data;
          console.log(this.candDatas);
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
