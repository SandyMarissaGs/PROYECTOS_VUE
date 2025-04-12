<script>
export default {
    data() {
        return {
            display: '', //gaurda los num
            currentValue: 0, //almacena

        }
    }, methods: {
        agregarNumero(numero) {
            this.display += numero;
        }, calculo() {
            try {
                this.currentValue = eval(this.display); //evalua
                this.display = this.currentValue.toString(); 
            } catch (error) { // ce
                this.display = 'Error';// 
            }

        },
        pantallaLimpia() {
            this.display = '';
        },
        eliminarnumero() {
            this.display = this.display.slice(0, -1);
        }
    }

}
</script>

<template>
    <div class="container d-flex justify-content-center mt-4" style="height: 420px;">
        <div class="card p-3" style="width: 300px; background-color:black;">
            <div class="card-body">
                <h6 class="text-center title" > Calculadora V2</h6>
                <!-- Display de calculadora -->
                <div class="mb-3">
                    <input type="text" class="form-control" v-model="display" disabled>
                </div>
                <div class="d-flex justify-content-between ">
                    <button class=" btn btn-secondary" @click="">%</button>
                    <button class=" btn btn-secondary" @click="pantallaLimpia">CE</button>
                    <button class=" btn btn-secondary" @click="pantallaLimpia">C</button>
                    <button class="btn btn-danger" @click="eliminarnumero">B</button>
                </div>
                <!-- Botones de la calculadora -->
                <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-secondary" @click="agregarNumero(7)">7</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(8)">8</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(9)">9</button>
                    <button class="btn btn-primary" @click="agregarNumero('/')">/</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-secondary" @click="agregarNumero(4)">4</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(5)">5</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(6)">6</button>
                    <button class="btn btn-primary" @click="agregarNumero('*')">*</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-secondary" @click="agregarNumero(1)">1</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(2)">2</button>
                    <button class=" btn btn-secondary" @click="agregarNumero(3)">3</button>
                    <button class="btn btn-primary" @click="agregarNumero('-')">-</button>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <button class=" btn btn-secondary" @click="calculo">=</button>
                    <button class=" btn btn-secondary" @click="agregarNumero">0</button>
                    <button class=" btn btn-secondary" @click="agregarNumero('.')">.</button>
                    <button class="btn btn-primary" @click="agregarNumero('+')">+</button>
                </div>
            </div>

        </div>

    </div>
</template>
<style>
button {
    width: 45px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    border-radius: 15px;
}
.title
{
    color: #f9f5f5;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 8px;
    
}
    
</style>