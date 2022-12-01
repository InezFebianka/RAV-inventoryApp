<script>
import SideBar from '../components/SideBar.vue';
import FormItem from '../components/FormItem.vue';
export default{
    components:{
        SideBar,
        FormItem
    }
}
</script>

<template>
    <div id="display-home">
        <SideBar />
        <div id="display-items" >
            <FormItem />
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