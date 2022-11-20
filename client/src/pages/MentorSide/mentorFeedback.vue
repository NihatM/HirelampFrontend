<template>
  <div class="flex px-6 py-4 md:px-32 md:space-x-9">
    <div class="w-1/3 rounded-xl shadow-md overflow-hidden hidden md:block">
      <div class="">
        <userDashboard />
      </div>
    </div>
    <div class="w-full md:w-2/3 shadow-xl rounded-xl">
      <div class="w-full h-full px-8">
        <div class="flex flex-col">
          <p class="bt-md text-left pb-8">
            Give feedback to {{ mentorData.menteeFirstName }}
            {{ mentorData.menteeLastName }}
          </p>

          <div class="divide-y space-y-4">
            <div class="flex flex-row">
              <div>
                <img
                  :src="mentorData.menteePhoto"
                  alt=""
                  class="h-12 w-12 rounded-full mr-2"
                />
              </div>
              <div class="text-left">
                <p class="bt-placeholder">
                  {{ mentorData.menteeFirstName }}
                  {{ mentorData.menteeLastName }}
                </p>
                <p class="bt-placeholder text-gray-500">
                  {{ mentorData.date }}
                </p>
              </div>
            </div>
            <div class="pt-2">
              <!-- <p class="text-left">Give a score to the mentee</p> -->
              <div class="flex flex-col space-y-4 pt-4">
                <div class="flex flex-row justify-between">
                  <p class="text-left bt-book">Coachability</p>
                  <div class="flex items-center justify-center align-middle">
                    <svg
                      @click="rateMentorCoachability(1)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingCoachability >= 1,
                        'text-gray-300': ratingCoachability <= 1,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorCoachability(2)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingCoachability >= 2,
                        'text-gray-300': ratingCoachability <= 2,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorCoachability(3)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingCoachability >= 3,
                        'text-gray-300': ratingCoachability <= 3,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorCoachability(4)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingCoachability >= 4,
                        'text-gray-300': ratingCoachability <= 4,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorCoachability(5)"
                      aria-hidden="true"
                      :class="{
                        'text-yellow-400': ratingCoachability >= 5,
                        'text-gray-300': ratingCoachability <= 5,
                      }"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="flex flex-row justify-between">
                  <p class="text-left bt-book">
                    Prior knowledge about the topic of session
                  </p>
                  <div class="flex items-center justify-center align-middle">
                    <svg
                      @click="rateMentorPrior(1)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPrior >= 1,
                        'text-gray-300': ratingPrior <= 1,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPrior(2)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPrior >= 2,
                        'text-gray-300': ratingPrior <= 2,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPrior(3)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPrior >= 3,
                        'text-gray-300': ratingPrior <= 3,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPrior(4)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPrior >= 4,
                        'text-gray-300': ratingPrior <= 4,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPrior(5)"
                      aria-hidden="true"
                      :class="{
                        'text-yellow-400': ratingPrior >= 5,
                        'text-gray-300': ratingPrior <= 5,
                      }"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div class="flex flex-row justify-between">
                  <p class="text-left bt-book">
                    Potential in becoming better in the specific field
                  </p>

                  <div class="flex items-center justify-center align-middle">
                    <svg
                      @click="rateMentorPotential(1)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPotential >= 1,
                        'text-gray-300': ratingPotential <= 1,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPotential(2)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPotential >= 2,
                        'text-gray-300': ratingPotential <= 2,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPotential(3)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPotential >= 3,
                        'text-gray-300': ratingPotential <= 3,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPotential(4)"
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300"
                      :class="{
                        'text-yellow-400': ratingPotential >= 4,
                        'text-gray-300': ratingPotential <= 4,
                      }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      @click="rateMentorPotential(5)"
                      aria-hidden="true"
                      :class="{
                        'text-yellow-400': ratingPotential >= 5,
                        'text-gray-300': ratingPotential <= 5,
                      }"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <!-- <div class="flex flex-row">
                  <p class="text-left text-xs text-gray-400">
                    Your services fee
                  </p>

                  <input
                    input="text"
                    v-model="this.mentorData.sessionPrice"
                    class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
                    placeholder="Your service fee"
                  />
                </div> -->
              </div>
            </div>
          </div>

          <div>
            <!-- <div class="flex items-center justify-center align-middle">
              <svg
                @click="rateMentor(1)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  
                  'text-yellow-400': rating >= 1,
                  'text-gray-300': rating <= 1,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(2)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  
                  'text-yellow-400': rating >= 2,
                  'text-gray-300': rating <= 2,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(3)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  
                  'text-yellow-400': rating >= 3,
                  'text-gray-300': rating <= 3,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(4)"
                aria-hidden="true"
                class="w-5 h-5 text-gray-300"
                :class="{
                  
                  'text-yellow-400': rating >= 4,
                  'text-gray-300': rating <= 4,
                }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg
                @click="rateMentor(5)"
                aria-hidden="true"
                :class="{
                  
                  'text-yellow-400': rating >= 5,
                  'text-gray-300': rating <= 5,
                }"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div> -->
          </div>
          <form @submit.prevent="sendRatingText(mentorData.userID)">
            <div class="flex flex-col justify-center py-10">
              <input
                type="text"
                required
                class="w-full h-70 mb-2 text-gray-600 bg-gray-100 rounded-2xl p-2"
                placeholder="Feedback title"
                v-model="this.feedbackTitle"
              />
              <textarea
                type="text"
                required
                class="w-full h-140 text-gray-600 bg-gray-100 rounded-2xl p-2"
                placeholder="Leave a comment"
                v-model="this.feedbackText"
              />
              <div class="w-full py-8">
                <button
                  submit
                  class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
                >
                  <p class="text-white">Rate</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import userDashboard from "../../components/userDashboard.vue";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      mentorData: "",
      rateMentorText: "",
      menteeDataID: "",
      ratingCoachability: 0,
      ratingPrior: 0,
      ratingPotential: 0,
      candId: "",
      feedbackTitle: "",
      feedbackText: "",
    };
  },

  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  components: {
    userDashboard,
  },
  beforeMount() {
    // this.getCandidateUserID();
    this.getMentorData();
    // this.getSessionId();
  },

  methods: {
    showToast() {
      this.toast.success("Thank you for your feedback!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    showErrorToast() {
      this.toast.error("Something went wrong, please try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    //star rating system
    rateMentorCoachability(ratingCoachability) {
      this.ratingCoachability = ratingCoachability;
      // this.sendRating(rating);
    },
    rateMentorPrior(ratingPrior) {
      this.ratingPrior = ratingPrior;
      // this.sendRating(rating);
    },
    rateMentorPotential(ratingPotential) {
      this.ratingPotential = ratingPotential;
      console.log(this.ratingPotential);
      // this.sendRating(rating);
    },

    getMentorData() {
      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/pastSessions/" +
            localStorage.getItem("userID") +
            "/"
        )
        .then((response) => {
          this.mentorData = response.data[0];
          this.mentorData.date = this.mentorData.date.slice(0, 10);
          this.isLoading = false;
          console.log(this.mentorData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // send rating text
    async sendRatingText() {
      console.log(this.ratingCoachability);
      console.log(this.ratingPotential);
      console.log(this.feedbackTitle);
      axios
        .put(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/feedback/add/" +
            this.mentorData.sessionID +
            "/",

          {
            sessionTopic: this.mentorData.sessionTopic,
            // sessionPrice: this.mentorData.sessionPrice,
            feedbackTitle: this.feedbackTitle,
            feedbackText: this.feedbackText,
            coachability: this.ratingCoachability,
            priorKnowledge: this.ratingPrior,
            potential: this.ratingPotential,
          },

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then((response) => {
          console.log(this.ratingPotential);

          console.log(response);
          this.rateMentorText = "";
          this.feedbackTitle = "";
          this.feedbackText = "";

          // this.isLoading = false;
          this.showToast();
          //set a timeout to redirect to the dashboard
          setTimeout(() => {
            window.location.href = "/mentorDashboard/sessions";
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          this.showErrorToast();
        });
    },
  },
};
</script>

<style></style>
