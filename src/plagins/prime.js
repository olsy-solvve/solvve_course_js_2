import PrimeVue from "primevue/config";

import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import Chips from 'primevue/chips';
import InputMask from 'primevue/inputmask';
import CascadeSelect from 'primevue/cascadeselect';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import TreeSelect from 'primevue/treeselect';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

export default (app) => {
  app.component("Dialog", Dialog);
  app.component("Menubar", Menubar);
  app.component("Button", Button);
  app.component("p-inputnumber", InputNumber);
  app.component("p-inputtext", InputText);
  app.component("p-autocomplete", AutoComplete);
  app.component("p-calendar", Calendar);
  app.component("p-chips", Chips);
  app.component("p-inputmask", InputMask);
  app.component("p-cascadeselect", CascadeSelect);
  app.component("p-dropdown", Dropdown);
  app.component("p-multiselect", MultiSelect);
  app.component("p-treeselect", TreeSelect);
  app.component("p-password", Password);
  app.component("p-textarea", Textarea);

  app.use(PrimeVue, { ripple: true });
};
