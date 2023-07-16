<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Form</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Form</li>
        </ol>
        <!--        <div class="row">-->
        <!--            <div class="col-xl-3 col-md-6">-->
        <!--                <div class="card bg-primary text-white mb-4">-->
        <!--                    <div class="card-body">Primary Card</div>-->
        <!--                    <div class="card-footer d-flex align-items-center justify-content-between">-->
        <!--                        <a class="small text-white stretched-link" href="#">View Details</a>-->
        <!--                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="col-xl-3 col-md-6">-->
        <!--                <div class="card bg-warning text-white mb-4">-->
        <!--                    <div class="card-body">Warning Card</div>-->
        <!--                    <div class="card-footer d-flex align-items-center justify-content-between">-->
        <!--                        <a class="small text-white stretched-link" href="#">View Details</a>-->
        <!--                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="col-xl-3 col-md-6">-->
        <!--                <div class="card bg-success text-white mb-4">-->
        <!--                    <div class="card-body">Success Card</div>-->
        <!--                    <div class="card-footer d-flex align-items-center justify-content-between">-->
        <!--                        <a class="small text-white stretched-link" href="#">View Details</a>-->
        <!--                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="col-xl-3 col-md-6">-->
        <!--                <div class="card bg-danger text-white mb-4">-->
        <!--                    <div class="card-body">Danger Card</div>-->
        <!--                    <div class="card-footer d-flex align-items-center justify-content-between">-->
        <!--                        <a class="small text-white stretched-link" href="#">View Details</a>-->
        <!--                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--        <div class="row">-->
        <!--            <div class="col-xl-6">-->
        <!--                <div class="card mb-4">-->
        <!--                    <div class="card-header">-->
        <!--                        <i class="fas fa-chart-area me-1"></i>-->
        <!--                        Area Chart Example-->
        <!--                    </div>-->
        <!--                    <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="col-xl-6">-->
        <!--                <div class="card mb-4">-->
        <!--                    <div class="card-header">-->
        <!--                        <i class="fas fa-chart-bar me-1"></i>-->
        <!--                        Bar Chart Example-->
        <!--                    </div>-->
        <!--                    <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="row">
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Quick Example
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label fw-bold">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label fw-bold">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header bg-info text-white">
                        <i class="fas fa-chart-bar me-1"></i>
                        Horizontal Form
                    </div>
                    <div class="card-body">

                        <form>
                            <div class="row">
                                <label for="fname" class="col-sm-2
                col-form-label">First Name</label>
                                <div class="col-sm">
                                    <input type="text" class="form-control" id="fname" placeholder="First Name">
                                </div>
                            </div>

                            <div class="row mt-4">
                                <label for="lname" class="col-sm-2
                col-form-label">Last Name</label>
                                <div class="col-sm">
                                    <input type="text" class="form-control" id="lname" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row mt-4">
                                <label for="email" class="col-sm-2
                col-form-label">Email Id</label>
                                <div class="col-sm">
                                    <input type="email" class="form-control" id="email" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row mt-4 mb-4">
                                <label for="mobile" class="col-sm-2
                col-form-label">Mobile No</label>
                                <div class="col-sm">
                                    <input type="tel" class="form-control" id="mobile" placeholder="Last Name">
                                </div>
                            </div>

                            <fieldset class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div class="col-sm">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gender" id="male" value="option1"
                                            checked>
                                        <label class="form-check-label" for="male">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gender" id="female"
                                            value="option2">
                                        <label class="form-check-label" for="female">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gender" id="others"
                                            value="option3">
                                        <label class="form-check-label" for="others">
                                            Others
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Praktik Form Flatpicker
                    </div>
                    <div class="card-body">
                        <!-- <form>
                            <div class="row">
                                <label for="ftgl_dokumen" class="col-sm-2 col-form-label">Tanggal Dokumen</label>
                                <div class="col-sm">
                                    <input type="date" class="form-control" id="ftgl_dokumen" placeholder="Tanggal Dokumen">
                                </div>
                            </div>

                            <div class="row mt-4">
                                <label for="lname" class="col-sm-2 col-form-label">Last Name</label>
                                <div class="col-sm">
                                    <input type="text" class="form-control" id="lname" placeholder="Last Name">
                                </div>
                            </div>
                        </form> -->

                        <div class="form-group">
                            <label>Select a date</label>
                            <div class="input-group">
                                <!-- <flat-pickr v-model="date" :config="timeConfig" class="form-control"
                                    placeholder="Select date" name="date" /> -->
                                <flat-pickr id="time" v-model="date" :config="timeConfig" class="form-control bg-white" />
                                <!-- <div class="input-group-append">
                                    <button class="btn btn-default" type="button" title="Toggle" data-toggle>
                                        <i class="fa fa-calendar" />
                                        <span aria-hidden="true" class="sr-only">Toggle</span>
                                    </button>
                                    <button class="btn btn-default" type="button" title="Clear" data-clear>
                                        <i class="fa fa-times" />
                                        <span aria-hidden="true" class="sr-only">Clear</span>
                                    </button>
                                </div> -->
                            </div>
                        </div>
                        <!-- <pre>Selected date is - {{ date }}</pre> -->

                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <FormFlatPicker />
            </div>
            <div class="col-xl-6">
                <ModalComponent />
            </div>
        </div>
    </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/light.css';
import ModalComponent from './ModalComponent.vue'
import FormFlatPicker from './FormFlatPicker.vue'
export default {
    components: { ModalComponent, FormFlatPicker, flatPickr },
    data() {
        return {

            time: null,
            timeConfig: {
                // wrap: true,
                // altFormat: 'M j, Y',
                // altInput: true,
                // dateFormat: 'Y-m-d',
            },
        }
    }
}
</script>

<!-- <script setup>
import { ref } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';


import ModalComponent from './ModalComponent.vue'
import FormFlatPicker from './FormFlatPicker.vue'

const date = ref('2022-10-28');


const config = ref({
    wrap: true, 
    altFormat: 'M j, Y',
    altInput: true,
    dateFormat: 'Y-m-d',

});
</script> -->