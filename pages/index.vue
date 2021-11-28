<template>
  <div class="max-w-sm mx-auto mt-8">
    <div>
      <h2 class="text-xl">
        Job Board
      </h2>
      <span class="text-xs block pb-4">Awesome Jobs for awesome people</span>
    </div>
    <div class="shadow overflow-hidden sm:rounded-md">
      <ul id="job-list" role="list" class="divide-y divide-gray-200">
        <JobItem v-for="job in jobs" :key="job.title" :title="job.title" :salary="job.salary" :link="job.link" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {
          title: 'Rust developer',
          salary: '50000',
          link: '/job/rust-developer'
        },
        {
          title: 'Frontend developer',
          salary: '150000',
          link: '/job/frontend-developer'
        },
        {
          title: 'Nodejs developer',
          salary: '75000',
          link: '/job/nodejs-developer'
        }
      ]
    }
  }
}
</script>
