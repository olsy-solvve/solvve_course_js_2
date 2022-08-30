<template>
    <div class="form-demo">
        <Dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
            <div class="flex align-items-center flex-column pt-6 px-3">
                <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
                <h5>Registration Successful!</h5>
                <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
                    Your account is registered under name <b>{{state.name}}</b> ; it'll be valid next 30 days without activation. Please check <b>{{state.email}}</b> for activation instructions.
                </p>
            </div>
            <template #footer>
                <div class="flex justify-content-center">
                    <Button label="OK" @click="toggleDialog" class="p-button-text" />
                </div>
            </template>
        </Dialog>
      </div>

<div class="flex justify-content-center" data-v-e2d81ae4="">
  <div class="card" data-v-e2d81ae4=""><h2 class="text-center" data-v-e2d81ae4="">Register</h2>
  <form class="p-fluid" data-v-e2d81ae4="">
    <div class="field" data-v-e2d81ae4="">
      <div class="p-float-label" data-v-e2d81ae4="">
        <input class="p-inputtext p-component" id="name" data-v-e2d81ae4="">
        <label for="name" class="" data-v-e2d81ae4="">Name*</label>
        </div>
        </div>
        <div class="field" data-v-e2d81ae4="">
          <div class="p-float-label p-input-icon-right" data-v-e2d81ae4="">
            <i class="pi pi-envelope" data-v-e2d81ae4=""></i>
            <input class="p-inputtext p-component" id="email" aria-describedby="email-error" data-v-e2d81ae4="">
            <label for="email" class="" data-v-e2d81ae4="">Email*</label>
            </div><!----></div><div class="field" data-v-e2d81ae4="">
              <div class="p-float-label" data-v-e2d81ae4="">
                <div class="p-password p-component p-inputwrapper p-input-icon-right" id="password" data-v-e2d81ae4="">
                  <input class="p-inputtext p-component" type="password" aria-controls="pv_id_3_panel" aria-expanded="false" aria-haspopup="true">
                  <i class="pi pi-eye"></i>
                  <span class="p-hidden-accessible" aria-live="polite">Enter a password</span>
                  </div><label for="password" class="" data-v-e2d81ae4="">Password*</label>
                  </div>
                  </div>
                  <div class="field" data-v-e2d81ae4="">
                    <div class="p-float-label" data-v-e2d81ae4="">
                      <span id="date" class="p-calendar p-component p-inputwrapper p-calendar-w-btn" data-v-e2d81ae4="">
                        <input type="text" role="combobox" class="p-inputtext p-component" aria-autocomplete="none" aria-haspopup="dialog" aria-expanded="false" aria-controls="pv_id_4_panel" inputmode="none" tabindex="0">
                        <button class="p-button p-component p-button-icon-only p-datepicker-trigger" type="button" aria-label="Choose Date" aria-haspopup="dialog" aria-expanded="false" aria-controls="pv_id_4_panel">
                          <span class="pi pi-calendar p-button-icon">
                            </span>
                            <span class="p-button-label">&nbsp;</span>
                            <span class="p-ink" role="presentation"></span>
                            </button>
                            </span>
                            <label for="date" data-v-e2d81ae4="">Birthday</label>
                            </div></div><div class="field" data-v-e2d81ae4="">
                              <div class="p-float-label" data-v-e2d81ae4="">
                                <div id="country" class="p-dropdown p-component p-inputwrapper" data-v-e2d81ae4="">
                                  <span class="p-dropdown-label p-inputtext p-dropdown-label-empty" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="country_list" aria-disabled="false">&nbsp;</span>
                                  <div class="p-dropdown-trigger">
                                    <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                    </div>
                                    </div>
                                    <label for="country" data-v-e2d81ae4="">Country</label>
                                    </div>
                                    </div>
                                    <div class="field-checkbox" data-v-e2d81ae4="">
                                      <div class="p-checkbox p-component" id="accept" data-v-e2d81ae4="">
                                        <div class="p-hidden-accessible">
                                          <input type="checkbox" name="accept" value="Accept"></div>
                                          <div class="p-checkbox-box">
                                            <span class="p-checkbox-icon"></span>
                                            </div>
                                            </div>
                                            <label for="accept" class="" data-v-e2d81ae4="">I agree to the terms and conditions*</label>
                                            </div>
                                            <button class="p-button p-component mt-2" type="submit" aria-label="Submit" data-v-e2d81ae4="">
                                              <span class="p-button-label">Submit</span>
                                              <span class="p-ink" role="presentation"></span>
                                              </button>
                                              </form>
                                              </div>
                                              </div>

</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style scoped></style>
