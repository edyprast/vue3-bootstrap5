<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Excel</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Excel</li>
        </ol>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-light text-dark">
                        <i class="fas fa-chart-area me-1"></i>
                        Excel Import
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-primary" @click="getPosts">Export to Excel</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import * as XLSX from 'xlsx';
export default {
    data() {
        return {
            raw_data: [],
            url: "https://sheetjs.com/data/executive.json",
            isLoading: false
        }
    },
    methods: {
        async getPosts() {
            this.isLoading = true;
            const response = await axios.get(this.url);
            this.raw_data = response.data

            /* filter for the Presidents */
            const prez = this.raw_data.filter(row => row.terms.some(term => term.type === "prez"));

            /* sort by first presidential term */
            prez.forEach(row => row.start = row.terms.find(term => term.type === "prez").start);
            prez.sort((l, r) => l.start.localeCompare(r.start));

            /* flatten objects */
            const rows = prez.map(row => ({
                name: row.name.first + " " + row.name.last,
                birthday: row.bio.birthday
            }));

            /* generate worksheet and workbook */
            const worksheet = XLSX.utils.json_to_sheet(rows);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");


            /* fix headers */
            XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });

            /* calculate column width */
            const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
            worksheet["!cols"] = [{ wch: max_width }];

            /* create an XLSX file and try to save to Presidents.xlsx */
            XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });

            console.log(prez)
        }
    },
    // mounted() {
    //     this.getPosts()
    // }
}
</script>
