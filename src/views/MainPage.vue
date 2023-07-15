<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Dashboard</li>
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
                        Bar Chart Example
                    </div>
                    <div class="card-body">

                        <form>
                            <div class="row">
                                <label for="fname" class="col-sm-2
                col-form-label">First Name</label>
                                <div class="col-sm">
                                    <input type="text" class="form-control"
                                           id="fname" placeholder="First Name">
                                </div>
                            </div>

                            <div class="row mt-4">
                                <label for="lname" class="col-sm-2
                col-form-label">Last Name</label>
                                <div class="col-sm">
                                    <input type="text" class="form-control"
                                           id="lname" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row mt-4">
                                <label for="email" class="col-sm-2
                col-form-label">Email Id</label>
                                <div class="col-sm">
                                    <input type="email" class="form-control"
                                           id="email" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row mt-4 mb-4">
                                <label for="mobile" class="col-sm-2
                col-form-label">Mobile No</label>
                                <div class="col-sm">
                                    <input type="tel" class="form-control"
                                           id="mobile" placeholder="Last Name">
                                </div>
                            </div>

                            <fieldset class="row">
                                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div class="col-sm">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"
                                               name="gender" id="male" value="option1"
                                               checked>
                                        <label class="form-check-label" for="male">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"
                                               name="gender" id="female" value="option2">
                                        <label class="form-check-label" for="female">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"
                                               name="gender" id="others" value="option3">
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
                        Quick Example
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="example-text-input" class="form-control-label">Text</label>
                                <input class="form-control" type="text" value="John Snow" id="example-text-input">
                            </div>
                            <div class="form-group">
                                <label for="example-search-input" class="form-control-label">Search</label>
                                <input class="form-control" type="search" value="Tell me your secret ..." id="example-search-input">
                            </div>
                            <div class="form-group">
                                <label for="example-email-input" class="form-control-label">Email</label>
                                <input class="form-control" type="email" value="@example.com" id="example-email-input">
                            </div>
                            <div class="form-group">
                                <label for="example-url-input" class="form-control-label">URL</label>
                                <input class="form-control" type="url" value="" id="example-url-input">
                            </div>
                            <div class="form-group">
                                <label for="example-tel-input" class="form-control-label">Phone</label>
                                <input class="form-control" type="tel" value="40-(770)-888-444" id="example-tel-input">
                            </div>
                            <div class="form-group">
                                <label for="example-password-input" class="form-control-label">Password</label>
                                <input class="form-control" type="password" value="password" id="example-password-input">
                            </div>
                            <div class="form-group">
                                <label for="example-number-input" class="form-control-label">Number</label>
                                <input class="form-control" type="number" value="23" id="example-number-input">
                            </div>
                            <div class="form-group">
                                <label for="example-datetime-local-input" class="form-control-label">Datetime</label>
                                <input class="form-control" type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input">
                            </div>
                            <div class="form-group">
                                <label for="example-date-input" class="form-control-label">Date</label>
                                <input class="form-control" type="date" value="2018-11-23" id="example-date-input">
                            </div>
                            <div class="form-group">
                                <label for="example-month-input" class="form-control-label">Month</label>
                                <input class="form-control" type="month" value="2018-11" id="example-month-input">
                            </div>
                            <div class="form-group">
                                <label for="example-week-input" class="form-control-label">Week</label>
                                <input class="form-control" type="week" value="2018-W23" id="example-week-input">
                            </div>
                            <div class="form-group">
                                <label for="example-time-input" class="form-control-label">Time</label>
                                <input class="form-control" type="time" value="10:30:00" id="example-time-input">
                            </div>
                            <div class="form-group">
                                <label for="example-color-input" class="form-control-label">Color</label>
                                <input class="form-control" type="color" value="#5e72e4" id="example-color-input">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header  bg-primary text-white">
                        <i class="fas fa-chart-area me-1"></i>
                        Quick Example
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <button type="button" class="mb-3 btn btn-block btn-dark" data-bs-toggle="modal" data-bs-target="#modal-default">Default</button>
                                <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                                    <div class="modal-dialog modal- modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h6 class="modal-title" id="modal-title-default">Type your modal title</h6>
                                                <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-dark">Save changes</button>
                                                <button type="button" class="ml-auto btn btn-link text-dark" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <button type="button" class="mb-3 btn btn-block bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modal-notification">Notification</button>
                                <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                                    <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h6 class="modal-title" id="modal-title-notification">Your attention is required</h6>
                                                <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="py-3 text-center">
                                                    <i class="ni ni-bell-55 ni-3x"></i>
                                                    <h4 class="mt-4 text-gradient text-danger">You should read this!</h4>
                                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-white">Ok, Got it</button>
                                                <button type="button" class="ml-auto text-white btn btn-link" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <button type="button" class="mb-3 btn btn-block btn-white" data-bs-toggle="modal" data-bs-target="#modal-form">Form</button>
                                <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered " role="document">
                                        <div class="modal-content">
                                            <div class="p-0 modal-body">
                                                <div class="card card-plain">
                                                    <div class="pb-0 text-left card-header">
                                                        <h3 class="font-weight-bolder text-dark">Welcome back</h3>
                                                        <p class="mb-0">Enter your email and password to sign in</p>
                                                    </div>
                                                    <div class="card-body">
                                                        <form role="form text-left">
                                                            <label>Email</label>
                                                            <div class="mb-3 input-group">
                                                                <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon">
                                                            </div>
                                                            <label>Password</label>
                                                            <div class="mb-3 input-group">
                                                                <input type="email" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                                            </div>
                                                            <div class="form-check form-switch">
                                                                <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="mt-4 mb-0 btn btn-round bg-gradient-info btn-lg w-100">Sign in</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="px-1 pt-0 text-center card-footer px-lg-2">
                                                        <p class="mx-auto mb-4 text-sm">
                                                            Don't have an account?
                                                            <a href="javascript:;" class="text-dark font-weight-bold">Sign up</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <!-- Button trigger modal -->
                                <button type="button" class="mb-3 btn bg-gradient-danger btn-block" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                                    Long Modal
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
                                                <br/><br/>
                                                As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold.
                                                <br/><br/>


                                                We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                                                <br/><br/>


                                                There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.
                                                <br/><br/>

                                                It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
                                                <br/><br/>

                                                The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-dark">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Button trigger modal -->
                                <button type="button" class="mb-3 btn bg-gradient-success btn-block" data-bs-toggle="modal" data-bs-target="#exampleModalMessage">
                                    Message Modal
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModalMessage" tabindex="-1" role="dialog" aria-labelledby="exampleModalMessageTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">New message to @CT</h5>
                                                <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                                                        <input type="text" class="form-control" value="Creative Tim" id="recipient-name">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="message-text" class="col-form-label">Message:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-dark">Send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#exampleModalSignUp">
                                    SignUp Modal
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModalSignUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalSignTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered " role="document">
                                        <div class="modal-content">
                                            <div class="p-0 modal-body">
                                                <div class="card card-plain">
                                                    <div class="pb-0 text-left card-header">
                                                        <h3 class="font-weight-bolder text-dark">Sign up</h3>
                                                        <p class="mb-0">Enter your email and password to register</p>
                                                    </div>
                                                    <div class="pb-3 card-body">
                                                        <form role="form text-left">
                                                            <label>Name</label>
                                                            <div class="mb-3 input-group">
                                                                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="name-addon">
                                                            </div>
                                                            <label>Email</label>
                                                            <div class="mb-3 input-group">
                                                                <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon">
                                                            </div>
                                                            <label>Password</label>
                                                            <div class="mb-3 input-group">
                                                                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                                            </div>
                                                            <div class="text-left form-check form-check-info">
                                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked="">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    I agree the <a href="javascrpt:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                                                </label>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="mt-4 mb-0 btn btn-dark btn-lg btn-rounded w-100">Sign up</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="px-1 pt-0 text-center card-footer px-sm-4">
                                                        <p class="mx-auto mb-4">
                                                            Already have an account?
                                                            <a href="javascrpt:;" class="text-dark font-weight-bold">Sign in</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
</script>