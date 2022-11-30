<script>
import SideBar from '../components/SideBar.vue';
import ItemCard from '../components/ItemCard.vue';
export default{
    components:{
        SideBar,
        ItemCard
    }
}
</script>

<template>
    <div id="display-home">
        <SideBar />
        <div id="display-items">
            <ItemCard class="items"/>
            <ItemCard class="items"/>
            <ItemCard class="items"/>
            <ItemCard class="items"/>
            <ItemCard class="items"/>
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