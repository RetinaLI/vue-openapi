<template>
  <router-view/>
</template>

<script>
import { ProfileService } from '@/services/profile';
import { STORE_MUTATION_MAP } from './stores';

let profileService = new ProfileService();

export default {
  name: 'App',
  data () {
    return {};
  },
  metaInfo: {
    title: 'asdasdasd'
  },
  async created () {
    let user = await profileService.getCurrentUser();
    this.$store.commit(STORE_MUTATION_MAP.UPDATE_CURRENT_USER, user);
  }
};
</script>
