<template>
  <div>
    <p>
      {{ mentorDatas.length }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mentorDatas: [],
    };
  },
  mounted() {
    this.getMentorDatas();
  },
  methods: {
    async getMentorDatas() {
      await axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/experts/"
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.mentorDatas);

          this.isLoading = false;
          localStorage.getItem("userEmail")
            ? (this.email = localStorage.getItem("userEmail"))
            : null;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
