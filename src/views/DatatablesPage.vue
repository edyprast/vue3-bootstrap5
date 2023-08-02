<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Datatables</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Datatables</li>
        </ol>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-light text-dark">
                        <i class="fas fa-chart-area me-1"></i>
                        Datatables Demo
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <DataTable class="display cell-border header-border" :columns="columns" :data="items"
                                    :options="options" ref="table" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue'

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-responsive';
import 'datatables.net-select';

import jszip from 'jszip';
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
DataTable.use(DataTablesCore);
DataTablesCore.Buttons.jszip(jszip);
DataTablesCore.Buttons.pdfMake(pdfmake);

export default {
    components: { DataTable, DataTablesCore },
    data() {
        return {
            counter: 0,
            dt: '',
            data: [],
            table: '',
            options: {
                dom: 'Bftip',
                responsive: true, select: true, searching: false, paging: false, buttons: ['copy', 'csv', 'excel', 'pdf']
            },
            columns: [{
                data: 'a',
                title: 'First',
            },
            {
                data: 'b',
                title: 'Second',
            },
            {
                data: 'c',
                title: 'Third',
            },],
            items: [
                {
                    id: 1,
                    a: "A1",
                    b: "B1",
                    c: "C1"
                },
                {
                    id: 2,
                    a: "A2",
                    b: "B2",
                    c: "C2"
                },
                {
                    id: 3,
                    a: "A3",
                    b: "B3",
                    c: "C3"
                },
            ]

        }
    }
}

</script>

<style scope>
@import 'datatables.net-dt';
@import 'datatables.net-buttons-dt';
@import 'datatables.net-responsive-dt';
@import 'datatables.net-select-dt';
</style>