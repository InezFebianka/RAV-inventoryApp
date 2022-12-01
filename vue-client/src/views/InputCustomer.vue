<script>
import SideBar from '../components/SideBar.vue';
import FormCustomer from '../components/FormCustomer.vue';
export default{
    components:{
        SideBar,
        FormCustomer
    }
}
</script>

<template>
    <div id="display-home">
        <SideBar />
        <div id="display-items" >
            <FormCustomer />
        </div>
    </div>
</template>

<style>
#display-home{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}
#display-items{
    width: 80%;
}
</style>