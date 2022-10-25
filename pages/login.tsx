import AuthLayout from '@/layouts/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginValues } from '@/interfaces/index';
import { ToastContainer } from 'react-toastify';
import { login } from 'redux/auth/authReducer';
import { useAppDispatch } from 'redux/hooks';
import Button from '@/components/general/Button';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    mode: 'onBlur',
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    dispatch(login(data));
  };

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <ToastContainer />
      <div className="login-container max-w-[568px] w-full p-10 boxShadow rounded">
        <Link href="/">
          <a>
            <i className="arrow alternate circle left icon !text-4xl text-primary mb-5 hover:text-black transition-all"></i>
          </a>
        </Link>
        <h1 className="mb-5 text-2xl font-semibold">Welcome to Airbnb</h1>
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputField rounded-t-md border-b-0">
            <input
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              type="text"
              placeholder="Email"
              className="w-full"
            />
            {errors.email && errors.email.type === 'required' && (
              <span className="text-[red]">This is required</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className="text-[red]">{errors.email.message}</span>
            )}
          </div>
          <div className="inputField rounded-b-md">
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
              className="w-full"
            />
            {errors.password && errors.password.type === 'required' && (
              <span className="text-[red]">This is required</span>
            )}
          </div>
          <Button className="py-2 px-4 font-bold mt-5 w-full" variant="primary">
            LOGIN
          </Button>
        </form>
        <button className="w-full" type="button" onClick={() => router.push('/register')}>
          Do not have the account yet? <strong>Register</strong>
        </button>
      </div>
    </div>
  );
};

Login.Layout = AuthLayout;

export default Login;
