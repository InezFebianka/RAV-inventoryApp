<script>
    export default{
        name: 'ItemCard',
        // components:{
        // productlist: [],
        // price: 0,
        // PrimaryButton
    }
</script>

<template>
    <div id="Item-Card">
        <div>
            <img id="item-image" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-2855912/gulaku_gulaku-premium-kuning-kemasan-1-kg_full03.jpg" alt="">
        </div>
        <div>
            <h2>Gula Pasir Curah</h2>
            <p>per Kg</p>
            <p>stok: 150</p>
            <p>Harga: 15000</p>
            <p>stok: 150</p>
        </div>
    </div>
</template>

<style>
#Item-Card{
    border: 0.5px black solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 20px;
    height: 150px;
    width: 350px;
}
#item-image{
    width: 150px;
    border-radius: 20px 0 0 20px;
    margin-right: 20px;
}
</style>