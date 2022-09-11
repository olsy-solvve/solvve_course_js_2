<template>
  <div class="form-demo">
    <div class="flex justify-content-center">
      <div class="card">
        <h1 class="text-center">Registration</h1>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <pInputText
                id="name"
                v-model="v$.name.$model"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <label :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Name*</label
              >
            </div>
            <small
              v-if="
                (v$.name.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ v$.name.required.$message.replace("Value", "Name") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <pInputText
                id="email"
                v-model="v$.email.$model"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                aria-describedby="email-error"
              />
              <label :class="{ 'p-error': v$.email.$invalid && submitted }"
                >Email*</label
              >
            </div>
            <span v-if="v$.email.$error && submitted">
              <span
                id="email-error"
                v-for="(error, index) of v$.email.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
            <small
              v-else-if="
                (v$.email.$invalid && submitted) || v$.email.$pending.$response
              "
              class="p-error"
              >{{ v$.email.required.$message.replace("Value", "Email") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <pPassword
                id="password"
                v-model="v$.password.$model"
                :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                toggleMask
              >
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{ sp.level }}
                  <pDivider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </pPassword>
              <label :class="{ 'p-error': v$.password.$invalid && submitted }"
                >Password*</label
              >
            </div>
            <small
              v-if="
                (v$.password.$invalid && submitted) ||
                v$.password.$pending.$response
              "
              class="p-error"
              >{{
                v$.password.required.$message.replace("Value", "Password")
              }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <pCalendar id="date" v-model="date" :showIcon="true" />
              <label>Birthday</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <pDropdown
                id="country"
                v-model="country"
                :options="countries"
                optionLabel="name"
              />
              <label>Country</label>
            </div>
          </div>
          <div class="field-checkbox">
            <pCheckbox
              id="accept"
              name="accept"
              value="Accept"
              v-model="v$.accept.$model"
              :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
            />
            <label :class="{ 'p-error': v$.accept.$invalid && submitted }"
              >I agree to the terms and conditions</label
            >
          </div>
          <pButton type="submit" label="Submit" class="mt-2" />
          <pButton
            label="Already registered? Login"
            class="p-button-text"
            @click="this.$router.push('/auth')"
          />
        </form>
      </div>
    </div>
    <h1>{{ error }}</h1>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import CountryService from "@/service/CountryService";
import service from "../service/SignService";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
      error: "",
    };
  },
  countryService: null,
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      country: {
        required,
      },
      accept: {
        required,
      },
    };
  },
  created() {
    if (localStorage.getItem("solvveusername")) {
      if (String(localStorage.getItem("solvveusername")).length > 0) {
        this.$router.push(`/profile/${localStorage.getItem("solvveusername")}`);
      }
    }
    this.countryService = new CountryService();
  },
  mounted() {
    this.countryService.getCountries().then((data) => (this.countries = data));
  },
  methods: {
    async register() {
      await service
        .registerNewUser({
          name: this.name,
          password: this.password,
          email: this.email,
          country: this.country.name,
        })
        .then((res) => {
          if (String(res).split(" ")[0] === "Error:") {
            this.error = res;
          } else {
            let redirectURL = `/profile/${res.data.name}`;
            this.$router.push(redirectURL);
          }
        })
        .catch((err) => (this.error = err));
    },
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
      this.register();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.country = null;
      this.accept = null;
      this.submitted = false;
    },
  },
  watch: {
    email(value) {
      this.email = value;
    },
    name(value) {
      this.name = value;
    },
    password(value) {
      this.password = value;
    },
    country(value) {
      this.country = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    min-width: 450px;
    margin-top: 40px;
    margin-bottom: 40px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
