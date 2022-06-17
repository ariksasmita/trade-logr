<script>
import { reactive, ref, defineComponent } from "vue";
import { AutoComplete, Button } from "ant-design-vue";

export default defineComponent({
  components: {
    AButton: Button,
    AAutoComplete: AutoComplete,
  },
  setup() {
    const states = reactive({
      asset: "",
      position: "",
      before: "",
    });
    const assetsOptions = ref([
      {
        value: "EURUSD",
      },
      {
        value: "EURAUD",
      },
    ]);
    return {
      states,
      assetsOptions,
    };
  },
});
</script>

<template>
  <div class="form-wrapper">
    <label for="asset">Assets</label>
    <select v-model="states.asset" name="asset" id="pair">
      <option value="eurusd">EURUSD</option>
      <option value="euraud">EURAUD</option>
    </select>
    <label for="position">Position</label>
    <select v-model="states.position" name="position" id="position">
      <option value="buy">BUY</option>
      <option value="sell">SELL</option>
    </select>
    <label for="before-link">Before</label>
    <input
      v-model="states.before"
      type="text"
      name="before-link"
      id="before-link"
    />
  </div>
  <div class="form-checker">
    <p>{{ states.asset }}</p>
    <p>{{ states.position }}</p>
    <p>{{ states.before }}</p>
  </div>
  <a-button>Button</a-button>
  <a-autoComplete />
</template>
