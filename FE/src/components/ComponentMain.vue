
<script>
export default {};
</script>

<template>
  <main>
    <div class="grid grid-nogutter surface-section text-800">
      <div
        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
      >
        <section>
          <span class="block text-6xl font-bold mb-1 line-height-3"
            >The TOP Math</span
          >
          <div class="text-6xl text-primary font-bold mb-3 line-height-3">
            JavaScript games you can play right now
          </div>
          <p class="mt-0 mb-4 text-700 line-height-3">
            Here you will find the most favorite games for all ages. Just click
            and you will stay with us for a long time.
          </p>

          <router-link to="/games">
            <pButton
              label="Let's start"
              type="button"
              class="mr-3 p-button-raised"
            ></pButton>
          </router-link>

        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden">
        <img
          src="https://damion.club/uploads/posts/2022-01/thumbs/1641922793_79-damion-club-p-fon-dlya-prezentatsii-kompyuternikh-igr-84.jpg"
          alt="Image"
          class="md:ml-auto block md:h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        />
      </div>
    </div>
  </main>
</template>

<style></style>
