<template>
  <div>
  <v-layout column>
    <v-flex xs12 text-xs-center>
        <h1>TIMESHEET LOGIN</h1>
    </v-flex>
  </v-layout>
  <v-layout row justify-center>
    <v-flex md5 text-xs-center>
    
      <v-card>
                <v-card-text class="pt-4">
                  
                  <div>

                    <v-form @submit.prevent="checkLogin" id="check-login-form">
                        <v-text-field
                          label="Enter your e-mail address"
                          v-model="email"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Enter your password"
                          v-model="password"
                          min="8" 
                          type="password"
                          required
                        ></v-text-field>
                        <v-layout>
                            <v-btn :loading="loading" type="submit" color="primary" dark><v-icon left dark small>lock</v-icon>Login</v-btn>          
                        </v-layout>
                        
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: 'rendy@avasoft.net',
      password: 'Zxcv1234!',
      loading: false
    }
  },
  methods: {
    async checkLogin() {
      this.loading = true;
      this.$nuxt.$loading.start()
      return this.$auth
        .loginWith('local', {
          data: {
            username: this.email,
            password: this.password
          }
        })
        .catch(e => {
          this.loading= false
        })
    }
  }
}
</script>