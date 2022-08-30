<template>
  <div>
    <h1 class="flex justify-center md:text-3xl py-4 font-bold">
      How would you like to signup?
    </h1>
    <div class="container pt-10 px-16 h-screen">
      <div class="flex flex-row">
        <div>
          <img
            src="../assets/mentor.svg"
            class="h-1/3 justify-center align-middle mx-auto my-6"
            alt=""
          />
          <h2 class="flex justify-center md:text-2xl p-2 font-bold">Mentor</h2>
          <p class="px-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
          <div class="py-8">
            <router-link to="/signup/mentor">
              <button
                class="mt-auto bg-custom-blue hover:bg-blue-500 transition duration-300 text-white px-3 py-1 rounded-3xl text-xl shadow-sm"
              >
                Mentor
              </button>
            </router-link>
          </div>
        </div>
        <div>
          <img
            src="../assets/candidate.svg"
            class="h-1/3 justify-center align-middle mx-auto my-6"
            alt=""
          />
          <h2 class="flex justify-center md:text-2xl p-2 font-bold">
            Candidate
          </h2>
          <p class="px-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
          <div class="py-8">
            <router-link to="/signup/candidate">
              <button
                class="mt-auto bg-custom-blue hover:bg-blue-500 transition duration-300 text-white px-3 py-1 rounded-3xl text-xl shadow-sm"
              >
                Candidate
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style></style>
