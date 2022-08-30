<template>
  <div class="align-center justify-center">
          

            <ul
              class="py-4 px-2 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
             v-for="tag in tags" :key="tag.id"
            >
             

              <li
                @click="searchTag(tag)"
                class="cursor-pointer text-sm px-3 bg-gradient-to-tl from-gray-200 to-blue-50 rounded-full  w-max sm:text-sm md:text-base lg:text-md text-left xl:text-md hover:bg-custom-blue hover:text-custom-blue hover:border-custom-blue duration-300"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
</template>

<script>
export default {


    data() {


        return {
            mentorData: {},
            isLoading: true,
            mentorDatas: [],
            tags: ["Business development", "Telecom", "USA",  "Azerbaijan", "Finance", "Banking", "Germany", "Poland", "Marketing"],
            search: '',
           
        }
    },
    



        methods: {
           searchTag(searchtag) {
      this.$router.push("/search/" + searchtag);
    },
        }


}
</script>

<style>

</style>