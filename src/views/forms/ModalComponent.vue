<template>
    <div class="card mb-4">
        <div class="card-header  bg-primary text-white">
            <i class="fas fa-chart-area me-1"></i>
            Modal Example
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <button type="button" class="mb-3 btn btn-block btn-dark" data-bs-toggle="modal"
                        data-bs-target="#modal-default">Default</button>
                    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default"
                        aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-default">Type your modal title</h6>
                                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia
                                        and Consonantia, there live the blind texts. Separated they live in
                                        Bookmarksgrove right at the coast of the Semantics, a large language
                                        ocean.</p>
                                    <p>A small river named Duden flows by their place and supplies it with the
                                        necessary regelialia. It is a paradisematic country, in which roasted
                                        parts of sentences fly into your mouth.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-dark">Save changes</button>
                                    <button type="button" class="ml-auto btn btn-link text-dark"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <button type="button" class="mb-3 btn btn-block bg-gradient-warning" data-bs-toggle="modal"
                        data-bs-target="#modal-notification">Notification</button>
                    <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog"
                        aria-labelledby="modal-notification" aria-hidden="true">
                        <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-notification">Your attention is
                                        required</h6>
                                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="py-3 text-center">
                                        <i class="ni ni-bell-55 ni-3x"></i>
                                        <h4 class="mt-4 text-gradient text-danger">You should read this!</h4>
                                        <p>A small river named Duden flows by their place and supplies it with
                                            the necessary regelialia.</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-white">Ok, Got it</button>
                                    <button type="button" class="ml-auto text-white btn btn-link"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <button type="button" class="mb-3 btn btn-block bg-gradient-faded-secondary" data-bs-toggle="modal"
                        data-bs-target="#modal-form">Form</button>
                    <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form"
                        aria-hidden="true">
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
                                                    <input type="email" class="form-control" placeholder="Email"
                                                        aria-label="Email" aria-describedby="email-addon">
                                                </div>
                                                <label>Password</label>
                                                <div class="mb-3 input-group">
                                                    <input type="email" class="form-control" placeholder="Password"
                                                        aria-label="Password" aria-describedby="password-addon">
                                                </div>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="rememberMe"
                                                        checked="">
                                                    <label class="form-check-label" for="rememberMe">Remember
                                                        me</label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button"
                                                        class="mt-4 mb-0 btn btn-round bg-gradient-info btn-lg w-100">Sign
                                                        in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="px-1 pt-0 text-center card-footer px-lg-2">
                                            <p class="mx-auto mb-4 text-sm">
                                                Don't have an account?
                                                <a href="javascript:;" class="text-dark font-weight-bold">Sign
                                                    up</a>
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
                    <button type="button" class="mb-3 btn bg-gradient-danger btn-block" data-bs-toggle="modal"
                        data-bs-target="#exampleModalLong">
                        Long Modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    I always felt like I could do anything. That’s the main thing people are
                                    controlled by! Thoughts- their perception of themselves! They're slowed down
                                    by their perception of themselves. If you're taught you can’t do anything,
                                    you won’t do anything. I was taught I could do everything.
                                    <br /><br />
                                    As we live, our hearts turn colder. Cause pain is what we go through as we
                                    become older. We get insulted by others, lose trust for those others. We get
                                    back stabbed by friends. It becomes harder for us to give others a hand. We
                                    get our heart broken by people we love, even that we give them all we have.
                                    Then we lose family over time. What else could rust the heart more over
                                    time? Blackgold.
                                    <br /><br />


                                    We’re not always in the position that we want to be at. We’re constantly
                                    growing. We’re constantly making mistakes. We’re constantly trying to
                                    express ourselves and actualize our dreams. If you have the opportunity to
                                    play this game of life you need to appreciate every moment. A lot of people
                                    don’t appreciate the moment until it’s passed.
                                    <br /><br />


                                    There’s nothing I really wanted to do in life that I wasn’t able to get good
                                    at. That’s my skill. I’m not really specifically talented at anything except
                                    for the ability to learn. That’s what I do. That’s what I’m here for. Don’t
                                    be afraid to be wrong because you can’t learn anything from a compliment.
                                    <br /><br />

                                    It really matters and then like it really doesn’t matter. What matters is
                                    the people who are sparked by it. And the people who are like offended by
                                    it, it doesn’t matter. Because it's about motivating the doers. Because I’m
                                    here to follow my dreams and inspire other people to follow their dreams,
                                    too.
                                    <br /><br />

                                    The time is now for it to be okay to be great. People in this world shun
                                    people for being great. For being a bright color. For standing out. But the
                                    time is now to be okay to be the greatest you. Would you believe in what you
                                    believe in, if you were the only one who believed it?
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
                    <button type="button" class="mb-3 btn bg-gradient-success btn-block" data-bs-toggle="modal"
                        data-bs-target="#exampleModalMessage">
                        Message Modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalMessage" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalMessageTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">New message to @CT</h5>
                                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                            <input type="text" class="form-control" value="Creative Tim"
                                                id="recipient-name">
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
                    <button type="button" class="btn bg-gradient-info btn-block" data-bs-toggle="modal"
                        data-bs-target="#exampleModalSignUp">
                        SignUp Modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalSignUp" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalSignTitle" aria-hidden="true">
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
                                                    <input type="text" class="form-control" placeholder="Name"
                                                        aria-label="Name" aria-describedby="name-addon">
                                                </div>
                                                <label>Email</label>
                                                <div class="mb-3 input-group">
                                                    <input type="email" class="form-control" placeholder="Email"
                                                        aria-label="Email" aria-describedby="email-addon">
                                                </div>
                                                <label>Password</label>
                                                <div class="mb-3 input-group">
                                                    <input type="password" class="form-control" placeholder="Password"
                                                        aria-label="Password" aria-describedby="password-addon">
                                                </div>
                                                <div class="text-left form-check form-check-info">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" checked="">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        I agree the <a href="javascrpt:;"
                                                            class="text-dark font-weight-bolder">Terms and
                                                            Conditions</a>
                                                    </label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button"
                                                        class="mt-4 mb-0 btn btn-dark btn-lg btn-rounded w-100">Sign
                                                        up</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="px-1 pt-0 text-center card-footer px-sm-4">
                                            <p class="mx-auto mb-4">
                                                Already have an account?
                                                <a href="javascrpt:;" class="text-dark font-weight-bold">Sign
                                                    in</a>
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
</template>

<script>
export default {

}
</script>