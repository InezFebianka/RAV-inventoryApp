<script>
import SideBar from '../components/SideBar.vue';
import CustomerCard from '../components/CustomerCard.vue';
export default{
    components:{
        SideBar,
        CustomerCard
    }
}
</script>

<template>
    <div id="display-home">
        <SideBar />
        <div id="display-items">
            <CustomerCard class="items"/>
            <CustomerCard class="items"/>
            <CustomerCard class="items"/>
            <CustomerCard class="items"/>
            <CustomerCard class="items"/>
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
    display: grid;
    grid-template-columns: auto auto auto;
}
.items{
    margin-bottom: 10px;
}
</style>