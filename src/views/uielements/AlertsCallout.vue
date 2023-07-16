<template>
    <h5 class="mt-4 mb-2">Alerts and Callouts</h5>
    <div class="row">
        <div class="col-xl-6">
            <div class="card mb-4">
                <div class="card-header  bg-teal text-white">
                    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                    Alert
                </div>
                <div class="card-body">
                    <div class="row mx-3">
                        <div class="alert alert-danger alert-dismissible fade show">
                            <h4 class="alert-heading"><font-awesome-icon :icon="['fas', 'heart-circle-exclamation']" />
                                Oops! Something went
                                wrong.</h4>
                            <p>Please enter a valid value in all the required fields before proceeding. If you need any help
                                just place the mouse pointer above info icon next to the form field.</p>
                            <hr>
                            <p class="mb-0">Once you have filled all the details, click on the 'Next' button to continue.
                            </p>
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                        <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
                            <font-awesome-icon :icon="['fas', 'circle-check']" />
                            <strong class="mx-2">Success!</strong> Your message has been sent successfully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>

                        <!-- Error Alert -->
                        <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                            <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
                            <strong class="mx-2">Error!</strong> A problem has been occurred while submitting your data.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>

                        <!-- Warning Alert -->
                        <div class="alert alert-warning alert-dismissible d-flex align-items-center fade show">
                            <font-awesome-icon :icon="['fas', 'car-on']" />
                            <strong class="mx-2">Warning!</strong> There was a problem with your network connection.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>

                        <!-- Info Alert -->
                        <div class="alert alert-info alert-dismissible d-flex align-items-center fade show">
                            <font-awesome-icon :icon="['fas', 'circle-info']" />
                            <strong class="mx-2">Info!</strong> Please read the comments carefully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card mb-4">
                <div class="card-header  bg-info text-white">
                    <font-awesome-icon :icon="['fas', 'bullhorn']" />
                    Callouts
                </div>
                <div class="card-body">
                    <div class="row mx-3">
                        <div class="callout callout-danger">
                            <h5>I am a danger callout!</h5>

                            <p>There is a problem that we need to fix. A wonderful serenity has taken possession of my
                                entire
                                soul,
                                like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        </div>
                        <div class="callout callout-info">
                            <h5>I am an info callout!</h5>

                            <p>Follow the steps to continue to payment.</p>
                        </div>
                        <div class="callout callout-warning">
                            <h5>I am a warning callout!</h5>

                            <p>This is a yellow callout.</p>
                        </div>
                        <div class="callout callout-success">
                            <h5>I am a success callout!</h5>

                            <p>This is a green callout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.callout {
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #eee;
    border-left-width: 5px;
    border-radius: 3px;
}

.callout h4 {
    margin-top: 0;
    margin-bottom: 5px;
}

.callout p:last-child {
    margin-bottom: 0;
}

.callout code {
    border-radius: 3px;
}

.callout+.bs-callout {
    margin-top: -5px;
}

.callout-default {
    border-left-color: #777;
}

.callout-default h4 {
    color: #777;
}

.callout-primary {
    border-left-color: #428bca;
}

.callout-primary h4 {
    color: #428bca;
}

.callout-success {
    border-left-color: #5cb85c;
}

.callout-success h4 {
    color: #5cb85c;
}

.callout-danger {
    border-left-color: #d9534f;
}

.callout-danger h4 {
    color: #d9534f;
}

.callout-warning {
    border-left-color: #f0ad4e;
}

.callout-warning h4 {
    color: #f0ad4e;
}

.callout-info {
    border-left-color: #5bc0de;
}

.callout-info h4 {
    color: #5bc0de;
}

.callout-bdc {
    border-left-color: #29527a;
}

.callout-bdc h4 {
    color: #29527a;
}




/* .alert .icon {
    margin-right: 10px;
}

.alert .close,
.alert .mailbox-attachment-close {
    color: #000;
    opacity: .2;
}

.alert .close:hover,
.alert .mailbox-attachment-close:hover {
    opacity: .5;
}

.alert a {
    color: #fff;
    text-decoration: underline;
}

.alert-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #006fe6;
}

.alert-default-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}

.alert-default-primary hr {
    border-top-color: #9fcdff;
}

.alert-default-primary .alert-link {
    color: #002752;
}

.alert-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #60686f;
}

.alert-default-secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
}

.alert-default-secondary hr {
    border-top-color: #c8cbcf;
}

.alert-default-secondary .alert-link {
    color: #202326;
}

.alert-success {
    color: #fff;
    background-color: #28a745;
    border-color: #23923d;
}

.alert-default-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.alert-default-success hr {
    border-top-color: #b1dfbb;
}

.alert-default-success .alert-link {
    color: #0b2e13;
}

.alert-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #148ea1;
}

.alert-default-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
}

.alert-default-info hr {
    border-top-color: #abdde5;
}

.alert-default-info .alert-link {
    color: #062c33;
}

.alert-warning {
    color: #1f2d3d;
    background-color: #ffc107;
    border-color: #edb100;
}

.alert-default-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
}

.alert-default-warning hr {
    border-top-color: #ffe8a1;
}

.alert-default-warning .alert-link {
    color: #533f03;
}

.alert-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #d32535;
}

.alert-default-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}

.alert-default-danger hr {
    border-top-color: #f1b0b7;
}

.alert-default-danger .alert-link {
    color: #491217;
}

.alert-light {
    color: #1f2d3d;
    background-color: #f8f9fa;
    border-color: #e9ecef;
}

.alert-default-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
}

.alert-default-light hr {
    border-top-color: #ececf6;
}

.alert-default-light .alert-link {
    color: #686868;
} */
</style>