<template>
  <div class="flex justify-content-center" data-v-e2d81ae4="">
    <div class="card" data-v-e2d81ae4="">
      <h2 class="text-center" data-v-e2d81ae4="">Authorization</h2>
      <form class="p-fluid" data-v-e2d81ae4="">
    
        <div class="field" data-v-e2d81ae4="">
          <div class="p-float-label p-input-icon-right" data-v-e2d81ae4="">
            <i class="pi pi-envelope" data-v-e2d81ae4=""></i>
            <input class="p-inputtext p-component" id="email" aria-describedby="email-error" data-v-e2d81ae4="">
            <label for="email" class="" data-v-e2d81ae4="">Email*</label>
          </div>
        </div>

        <div class="field" data-v-e2d81ae4="">
          <div class="p-float-label" data-v-e2d81ae4="">
            <div class="p-password p-component p-inputwrapper p-input-icon-right" id="password" data-v-e2d81ae4="">
              <input class="p-inputtext p-component" type="password" aria-controls="pv_id_3_panel" aria-expanded="false"
                aria-haspopup="true">
              <i class="pi pi-eye"></i>
              <span class="p-hidden-accessible" aria-live="polite">Enter a password</span>
            </div><label for="password" class="" data-v-e2d81ae4="">Password*</label>
          </div>
        </div>
        
        <button class="p-button p-component mt-2" type="submit" aria-label="Submit" data-v-e2d81ae4="">
          <span class="p-button-label">Login</span>
          <span class="p-ink" role="presentation"></span>
        </button>

        <button class="p-button p-component mt-2" type="submit" aria-label="Submit" data-v-e2d81ae4="">
          <span class="p-button-label">Registration</span>
          <span class="p-ink" role="presentation"></span>
        </button>

      </form>
    </div>
    </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style scoped></style>
