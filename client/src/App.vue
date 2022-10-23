<template>
  <body class="max-w-screen-2xl mx-auto">
    <NavBar :isLoggedIn="isLoggedIn" />
  </body>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import firebase from "./utilities/firebase";
// import axios from "axios";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      isLoggedIn: false,
      authUser: {},
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        this.uid = user.uid;
        // User is signed in.
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
        // No user is signed in.
      }
    });
  },
  // methods: {
  //   async getCandidateUserID() {
  //     console.log(this.isLoggedIn);
  //     if (this.isLoggedIn == true) {
  //       localStorage.getItem("userID")
  //         ? (this.userID = localStorage.getItem("userID"))
  //         : null;
  //       this.getCandidateData(this.userID);
  //     }
  //   },
  //   async getCandidateData(userID) {
  //     axios
  //       .get(
  //         "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/mentee/" +
  //           userID +
  //           "/"
  //       )
  //       .then((response) => {
  //         this.candDatas = response.data;
  //         this.profileImg = this.candDatas.profileImg;
  //         this.fullName =
  //           this.candDatas.firstName + " " + this.candDatas.lastName;
  //         this.isLoading = false;
  //         //upcoming sessions
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
