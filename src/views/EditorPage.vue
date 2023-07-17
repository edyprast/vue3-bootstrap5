<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Editor</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Editor</li>
        </ol>

        <div class="row">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Quick Example
                    </div>
                    <div class="card-body">

                        <QuillEditor theme="snow" toolbar="full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    components: { QuillEditor }
}
</script>