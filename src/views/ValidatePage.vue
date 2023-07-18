<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Validation</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Validation</li>
        </ol>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-light text-dark">
                        <i class="fas fa-chart-area me-1"></i>
                        Vue Validate
                    </div>
                    <div class="card-body">

                        <Form @submit="onSubmit">
                            <div class="mb-3">
                                <label for="email" class="form-label fw-bold">Email address</label>
                                <Field name="email" class="form-control" type="email" :rules="validateEmail" />
                                <ErrorMessage name="email" class="text-danger" />

                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label fw-bold">Password</label>
                                <Field name="password" class="form-control" type="password" :rules="passwordRules" />
                                <ErrorMessage name="password" class="text-danger" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return { passwordRules: yup.string().min(6, 'Minimal panjang 6 karakter').required('Jangan dikosongi..!') }
    },
    methods: {

        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
        },
        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }

            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }

            // All is good
            return true;
        }
    },
};
</script>
