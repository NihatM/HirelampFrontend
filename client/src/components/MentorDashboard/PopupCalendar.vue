<template>
  <div class="max-w-md flex justify-center">
    <div class="space-y-8 py-8 text-left flex flex-col justify-center">
      <div class="flex justify-between text-left">
        <div class="">
          <input
            id="monday"
            type="checkbox"
            placegolder="Services"
            value="Monday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="monday"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Monday
          </label>
        </div>
        <div class="px-4">
          <textarea
            v-model="availableTimes.monday"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id="monday"
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Tuesday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tuesday
          </label>
        </div>
        <div class="px-4">
          <textarea
            v-model="availableTimes.tuesday"
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Wednesday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Wednesday
          </label>
        </div>
        <div class="px-4">
          <textarea
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Thursday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Thursday
          </label>
        </div>
        <div class="px-4">
          <textarea
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Friday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Friday
          </label>
        </div>
        <div class="px-4">
          <textarea
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Saturday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Saturday
          </label>
        </div>
        <div class="px-4">
          <textarea
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="">
          <input
            id="checkbox-item-1"
            type="checkbox"
            placegolder="Services"
            value="Sunday"
            v-model="selectedCheckbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Sunday
          </label>
        </div>
        <div class="px-4">
          <textarea
            class="border w-full border-gray-700 bg-white text-gray-400 rounded-2xl p-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Example: 10:00-12:00; 14:00-16:00"
          >
          </textarea>
        </div>
      </div>
      <div class="w-full py-8">
        <button
          @click="sendOption()"
          class="py-2 px-14 bg-custom-blue rounded-full flex justify-center items-center text-white"
        >
          <p class="text-white">Save</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
        { label: "Saturday", value: "Saturday" },
        { label: "Sunday", value: "Sunday" },
      ],
      selectedCheckbox: [],
      availableTimes: [],
    };
  },

  methods: {
    //send the option to the parent component
    //send selected option to the parent component
    sendOption() {
      console.log(this.selectedCheckbox);
      // convert available times to string
      // this.availableTimes = this.availableTimes.toString();
      console.log(this.availableTimes);

      let obj = {
        Mon: this.availableTimes.monday,
        Tue: this.availableTimes.tuesday,
        Wed: this.availableTimes.wednesday,
        Thu: this.availableTimes.thursday,
        Fri: this.availableTimes.friday,
        Sat: this.availableTimes.saturday,
        Sun: this.availableTimes.sunday,
      };

      this.$emit("sendOption", obj);
    },

    //get the values of the selected options
    getSelectedOptions() {
      return this.options.filter((option) => option.selected);
    },

    addNewRow() {
      this.options.push({ label: "Monday", value: "Monday" });
    },
  },
};
</script>

<style></style>
