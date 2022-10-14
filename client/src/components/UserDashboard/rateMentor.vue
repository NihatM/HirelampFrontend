<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Rate Mentor</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Rate Mentor</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Rate Mentor"
                      v-model="rateMentorText"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-info btn-fill pull-right"
                @click="rateMentor"
              >
                Rate Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "../../utilities/firebase";
import axios from "axios";
export default {
  data() {
    return {
      rateMentorText: "",
    };
  },
  methods: {
    rateMentor() {
      axios
        .post("http://localhost:3000/api/rateMentor", {
          rateMentorText: this.rateMentorText,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
