<template>
    <navbar></navbar>
    <div class="uk-flex main-body">
        <sidebar></sidebar>
        <router-view></router-view>
        <chatroom></chatroom>
    </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import Chatroom from './components/chatroom.vue'

export default {
    components: {
        Navbar,
        Sidebar,
        Chatroom
    }
}
</script>

<style lang="stylus">
    @require './styles/style'
</style>
