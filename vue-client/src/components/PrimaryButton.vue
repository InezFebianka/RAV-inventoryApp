<script>

export default{
    name: 'PrimaryButton',
    components:{

    },
    props:['msg']
}
</script>


<template>
    <button class="my-btn">{{msg}}</button>
</template>

<style>
    .my-btn{
        background-color: #7e89b7;
        padding: 5px 10px;
        border-radius: 5px;
        border: 0;
        min-width: 100px;
    }
    .my-btn:hover{
        background-color: #090544;
        color: #7e89b7;
    }
</style>