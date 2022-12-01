<script>
    export default{
        name: 'CustomerCard',
        // components:{
        // productlist: [],
        // price: 0,
        // PrimaryButton
    }
</script>

<template>
    <div id="Cust-Card">
        <div>
            <img id="Cust-image" src="https://miro.medium.com/max/1388/1*KXxj_GFYy9CwAOG-zkGf8g.png" alt="">
        </div>
        <div>
            <h2>Jhon Doe</h2>
            <p>08123456789</p>
            <p>jhonDoe@mail.com</p>
            <p>Sawah Besar, Jakarta Barat</p>
            <p>tipe diskon: persentase</p>
            <p>diskon: 15 %</p>
        </div>
    </div>
</template>

<style>
#Cust-Card{
    border: 0.5px black solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 20px;
    height: 150px;
    width: 350px;
    padding-right: 10px;
}
#Cust-image{
    height: 150px;
    width: 150px;
    border-radius: 20px 0 0 20px;
    margin-right: 15px;
    object-fit: cover;
}
</style>