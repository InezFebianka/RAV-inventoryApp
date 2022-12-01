<script>
import PrimaryButton from '../components/PrimaryButton.vue';
export default{
    components:{
        PrimaryButton
    },
    data(){
        return {
            itemForm:{
                nama_item: '',
                unit: 0,
                stok: 0,
                harga_satuan: 0,
                barang: ''
            }
        }
    }
}
</script>

<template>
    <div>
        <form action="">
            <div class="form-section">
                <label for="nama_item">Nama Item</label>
                <input type="text" v-model="itemForm.nama_item" id="nama_item" class="form-control" placeholder="isi nama produk">
            </div>
            <div class="form-section">
                <label for="unit">Unit</label>
                <select class="form-control" name="unit" id="unit" v-model="itemForm.unit">
                    <option value=0 disabled selected>Pilih tipe unit</option>
                    <option value=1>Kg(s)</option>
                    <option value=2>Pc(s)</option>
                </select>
            </div>
            <div class="form-section">
                <label for="stok">Stok</label>
                <input type="number" v-model="itemForm.stok" id="stok" class="form-control" placeholder="isi stok produk">
            </div>
            <div class="form-section">
                <label for="harga_satuan">Harga Satuan</label>
                <input type="number" v-model="itemForm.harga_satuan" id="harga_satuan" class="form-control" placeholder="isi harga satuan produk">
            </div>
            <div class="form-btn">
                <PrimaryButton msg="Submit"/>
            </div>
        </form>
    </div>
</template>

<style>
.form-control{
    width: 400px;
    height: 30px;
    border-radius: 10px;
    border: none;
    padding-left: 20px;
}
.form-section{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.form-btn{
    display: flex;
    justify-content: flex-end;
}
</style>