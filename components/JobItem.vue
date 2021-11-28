<template>
  <li>
    <nuxt-link :to="link" class="block hover:bg-gray-50">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <p class="text-md font-medium text-blue-500 truncate">
            {{ title }}
          </p>
          <div class="ml-2 flex-shrink-0 flex">
            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {{ salary }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props:
    {
      title: {
        type: String,
        default: ''
      },
      salary: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      }
    }
}
</script>
