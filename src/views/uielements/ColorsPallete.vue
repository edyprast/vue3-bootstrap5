<template>
    <div class="row">
        <div class="col-xl-12">
            <div class="card mb-4">
                <div class="card-header  bg-primary text-white">
                    <font-awesome-icon :icon="['fas', 'tag']" />
                    Color Palette
                </div>
                <div class="card-body">
                    <div class="col-12">
                        <h5>Theme Colors</h5>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Primary</h4>

                            <div class="color-palette-set">
                                <div class="bg-primary color-palette"><span>#007bff</span></div>
                                <div class="bg-primary disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Secondary</h4>

                            <div class="color-palette-set">
                                <div class="bg-secondary color-palette"><span>#6c757d</span></div>
                                <div class="bg-secondary disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Info</h4>

                            <div class="color-palette-set">
                                <div class="bg-info color-palette"><span>#17a2b8</span></div>
                                <div class="bg-info disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Success</h4>

                            <div class="color-palette-set">
                                <div class="bg-success color-palette"><span>#28a745</span></div>
                                <div class="bg-success disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Warning</h4>

                            <div class="color-palette-set">
                                <div class="bg-warning color-palette"><span>#ffc107</span></div>
                                <div class="bg-warning disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Danger</h4>

                            <div class="color-palette-set">
                                <div class="bg-danger color-palette"><span>#dc3545</span></div>
                                <div class="bg-danger disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                    <div class="col-12">
                        <h5 class="mt-3">Black/White Nuances</h5>
                    </div>
                    <!-- /.col-12 -->
                    <div class="row">
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Black</h4>

                            <div class="color-palette-set">
                                <div class="bg-black color-palette"><span>#000000</span></div>
                                <div class="bg-black disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Gray Dark</h4>

                            <div class="color-palette-set">
                                <div class="bg-gray-dark color-palette"><span>#343a40</span></div>
                                <div class="bg-gray-dark disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center">Gray</h4>

                            <div class="color-palette-set">
                                <div class="bg-gray color-palette"><span>#adb5bd</span></div>
                                <div class="bg-gray disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-light">Light</h4>

                            <div class="color-palette-set">
                                <div class="bg-light color-palette"><span>#1f2d3d</span></div>
                                <div class="bg-light disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                    <div class="col-12">
                        <h5 class="mt-3">Colors</h5>
                    </div>
                    <!-- /.col-12 -->
                    <div class="row">
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-indigo">Indigo</h4>

                            <div class="color-palette-set">
                                <div class="bg-indigo color-palette"><span>#6610f2</span></div>
                                <div class="bg-indigo disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-lightblue">Lightblue</h4>

                            <div class="color-palette-set">
                                <div class="bg-lightblue color-palette"><span>#3c8dbc</span></div>
                                <div class="bg-lightblue disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-navy">Navy</h4>

                            <div class="color-palette-set">
                                <div class="bg-navy color-palette"><span>#001f3f</span></div>
                                <div class="bg-navy disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-purple">Purple</h4>

                            <div class="color-palette-set">
                                <div class="bg-purple color-palette"><span>#605ca8</span></div>
                                <div class="bg-purple disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-fuchsia">Fuchsia</h4>

                            <div class="color-palette-set">
                                <div class="bg-fuchsia color-palette"><span>#f012be</span></div>
                                <div class="bg-fuchsia disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-pink">Pink</h4>

                            <div class="color-palette-set">
                                <div class="bg-pink color-palette"><span>#e83e8c</span></div>
                                <div class="bg-pink disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-maroon">Maroon</h4>

                            <div class="color-palette-set">
                                <div class="bg-maroon color-palette"><span>#d81b60</span></div>
                                <div class="bg-maroon disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-orange">Orange</h4>

                            <div class="color-palette-set">
                                <div class="bg-orange color-palette"><span>#ff851b</span></div>
                                <div class="bg-orange disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-lime">Lime</h4>

                            <div class="color-palette-set">
                                <div class="bg-lime color-palette"><span>#01ff70</span></div>
                                <div class="bg-lime disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-teal">Teal</h4>

                            <div class="color-palette-set">
                                <div class="bg-teal color-palette"><span>#39cccc</span></div>
                                <div class="bg-teal disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 col-md-2">
                            <h4 class="text-center bg-olive">Olive</h4>

                            <div class="color-palette-set">
                                <div class="bg-olive color-palette"><span>#3d9970</span></div>
                                <div class="bg-olive disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.color-palette {
    height: 35px;
    line-height: 35px;
    text-align: right;
    padding-right: .75rem;
}

.color-palette.disabled {
    text-align: center;
    padding-right: 0;
    display: block;
}

.color-palette-set {
    margin-bottom: 15px;
}

.color-palette span {
    display: none;
    font-size: 12px;
}

.color-palette:hover span {
    display: block;
}

.color-palette.disabled span {
    display: block;
    text-align: left;
    padding-left: .75rem;
}

.color-palette-box h4 {
    position: absolute;
    left: 1.25rem;
    margin-top: .75rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    display: block;
    z-index: 7;
}
</style>