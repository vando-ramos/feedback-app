<template>
  <CustomHeader @signup='handleSignup' @login='handleLogin' />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedback-app © 2023</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

export default {
  components: { Contact, CustomHeader },
  setup () {
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin () {

    }

    function handleSignup () {

    }

    return {
      handleLogin,
      handleSignup
    }
  }
}
</script>
