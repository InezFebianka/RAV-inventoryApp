<script>

export default {
    name: 'SideBar',
    methods: {

    }
}
</script>

<template>
    <div id="sidebar-menu">
        <div >
            <div>
                <div class="sb-section">
                    <h2 >ADD</h2>
                    <ul >
                        <li><router-link class="list" to="/input-item">ITEM</router-link></li>
                        <li><router-link class="list" to="/input-customer">CUSTOMER</router-link></li>
                        <li>SALES</li>
                    </ul>
                </div>
                <br>
                <div class="sb-section">
                    <h2 >SEE DATA</h2>
                    <ul >
                        <li><router-link class="list" to="/">ITEM</router-link> </li>
                        <li><router-link class="list" to="/customer-list">CUSTOMER</router-link> </li>
                        <li><router-link class="list" to="/sales">SALES</router-link> </li>
                    </ul>
                </div>    
            </div>
        </div>
    </div>
</template>

<style>
#sidebar-menu{
    border: 0.5px rgb(49, 49, 49) solid;
    width: 150px;
    padding: 10px;
    border-radius: 20px;
}
.list{
    text-decoration: none;
    color: #424141;
}
li{
    list-style: none;
    
}
li:hover{
    background-color: rgb(136, 134, 135);
    cursor: pointer;
}
h2{
    padding-bottom: 10px;
}
.sb-section{
    padding: 10px;
}
</style>