<template>
  <!-- this displays the users when the users tab is clicked on -->
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="users" :options="options">
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editUser(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteuser(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import usersservice from '@/services/usersservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Users',
  data () {
    // data expected to be reurned
    return {
      messagetitle: ' Users List ',
      users: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'email', 'userid', 'remove'],
      options: {
        perPage: 10,
        filterable: ['email', 'usersid'],
        sortable: ['users'],
        headings: {
          _id: 'ID',
          Messageid: 'Messageid',
          userid: 'Userid'
        }
      }
    }
  },
  // Fetches Messages when the component is created.
  created () {
    // runs loadusers function
    this.loadUsers()
  },
  methods: {
    loadUsers: function () {
      // this gets users from database
      usersservice.fetchUsers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.users = response.data
          console.log(this.Users)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteUser: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          usersservice.deleteUser(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.user = response.data
              console.log(this.user)
              this.loadUsers()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this User ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'The User still exits!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
