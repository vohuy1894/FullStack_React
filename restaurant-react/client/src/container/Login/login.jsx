import React from 'react';

import './Laurels.css';

const Login = () => (
    <Layout title="Login">
    <div className="flex items-center justify-center m-auto mt-20">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-4xl my-4">Continue Shopping</h1>
        <div className="">
          <Label className="block text-grey-darker text-sm font-bold mb-2">
            <span>Email</span>
          </Label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="email"
            name="email"
            ref={register({
              required: true,
              // eslint-disable-next-line no-useless-escape
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
            placeholder="Enter a valid email"
          />
        </div>
        {errors.email && errors.email.type === "required" && (
          <HelperText className="mt-1 italic" valid={false}>
            Email required
          </HelperText>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <HelperText className="mt-1 italic" valid={false}>
            Invalid email
          </HelperText>
        )}
        <div className="mt-4">
          <Label className="block text-grey-darker text-sm font-bold mb-2">
            <span>Password</span>
          </Label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="password"
            name="password"
            ref={register({ required: true })}
          />
        </div>
        {errors.password && errors.password.type === "required" && (
          <HelperText className="mt-1 italic" valid={false}>
            Password required
          </HelperText>
        )}
        {error && (
          <HelperText className="mt-1 italic" valid={false}>
            {error}
          </HelperText>
        )}
        <div className="mt-4">
          <ForgotPasswordModal />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <PulseLoader color={"#0a138b"} size={10} loading={isLoading} />
          ) : (
            "Login"
          )}
        </Button>
        <GoogleLogin
          className="my-4 flex justify-center"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
        />
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </Layout>
);

export default Login;
