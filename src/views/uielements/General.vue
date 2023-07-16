<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">General</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">General</li>
        </ol>
        <ColorsPallete />
        <AlertCallout />

    </div>
</template>

<script>
import ColorsPallete from './ColorsPallete.vue';
import AlertCallout from './AlertsCallout.vue'
export default {
    components: { ColorsPallete, AlertCallout }
}
</script>

