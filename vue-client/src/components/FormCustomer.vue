<script>
import PrimaryButton from '../components/PrimaryButton.vue';
export default{
    components:{
        PrimaryButton
    },
    data(){
        return {
            customerForm:{
                nama: '',
                contact: '',
                email: '',
                alamat: '',
                diskon: 0,
                tipe_diskon: 0,
                ktp: ''
            }
        }
    }
}
</script>

<template>
    <div>
        <form action="">
            <div class="form-section">
                <label for="nama">Nama</label>
                <input type="text" v-model="customerForm.nama" id="nama" class="form-control" placeholder="isi nama customer">
            </div>
            <div class="form-section">
                <label for="contact">Contact</label>
                <input type="number" v-model="customerForm.contact" id="contact" class="form-control" placeholder="isi contact customer">
            </div>
            <div class="form-section">
                <label for="email">Email</label>
                <input type="email" v-model="customerForm.email" id="email" class="form-control" placeholder="isi email customer">
            </div>
            <div class="form-section">
                <label for="alamat">Alamat</label>
                <input type="text" v-model="customerForm.alamat" id="alamat" class="form-control" placeholder="isi alamat customer">
            </div>
            <div class="form-section">
                <label for="diskon">Diskon</label>
                <input type="number" v-model="customerForm.diskon" id="diskon" class="form-control" placeholder="isi diskon customer">
            </div>
            <div class="form-section">
                <label for="tipe_diskon">Tipe Diskon</label>
                <select class="form-control" name="tipe_diskon" id="tipe_diskon" v-model="customerForm.tipe_diskon">
                    <option value=0 disabled selected>Pilih tipe diskon</option>
                    <option value=1>Presentase</option>
                    <option value=2>Fix Discount</option>
                </select>
            </div>
            <div class="form-section">
                <label for="ktp">KTP</label>
                <input type="text" v-model="customerForm.ktp" id="ktp" class="form-control" placeholder="isi link gambar ktp">
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