import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { RootState } from 'app/rootReducer';
import { addCandidate } from 'features/user/userSlice';

// types
import { FormItem, InitialData } from './types';

// assets
import { arrowIcon } from 'config/images';

// componenets
import PageWrapper from 'common/components/PageWrapper/PageWrapper';
import { TextInput } from 'common/components/FormHelper/FormHelper';
import { PrimaryButton } from 'common/components/Button/Button';

const initialData: InitialData = {
  firstName: '',
  lastName: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().email().required('Email is Required'),
});

export const generateFormInputs = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
];

export default function UserDetails() {
  const history = useHistory();
  const dispatch = useDispatch();

  const candidate = useSelector((state: RootState) => state.user.candidate);

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (v: InitialData) => {
      dispatch(
        addCandidate({
          firstname: v.firstName,
          lastname: v.lastName,
          email: v.email,
        }),
      );
    },
  });

  useEffect(() => {
    if (candidate.data) history.push('/quiz');
  }, [candidate.data]);

  return (
    <PageWrapper className='content-center justify-center text-center'>
      <div className='flex flex-col items-center gap-5'>
        <p className='text-xl'>Applicant Logic Assesment</p>
        <h2 className='text-4xl font-black'>Tell us a little about yourself</h2>
        <form className='flex flex-col w-full gap-6 mt-10 md:w-96' onSubmit={formik.handleSubmit}>
          {generateFormInputs.map((item: FormItem) => (
            <TextInput
              label={item.label}
              id={item.name}
              name={item.name}
              type={item.type}
              key={item.name}
              onChange={formik.handleChange}
              value={formik.values[item.name]}
              onBlur={formik.handleBlur}
              inputError={formik.errors[item.name]}
              className='min-w-full'
            />
          ))}

          <PrimaryButton
            loading={candidate.loading}
            loadingText='Creating user...'
            type='submit'
            className='self-center mt-10'
            onClick={() => history.push('/user')}
          >
            Next
            <img src={arrowIcon} alt='arrow' className='object-contain h-5 ml-4' />
          </PrimaryButton>
        </form>
      </div>
    </PageWrapper>
  );
}
