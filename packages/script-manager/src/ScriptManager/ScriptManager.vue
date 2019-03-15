<template lang="pug">
  - var rootClass = "script-manager"

  div(class=rootClass)
    div(class=`${rootClass}__title`) {{ title }}
    div Owner: {{ initProps.sender }}
    button(@click="handleSubmit") Submit
</template>

<script>
import store from './store';
import { mapState } from 'vuex';

export default {
  name: 'ScriptManager',

  store,

  props: {
    initProps: {
      sender: String,
    },
    onSubmit: {
      type: Function,
      required: false,
      default: () => {},
    },
  },

  computed: {
    ...mapState(['title']),
  },

  methods: {
    handleSubmit() {
      this.onSubmit({ msg: 'something needful' });
    },
  },
};
</script>

<style lang="scss">
.script-manager {
  font-size: 24px;
}
</style>

