<template>
  <div>
    <v-card>
    <v-card-title>
      Staff List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
    :items="staff"
    class="elevation-1 staff-table" 
    :pagination.sync="pagination" 
    :search="search"
  >

    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td >{{ props.item.email }}</td>
      <td >{{ props.item.type }}</td>
      <td >{{ props.item.notelepon }}</td>
      <td ><a :href="'/staff-list/latest-projects/' + props.item.id" >Detail</a></td>
    </template>
    <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>
</v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { VDataTable} from 'vuetify/lib'

export default {
  components: {
    Logo,
    VuetifyLogo,
    VDataTable
  },
  data(){
    return {
      search: '',
      headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Email', value: 'email' },
          { text: 'Position', value: 'type' },
          { text: 'Contact', value: 'phone' },
          { text: 'Control', value: 'id', sortable: false }
      ],
      staff: [],
      pagination: {
          rowsPerPage: -1
      },
    }
  },
  async asyncData({ $axios }) {
    const stafflist = await $axios.$get('/staff-list')
    return { staff: stafflist.data }
  },
  head() {
    return{
      title: 'Staff List - ' + process.env.APP_NAME
    }
  }
}
</script>
