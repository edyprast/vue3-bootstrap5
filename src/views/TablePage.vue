<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Table</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Table</li>
        </ol>

        <div class="row">
            <div class="col">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Table
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Table
                    </div>
                    <div class="card-body">
                        <!-- <p v-for="submasalah in subsubmasalah" :key="submasalah.kode_subsub">
                            {{ submasalah.uraian }}
                        </p> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// import kodeKlasifikasi from '../assets/kode_klasifikasi.json'

export default {
    data() {
        return {
            nama: 'edy',
            nourut: 0,
        }
    },
    methods: {

    }
}
</script>