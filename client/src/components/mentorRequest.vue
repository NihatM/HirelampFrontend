<template>
  <div
    class="p-6 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-col md:flex-row col-end-1 md:px-32"
  >
    <div class="w-full xl:w-9/12 flex flex-col">
      <div
        class="px-3 w-full md:w-0 md:mb-14 xl:mb-0 relative flex items-center justify-center align-middle"
      >
        <img
          src="../assets/mentorin.svg"
          alt=""
          class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-w-full lg:w-full"
        />
      </div>
      <!-- <button v-on:click="test">TEST v-on</button> -->
      <div class="pb-9 max-w-lg">
        <p class="text-4xl text-left bt-medium pb-3.5">
          Can't find the mentor you want to talk to?
        </p>
        <p class="text-4xl text-left bt-book max-w-xl text-text-gray">
          Just share the link to his/her LinkedIn profile. We will be in touch
          to bring the mentor you search for to our platform or suggest others
          that can be helpful.
        </p>
      </div>

      <form @submit.prevent="searchMentor">
        <div class="flex justify-left">
          <div class="relative md:w-10/12 w-full">
            <input
              type="url"
              placeholder="Linkedin URL"
              ref="search"
              :maxlength="maxChar"
              :minlength="minChar"
              v-model="search"
              id='location-search"'
              class="shadow-xl focus:shadow-2xl duration-300 block p-2.5 px-8 w-full h-14 z-20 text-sm text-gray-900 bg-white rounded-full"
              required=""
            />

            <button
              type="submit"
              class="absolute top-2.5 py-2.5 px-12 h-9 right-2 text-sm font-medium text-white rounded-full hover:bg-blue-600 duration-300 bg-custom-blue focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <p class="text-white text-center bt-book">SEND</p>
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- hidden md:visible lg:visible xl:visible -->
    <div
      class="w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
    >
      <img src="../assets/mentorin.svg" alt="" class="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
