<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Vue 3 Easy Table</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Vue 3 Easy Table</li>
        </ol>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-light text-dark">
                        <i class="fas fa-chart-area me-1"></i>
                        Table
                    </div>
                    <div class="card-body">
                        <!-- <EasyDataTable :headers="headers" :items="items" theme-color="#1d90ff"
                            table-class-name="customize-table" header-text-direction="center"
                            body-text-direction="center" /> -->
                        <EasyDataTable :headers="headers1" :items="items1" table-class-name="customize-table" />
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-light text-dark">
                        <i class="fas fa-chart-area me-1"></i>
                        Table
                    </div>
                    <div class="card-body">
                        <EasyDataTable show-index v-model:items-selected="itemsSelected" buttons-pagination
                            :headers="headers2" :items="items2" :loading="loading">
                            <template #loading>
                                <img src="https://thumbs.gfycat.com/AngelicYellowIberianmole.webp"
                                    style="width: 60px; height: 100px" />
                            </template>
                            <template #item-player="{ player, avator, page }">
                                <div class="player-wrapper">
                                    <img class="avator" :src="avator" alt="" />
                                    <a target="_blank" :href="page">{{ player }}</a>
                                </div>
                            </template>
                            <template #item-team="{ teamName, teamUrl }">
                                <a target="_blank" :href="teamUrl">{{ teamName }}</a>
                            </template>
                            <template #item-operation="item">
                                <div class="operation-wrapper">
                                    <img src="./images/delete.png" class="operation-icon" @click="deleteItem(item)" />
                                    <img src="./images/edit.png" class="operation-icon" @click="editItem(item)" />
                                </div>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { Header, Item } from "vue3-easy-data-table";
//https://codesandbox.io/s/item-slot-65tc9v?file=/src/App.vue:13-1082
export default {

    data() {
        return {
            headers1: [
                { text: "PLAYER", value: "player" },
                { text: "TEAM", value: "team" },
                { text: "NUMBER", value: "number" },
                { text: "POSITION", value: "position" },
                { text: "HEIGHT", value: "indicator.height" },
                { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
                { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
                { text: "COUNTRY", value: "country" },
            ],
            items1: [
                { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: { "height": '6-2', "weight": 185 }, lastAttended: "Davidson", country: "USA" },
                { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: { "height": '6-9', "weight": 250 }, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
                { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: { "height": '6-10', "weight": 240 }, lastAttended: "Texas-Austin", country: "USA" },
                { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: { "height": '6-11', "weight": 242 }, lastAttended: "Filathlitikos", country: "Greece" },
            ],
            headers2: [
                { text: "PLAYER", value: "player" },
                { text: "TEAM", value: "team" },
                { text: "NUMBER", value: "number" },
                { text: "POSITION", value: "position" },
                { text: "HEIGHT", value: "indicator.height" },
                { text: "WEIGHT", value: "indicator.weight", sortable: true },
                { text: "LAST ATTENDED", value: "lastAttended" },
                { text: "COUNTRY", value: "country" },
                { text: "Operation", value: "operation" },
            ],
            items2: [
                { "id": 1, "player": "Stephen Curry", "page": "https://www.nba.com/player/201939/stephen-curry", "avator": "https://bafkreih3oswhrhrvxwhebuqqnlqtklnth5pbc2q3iv6446icpltt6tymvy.ipfs.dweb.link/?filename=Stephen.png", "teamName": "GSW", "teamUrl": "https://www.nba.com/team/1610612744/warriors", "number": 30, "position": 'G', indicator: { "height": '6-2', "weight": 185 }, "lastAttended": "Davidson", "country": "USA" },
                { "id": 2, "player": "Lebron James", "page": "https://www.nba.com/player/2544/lebron-james", "avator": "https://bafkreigphmpdonfxpcb7lwrzv754t2xp2cw3segdpsj44rpurzwnuowhsq.ipfs.dweb.link/?filename=lebron.png", "teamName": "LAL", "teamUrl": "https://www.nba.com/team/1610612747/lakers", "number": 6, "position": 'F', indicator: { "height": '6-9', "weight": 250 }, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA" },
                { "id": 3, "player": "Kevin Durant", "page": "https://www.nba.com/player/201142/kevin-durant", "avator": "https://bafkreihvjvturzol7kfdafrnpxvilj2rti5bwyee7wbvtxogrx34uzjfz4.ipfs.dweb.link/?filename=Kevin.png", "teamName": "BKN", "teamUrl": "https://www.nba.com/team/1610612751/nets", "number": 7, "position": 'F', indicator: { "height": '6-10', "weight": 240 }, "lastAttended": "Texas-Austin", "country": "USA" },
                { "id": 4, "player": "Giannis Antetokounmpo", "page": "https://www.nba.com/player/203507/giannis-antetokounmpo", "avator": "https://bafkreie26rcr5ppdpqrclr3kpk7p7hqyypjo3o2g43yk35ly4e5dmwxigm.ipfs.dweb.link/?filename=Giannis.png", "teamName": "MIL", "teamUrl": "https://www.nba.com/team/1610612749/bucks", "number": 34, "position": 'F', indicator: { "height": '6-11', "weight": 242 }, "lastAttended": "Filathlitikos", "country": "Greece" },
            ]
        }
    },
    methods: {
        editItem(item) {
            console.log(item.player);
        },
        deleteItem(item) {
            console.log(item.id);
        }
    }
}
</script>

<style scoped>
@import "https://unpkg.com/vue3-easy-data-table/dist/style.css";

.operation-wrapper .operation-icon {
    width: 20px;
    cursor: pointer;
}

.player-wrapper {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-items: center;
}

.avator {
    margin-right: 10px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}

.customize-table {
    --easy-table-border: 1px solid #445269;
    --easy-table-row-border: 1px solid #445269;

    --easy-table-header-font-size: 14px;
    --easy-table-header-height: 50px;
    --easy-table-header-font-color: #c1cad4;
    --easy-table-header-background-color: #2d3a4f;

    --easy-table-header-item-padding: 10px 15px;

    --easy-table-body-even-row-font-color: #fff;
    --easy-table-body-even-row-background-color: #4c5d7a;

    --easy-table-body-row-font-color: #c0c7d2;
    --easy-table-body-row-background-color: #2d3a4f;
    --easy-table-body-row-height: 40px;
    --easy-table-body-row-font-size: 16px;

    --easy-table-body-row-hover-font-color: #2d3a4f;
    --easy-table-body-row-hover-background-color: #eee;

    --easy-table-body-item-padding: 10px 15px;

    --easy-table-footer-background-color: #2d3a4f;
    --easy-table-footer-font-color: #c0c7d2;
    --easy-table-footer-font-size: 14px;
    --easy-table-footer-padding: 0px 10px;
    --easy-table-footer-height: 50px;

    --easy-table-rows-per-page-selector-width: 70px;
    --easy-table-rows-per-page-selector-option-padding: 10px;
    --easy-table-rows-per-page-selector-z-index: 1;


    --easy-table-scrollbar-track-color: #2d3a4f;
    --easy-table-scrollbar-color: #2d3a4f;
    --easy-table-scrollbar-thumb-color: #4c5d7a;
    ;
    --easy-table-scrollbar-corner-color: #2d3a4f;

    --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>